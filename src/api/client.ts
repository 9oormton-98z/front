import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = 'https://jejuvelue.link';
//'http://velm:8080'
//'http://10.10.123.84:8080'
//'http://43.200.215.234'

export default client;
