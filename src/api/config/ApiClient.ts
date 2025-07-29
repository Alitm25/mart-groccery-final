import axios from "axios";
import {toast} from "react-toastify";

const apiClient = axios.create({
    baseURL: 'https://nest.navaxcollege.com/api/',
    timeout: 120000
});

apiClient.interceptors.request.use(function (request) {
    const token = window.localStorage.getItem('login-token')

    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }


    return request;
})

export default apiClient;


apiClient.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    if (error.response) {
        if (error.response.status === 404) {
            toast.error('The resource does not exist!');
        }
        else if (error.response.status === 400) {
            toast.error('The sending parameters are not correct!');
        }
        else if (error.response.status === 401) {
            toast.error('Please sign in!');
        }
        else if (error.response.status === 403) {
            toast.error('Authentication failed, You do not have access to continue!');
        }
        else {
            toast.error('Something went wrong, Please try again later.');
        }
    } else if (error.request) {
        toast.error('Server error, Please try again later.');
    } else {
        toast.error('An error occured, Please try again later.');
    }

    return Promise.reject(error);
})

