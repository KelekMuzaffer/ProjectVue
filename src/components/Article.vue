<!--Ce component ne sert a rien ^^ -->
<template>
  <div class="pagesArticles">
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
  name: "ArticlesComponent",

  data () {
    return {
      articles: null,
      name: '',
      content: '',
      price: '',
      output: ''
    }
  }
}
</script>
