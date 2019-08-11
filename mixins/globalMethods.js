import axios from "axios";

const onSuccess = (response) =>{
    return Promise.resolve(response.data)
}

const onError = () =>{
    throw new Error('API error.')
}

export default{
    methods: {
        get: (url, parms) => {
            return axios.get(url, {parms: parms})
                .then(onSuccess)
                .catch(onError)
        },
        post: (url, parms) => {
            return axios.get(url, {parms: parms})
                .then(onSuccess)
                .catch(onError)
        },
        put: (url, parms) => {
            return axios.get(url, {parms: parms})
                .then(onSuccess)
                .catch(onError)
        },
        delete: (url, parms) => {
            return axios.get(url, {parms: parms})
                .then(onSuccess)
                .catch(onError)
        },
    }
}