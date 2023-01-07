import axios from 'axios';

export const apiURL = process.env.NEXT_PUBLIC_APIURL;
export const webURL = process.env.NEXT_PUBLIC_WEBURL;

const api = axios.create({
    baseURL: `${apiURL}/maisreceitas`,
})

api.defaults.headers.company = 'f75d0fea-1ea0-4cb2-b4ac-1fadcb03797f';

export default api;
