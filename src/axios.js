import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://movies-8ce21.firebaseio.com/'
});

export default instance;
