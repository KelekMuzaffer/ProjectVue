import axios from 'axios'
// call Api centraliser pour les articles qui est utiliser dans store/articles.js
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