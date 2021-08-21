 import axios from 'axios';
 import {MAIN_URL} from '../shared/constants';

 const request = async function (options) {
  //  const requestHeaders = options.customHeaders || { //karena belum membutuhkan header jadi di comment sementara
  //    'Content-type': 'application/json',
  //    Accept: 'application/json',
  //  };
   const client = axios.create({
     baseURL: options.MAIN_URL || MAIN_URL
   });
   const onSuccess = function (response) {
        return response.data;
   };
 
   const onError = function (error) {
     console.log('Request Failed:', error.config);
     return Promise.reject(error.response || error.message);
   };
 
   return client(options).then(onSuccess).catch(onError)
 };
 
 export default request;
 