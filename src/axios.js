import axios from "axios";


const instance = axios.create({
	baseURL:"https://tinderclone25.herokuapp.com"
})

export default instance;