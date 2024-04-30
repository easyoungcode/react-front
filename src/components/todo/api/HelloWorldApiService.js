import axios from "axios"

// export function retireveHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

const apiClient = axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)

export const retireveHelloWorldBean 
    = () => apiClient.get('/hello-world-bean')

export const retireveHelloWorldPathVariable 
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`)