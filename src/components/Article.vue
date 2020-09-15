<template>
  <div class="pagesArticles">
    <div class="ui active dimmer" v-if="loading" >
      <div class="ui loader" ></div>
    </div>
    <div class="ui four column grid">
      <div class="column" v-for="article in articles " v-bind:key="article.id">
        <div class="ui card">
          <div class="content">
            <div class="header">
              <p> Name : {{ article.name }} </p>
            </div>
            <div class="description">
              <p> Content : {{ article.content}} </p>
              <p> Price : {{ article.price}} €</p>
            </div>
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button" @click="edit(article)">Modifier</div>
            <div class="ui basic red button" @click="destroy(article)">Supprimer</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { findAll } from "../api/articles";
// console.log(findAll())
import axios from 'axios'

export default {
  name: "ArticlesComponent",

  data () {
    return {
      articles: null
    }
  },
  mounted() {
    axios.get('https://localhost:8001/api/articles')
        .then( response => {
          this.articles = response.data['hydra:member'];
        })
        .catch(error => {
          console.log(error)
        });
  },
  methods: {

    edit(article) {
      this.$articles.update({id: article.id }, {name: article.name}).then((response) => {
        return response
      }, (response) => {
        console.log('erreur', response)

      })
    },
    destroy(article) {
      this.$articles.remove({id: article.id})
          .then((response) => {
                this.articles =this.articles.filter(u => u !== article)
            return response
              },
              (response) => {
                console.log('erreur', response)
              })
    }
  }
}
</script>
