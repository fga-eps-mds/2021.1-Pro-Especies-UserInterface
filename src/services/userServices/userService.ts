import axios from "axios";
import { IP_ADDRESS } from "@env";

const userService = axios.create({
  baseURL: `http://${IP_ADDRESS}:4000`,
});

export { userService };
