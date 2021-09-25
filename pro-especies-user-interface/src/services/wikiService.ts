import axios from "axios"

const wikiService = axios.create({
    baseURL: 'http://192.168.0.24:4002'
});

export default wikiService;