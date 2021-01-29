import axios from 'axios';

export const apiURL = 'https://webeditorapi.tudolinux.com.br';

const api = axios.create({
    baseURL: apiURL,
})

export default api;
