<template>
  <div class="CreateUsers">
    <div class="ui column grid">
      <form >
        <p>
          <label for="email">Email: </label>
          <input id="email" v-model="email" type="email" name="email">
        </p>
        <p>
          <label for="password">Article content: </label>
          <input id="password" v-model="password" type="password" name="password">
        </p>

        <div>
          <!--          Creer un user: example marche bien-->
          <button type="button" @click="createUser()">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import { findAll } from "../api/articles";
// console.log(findAll())
import axios from 'axios'

export default {
  name: "CreateUserComponent",

  data () {
    return {
      user: null,
      email: '',
      password: '',
      output: ''
    }
  },
  methods: {

    /* Example pour creez un user car l'article demande un token, l'example marche bien*/
    createUser(){
      axios.post('https://localhost:8001/api/users', {
        email: this.email,
        password: this.password

      }).then( (response) => {
        console.log(response.data)
      })
    }
  }
}
</script>
