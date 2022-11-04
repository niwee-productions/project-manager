import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'http://localhost/api/v1',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer '
        },
    }
);

export default api;
