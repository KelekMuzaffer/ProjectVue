<template>
  <div class="articles">
    <h1>Les Articles</h1>
    <ArticlesComponent></ArticlesComponent>
  </div>
</template>

<script>


import ArticlesComponent from '../components/Article'

export default {
  name: 'articleView',
  components: {
    ArticlesComponent
  }
}
</script>

