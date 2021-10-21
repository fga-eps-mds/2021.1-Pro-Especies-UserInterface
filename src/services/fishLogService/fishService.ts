import axios from 'axios';
import { IP_ADDRESS } from '@env';

const fishLogService = axios.create({
  baseURL: `http://${IP_ADDRESS}:4001`,
});

export { fishLogService };
