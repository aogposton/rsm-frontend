<script setup lang="ts">
import { useBrewStore } from "@/stores/brew";
import mapComp from "@/components/mapComp.vue";

const brewStore = useBrewStore();
brewStore.getList();
</script>

<template>
  <main>
    <div class="container p-5">
      <div class="row">
        <div class="col-6">
          <h1>list</h1>
          <div class="container">
            <div
              class="row border-bottom"
              v-for="(brewery, brewIndex) in brewStore.brewList"
              :key="brewery.id"
            >
              <div class="container">
                <div class="row">
                  <div class="col">Name:</div>
                  <div class="col">{{ brewery.name }}</div>
                </div>
                <div class="row">
                  <div class="col">Type:</div>
                  <div class="col">
                    {{ brewery.brewery_type }}
                  </div>
                </div>
                <div class="row">
                  <div class="col">Address:</div>
                  <div class="col">
                    {{ brewery.street }}<br />
                    {{ brewery.city }}<br />
                    {{ brewery.state }}<br />
                    {{ brewery.postal_code }}
                  </div>
                </div>
                <div class="row">
                  <div class="col"></div>
                  <div class="col">
                    <a target="_blank" :href="brewery.website_url">Website</a>
                  </div>
                </div>
                <div class="row my-5">
                  <div class="col"></div>
                  <div class="col">
                    <a
                      class="btn btn-primary"
                      href="javascript:;"
                      @click="brewStore.selectBrew(brewIndex)"
                    >
                      Select Brewery </a
                    ><br />
                    <span v-if="brewery.longitude == null">Has no map</span>
                    <span v-else>Has a map</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6" v-if="brewStore.selectedBrew !== null">
          <h1>Single</h1>
          <div class="container">
            <div class="row">
              <div class="col">Name:</div>
              <div class="col">{{ brewStore.selectedBrew.name }}</div>
            </div>
            <div class="row">
              <div class="col">Type:</div>
              <div class="col">{{ brewStore.selectedBrew.brewery_type }}</div>
            </div>
            <div class="row">
              <div class="col">Address:</div>
              <div class="col">
                {{ brewStore.selectedBrew.street }}<br />
                {{ brewStore.selectedBrew.city }}<br />
                {{ brewStore.selectedBrew.state }}<br />
                {{ brewStore.selectedBrew.postal_code }}
              </div>
            </div>
            <div class="row">
              <div class="col"></div>
              <div class="col">
                <a target="_blank" :href="brewStore.selectedBrew.website_url"
                  >Website</a
                >
              </div>
            </div>
            <div class="row" :key="brewStore.selectedBrew.latitude">
              <div class="col">
                <mapComp
                  :lat="brewStore.selectedBrew.latitude"
                  :long="brewStore.selectedBrew.longitude"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
