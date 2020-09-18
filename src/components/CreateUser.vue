<template>
  <div class="CreateUsers">
    <div class="ui column grid">
      <form @submit="createUser" action="/users/AllUsers">
        <p>
          <label for="email">Email: </label>
          <input id="email" v-model="CUser.email" type="email" name="email">
        </p>
        <p>
          <label for="password">Article content: </label>
          <input id="password" v-model="CUser.password" type="password" name="password">
        </p>

        <div>
          <!--          Creer un user: example marche bien-->
          <p>
            <input
                type="submit"
                value="Submit"
            >
          </p>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import { findAll } from "../api/articles";
// console.log(findAll())
// import axios from 'axios'

export default {
  name: "CreateUserComponent",

  data() {
    return {
     CUser: {
      email: '',
      password: ''
     }
    }
  },
  methods: {
    async createUser() {
     const result = await this.$store.dispatch("users/create", this.$data.CUser);
     if (result !== null){
       this.$data.CUser = {
         email: " ",
         password: " "
       }
     }
    }

    //   /* Example pour creez un user car l'article demande un token, l'example marche bien*/
    //   createUser(){
    //     axios.post('https://localhost:8001/api/users', {
    //       email: this.email,
    //       password: this.password
    //
    //     }).then( (response) => {
    //       console.log(response.data)
    //     })
    //   }
    // }
  }
}
</script>
