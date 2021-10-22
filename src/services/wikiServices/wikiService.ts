import axios from 'axios';
import config from '../../../config';

const wikiService = axios.create({
  baseURL: `http://${config.IP_ADDRESS}:4002`,
});

export default wikiService;
