import { ref, computed } from "vue";
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
  updated_at: date;
  created_at: date;
}
export const useBrewStore = defineStore("brew", () => {
  const selectedBrew: breweryReturn = ref(null);
  const brewList: breweryReturn[] = ref([]);
  const city = ref("atlanta");

  const getList = async () => {
    brewList.value = (
      await axios.get(
        `https://api.openbrewerydb.org/breweries?by_city=${city.value}&per_page=50`
      )
    ).data;
    console.log(brewList.value);
  };

  const selectBrew = async (index) => {
    selectedBrew.value = brewList.value[index];
  };

  return { getList, selectBrew, city, brewList, selectedBrew };
});
