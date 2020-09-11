import axios from "axios";

const instance = axios.create({
  // baseURL: "...", // the API (cloud function) url
  baseURL: "http://localhost:5001/clone-34ebc/us-central1/api", // the API (cloud function) url
  //   timeout: 1000,
  //   headers: {'X-Custom-Header': 'foobar'}
});

export default instance;
