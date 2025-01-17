import axios, { AxiosRequestConfig } from "axios";
export interface Response<T> {
  count: number;
  next: string | undefined;
  results: T[];
}

const axiosInstants = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4ca609fda82941b1a824068e3cdca47f",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstants
      .get<Response<T>>(this.endpoint, config)
      .then((e) => e.data);
  };
}

export default APIClient;
