import axios from "axios"


const instance = axios.create({
  timeout:5000
})

instance.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  response => {
    
    return response.status === 200 ? Promise.resolve(response) : Promise.reject(response)

    // return response.data;
  },
  error => {
    // const {response} = error;
    console.log(error);
  }
)

export default instance;