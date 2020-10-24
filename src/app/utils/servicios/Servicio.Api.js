import axios from 'axios';

const BASE_URL = 'https://reqres.in';
// const BASE_URL = 'https://leo.lucia.com.co';


const ServicioApi = {

    get: (pagina) => {
        return axios.get(BASE_URL + `/api/users?page=${pagina}`);
    }

}

export default ServicioApi;