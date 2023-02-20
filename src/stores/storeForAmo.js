import { defineStore } from "pinia";
import { ref } from "vue";

export const useAmoApi = defineStore("amoApi", () => {
  const URL = "https://testgenesis.onrender.com/api/";
  const loader = ref(false);
  const result = ref([]);
  const postIt = async (entity) => {
    loader.value = true;
    await fetch(
      URL +
        new URLSearchParams({
          type: entity,
        })
    )
      .then((response) => response.json())
      .then((json) => {
        if (json._embedded.contacts)
          result.value.push({
            type: "Контак",
            id: json._embedded.contacts[0].id,
          });
        else if (json._embedded.leads)
          result.value.push({
            type: "Сделка",
            id: json._embedded.leads[0].id,
          });
        else
          result.value.push({
            type: "Компания",
            id: json._embedded.companies[0].id,
          });
      })
      .catch((a) => {
        console.log(a.message);
      });
    loader.value = false;
  };
  return {
    postIt,
    result,
    loader,
  };
});
