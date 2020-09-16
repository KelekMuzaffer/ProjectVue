<template>
  <div class="articles">
    <h1>Les Articles</h1>
    <div class="ui four column grid">
      <div class="column" v-for="article in articles " v-bind:key="article.id">
        <div class="ui card">
          <div class="content">
            <div class="header">
              <p> Name : {{ article.name }} </p>
            </div>
            <div class="description">
              <p> Content : {{ article.content }} </p>
              <p> Price : {{ article.price }} €</p>
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

export default {
  name: 'articleView',
  data() {
    return {
      fArticles: null
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters["articles/isLoading"];
    },
    hasError() {
      return this.$store.getters["articles/hasError"];
    },
    error() {
      return this.$store.getters["articles/error"];
    },
    hasArticles() {
      return this.$store.getters["articles/hasPosts"];
    },
    articles() {
      return this.$store.getters["articles/articles"];
    }
  },
  created() {
    this.$store.dispatch("articles/findAll");
  }
}
</script>

