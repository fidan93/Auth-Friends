import axios from 'axios';

const axiosAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:5001/api',
        headers: {
            Autharization: token
        }
    })
}

export default axiosAuth