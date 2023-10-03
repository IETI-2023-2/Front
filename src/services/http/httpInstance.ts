import axios from "axios";

const httpInstance = axios.create({
    baseURL: 'http://localhost:8080',
    // baseURL: process.env.REACT_APP_LOCAL_API_URL_CARS,
});

// Add a request interceptor
// TODO: check if this is necessary (add the Content-Type Header)
httpInstance.interceptors.request.use(
    async (config) => {
        // newConfig.headers.Authorization = `Bearer ${jwtToken}`;
        //newConfig.headers["X-Version"] = "1.0.0";
        //newConfig.headers["X-Signature"] = demoToken;
        return {...config};
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
httpInstance.interceptors.response.use(
    (response) => {
        // console.log(response);
        return response;
    },
    (error) => {
        // console.log(error);
        return Promise.reject(error);
    }
);

export default httpInstance;