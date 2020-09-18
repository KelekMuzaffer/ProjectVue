import axios from 'axios';

export default {
    findAllUsers() {
      return axios.get('https://localhost:8001/api/users')
            .then(response => {
                return response.data['hydra:member']
            })
            .catch(error => {
                return error
            })
    },
    createUser(user){
        axios.post('https://localhost:8001/api/users', {
            email: user.email,
            password: user.password

        }).then( response => {
            return response.data
        }).catch( error  => {
            return error
        })
    }
}