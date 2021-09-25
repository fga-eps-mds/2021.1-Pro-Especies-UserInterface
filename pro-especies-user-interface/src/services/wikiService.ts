import axios from "axios"

const wikiService = axios.create({
    baseURL: 'http://192.168.1.104:4002'
});

export default wikiService;