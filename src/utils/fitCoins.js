import https from "@/api/https";
import { ref, reactive } from "vue";

export const fitCoinsApi = () => {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  const token = ref(getCookie("token"));

  const pacotes = reactive([]);

  async function pacotesFetch() {
    await https
      .get("", {
        headers: {
          "x-monte-ia-fit-token": token.value,
        },
      })
      .then((res) => {})
      .catch((err) => {});
  }

  return {
    pacotesFetch,
    pacotes,
  };
};
