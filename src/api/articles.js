import axios from 'axios'

export default {
    findAll() {
      return axios.get('https://localhost:8001/api/articles')
            .then( response => {
               return  response.data['hydra:member'];
            })
            .catch(error => {
                return error
            })
    }
}