import axios from 'axios';
import config from '../../../config';

const userService = axios.create({
  baseURL: `http://${config.IP_ADDRESS}:4000`,
});

export { userService };
