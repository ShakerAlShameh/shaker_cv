import axios, { CanceledError } from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4ca609fda82941b1a824068e3cdca47f",
  },
});

export default apiClient;
export { CanceledError };
