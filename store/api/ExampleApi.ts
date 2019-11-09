import axios from "axios";
import {axiosDefault} from "./ApiConfig"

export interface ServerData {
    userId: number
    id: number
    title: string
    completed: boolean
}

  
class ExampleApi {
    static tryMe = (anyparams?: string) => axios.get(`https://jsonplaceholder.typicode.com/todos/1`, axiosDefault<ServerData>())
    // static tryMe = (anyparams?: string) => axios.get('https://jsonplaceholder.typicode.com/todos/1')
}

export default ExampleApi