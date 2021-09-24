import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.1.68:4000"
});

export { api };