import axios from 'axios'


export function findAll() {
    let findArticles = [];
           axios.get('https://localhost:8001/api/articles')
                .then( response => {
                     findArticles.push(response.data['hydra:member']);
                })
                .catch(error => {
                    console.log(error)
                });
           return findArticles;
        }


