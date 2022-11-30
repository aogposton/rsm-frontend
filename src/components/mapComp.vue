<script setup lang="ts">
import L from "leaflet";
import { onMounted, onUpdated, defineProps } from "vue";
const props = defineProps(["lat", "long"]);

const hasLocation = props.lat != null && props.long != null;
let map = null;

const setMap = () => {
  if (hasLocation) {
    map = L.map("map").setView([props.lat, props.long], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([props.lat, props.long]).addTo(map);
  }
};

const updateMap = () => {
  map = null;
};

onMounted(() => {
  setMap();
});

onUpdated(() => {
  updateMap();
  setMap();
});
// console.log(map);
</script>
<style>
#map {
  height: 100vh;
  width: auto;
}
</style>
<template>
  <div id="map" v-if="hasLocation"></div>
</template>
