import axios from "axios";
import { IP_ADDRESS } from '@env';

const wikiService = axios.create({
    baseURL: `http://${IP_ADDRESS}/:4002`
});

export default wikiService;