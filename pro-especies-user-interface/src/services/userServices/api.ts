import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:4000"
});

export { api };