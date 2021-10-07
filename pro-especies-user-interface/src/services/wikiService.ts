import axios from "axios";
import { IP_ADDRESS } from '@env';

const wikiService = axios.create({
    baseURL: "http://192.168.0.206:4002"
});

export default wikiService;