import axios from 'axios';
const config = require('../../../config');

const wikiService = axios.create({
  baseURL: `http://${config.IP_ADDRESS}:4002`,
});

export default wikiService;
