import axios from "axios";

const api = axios.create({
    baseURL: "http://:4000"
});

export { api };