<template>
  <div class="users">
    <div class="ui two column grid">
      <div class="column" v-for="user in users" v-bind:key="user.id">
        <div class="ui card">
          <div class="content">
            <div class="header">
              <p> Email: {{ user.email }} </p>
              <p> Id: {{ user.id }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AllUsers',
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  },
  created() {
    this.$store.dispatch("users/findAllUsers")
  }
}
</script>