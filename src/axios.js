import axios from 'axios'

const instance = axios.create({
    baseURL:"https://alemantrix-tinder-backend.herokuapp.com"
})

export default instance