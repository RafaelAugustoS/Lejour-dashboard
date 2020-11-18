import axios from "axios";

const HTTPClient = axios.create({
  baseURL: "https://sheet2api.com/v1/ByR2h1huRjyQ/fiap/",
});

HTTPClient.defaults.headers.common["Content-Type"] = "application/json";

export default HTTPClient;
