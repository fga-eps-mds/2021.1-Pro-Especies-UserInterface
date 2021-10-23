import axios from 'axios';
const config = require('../../../config');

const userService = axios.create({
  baseURL: `http://${config.IP_ADDRESS}:4000`,
});

export { userService };
