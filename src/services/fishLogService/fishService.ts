import axios from 'axios';
import config from '../../../config';

const fishLogService = axios.create({
  baseURL: `http://${config.IP_ADDRESS}:4001`,
});

export { fishLogService };
