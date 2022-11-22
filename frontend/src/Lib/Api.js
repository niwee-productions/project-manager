import axios from 'axios';

export default function Api() {
    return axios.create({
        baseURL: 'http://localhost:80/api'
    });
}