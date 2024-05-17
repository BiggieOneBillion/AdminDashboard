import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_BASEURL,
    headers: {
      'Content-Type': 'application/json',
    }
});