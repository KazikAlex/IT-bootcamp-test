import axios from "axios";

const $host = axios.create({
    baseURL: 'https://rickandmortyapi.com/'
})

export {
    $host
}