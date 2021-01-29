import axios from 'axios';

const api = axios.create({
    baseURL: 'https://webeditorapi.tudolinux.com.br',
})

export default api;
