import { ref, computed } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

interface breweryReturn {
  id: string;
  name: string;
  brewery_type: string;
  street: string;
  address_2: string;
  address_3: string;
  city: string;
  state: string;
  county_province: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  updated_at: string;
  created_at: string;
}
export const useBrewStore = defineStore("brew", () => {
  const selectedBrew: Ref<breweryReturn | null> = ref(null);
  const brewList: Ref<breweryReturn[] | []> = ref([]);
  const city = ref("atlanta");

  const getList = async () => {
    brewList.value = (
      await axios.get(`http://rsm.immaculateintellect.com/api/`)
    ).data;
  };

  const selectBrew = async (index: number) => {
    selectedBrew.value = brewList.value[index];
  };

  return { getList, selectBrew, city, brewList, selectedBrew };
});
