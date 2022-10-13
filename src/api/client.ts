import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = 'http://43.200.215.234';
//'http://velm:8080'
//'http://10.10.123.84:8080'

export default client;
