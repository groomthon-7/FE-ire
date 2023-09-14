import axios from 'axios';
import { SPRING_URL } from './url';

const client = axios.create();
client.defaults.baseURL = `${SPRING_URL}`;
client.defaults.withCredentials = true;

export default client;
