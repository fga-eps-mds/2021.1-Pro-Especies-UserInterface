import axios from "axios";

const wikiService = axios.create({
    baseURL: 'http://localhost/:4002'
});

export default wikiService;