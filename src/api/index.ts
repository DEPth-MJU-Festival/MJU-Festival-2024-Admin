import axios from "axios";

const api = axios.create({
  baseURL: "https://mju-festival-2024.kro.kr/",
});

export default api;
