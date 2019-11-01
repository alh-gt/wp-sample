import axios from "axios"
import {forEach, keys} from "lodash";

const onSuccess = (response) =>{
    responseData = response.data
    responseStatus = response.status
    return Promise.resolve(response.data)
}

const onError = () =>{
    throw new Error('API error.')
}

export default{
    data : {
        responseStatus : -1, 
        responseData : {}, 
    },
    get: (url, parms, headers) => {
        // axios.defaults.headers.get["Content-Type"] = "application/x-www-form-urlencoded"
        if (!parms){
            parms = {}
        }
        if(!headers){
            headers = {}
        }
        return axios({
            method : "GET",
            url: url,
            parms: parms,
            headers: headers
        })
        .then(onSuccess)
        .catch(onError)
    },
    post: (url, parms, headers) => {
        if (!parms) {
            parms = {}
        }
        let _parms = new URLSearchParams()
        forEach(keys(parms), (val) => {
            _parms.append(val, parms[val])
        });
        if (!headers) {
            headers = {}
            //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            //     'Access-Control-Allow-Origin': '*',
            //     crossDomain: true
            // }
        }
        // console.log(headers)
        // return axios({
        //     method: "POST",
        //     url: url,
        //     data: _parms,
        //     headers: headers
        // })
        return axios.post(url, _parms, {headers: headers})
        .then(onSuccess)
        .catch(onError)
    },
    put: (url, parms, headers) => {
        // axios.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded"
        if (!parms){
            parms = {}
        }
        if(!headers){
            headers = {}
        }
        return axios({
            method : "PUT",
            url: url,
            parms: parms,
            headers: headers
        })
        .then(onSuccess)
        .catch(onError)
    },
    delete: (url, parms, headers) => {
        // axios.defaults.headers.delete["Content-Type"] = "application/x-www-form-urlencoded"
        if (!parms){
            parms = {}
        }
        if(!headers){
            headers = {}
        }
        return axios({
            method : "DELETE",
            url: url,
            parms: parms,
            headers: headers
        })
        .then(onSuccess)
        .catch(onError)
    },
}