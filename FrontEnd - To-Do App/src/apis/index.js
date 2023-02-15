import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:3030",
    headers: {"Access-Control-Allow-Origin": "https://localhost:3030",
    "Content-Type": "application/json"}
});