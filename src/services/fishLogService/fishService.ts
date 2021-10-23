import axios from 'axios';
const config = require('../../../config');

const fishLogService = axios.create({
  baseURL: `http://${config.IP_ADDRESS}:4001`,
});

export { fishLogService };
