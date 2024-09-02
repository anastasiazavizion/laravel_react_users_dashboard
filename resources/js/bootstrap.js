import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`
    return config;
});


axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {

    const {response} = error;

    if(response.status === 401){ //not auth
        localStorage.removeItem('ACCESS_TOKEN');
    }

    return Promise.reject(error);
});
