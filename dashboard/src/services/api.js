import axios from 'axios';

const api = axios.create({
        baseURL: 'https://run.mocky.io/v3/fbb7ec01-1dab-4f90-9130-683f475d7d67'
    });
export default api;