<template>
  <div>
<!--    <AllUsers></AllUsers>-->
    <div class="nav">
       <ul>
        <router-link to="/users/AllUsers"> Voir tous les users / </router-link>
        <router-link to="/users/CreateUser"> Creez un user /  </router-link>
        <router-link to="/users/AllUsers"> Login  </router-link>
       </ul>
    </div>

    <h1>Sous Vue</h1>
    <router-view></router-view>
  </div>
</template>

<script>
// import AllUsers from "@/components/AllUsers";
// export default {
//   components: {AllUsers}
// }
export default {

}
</script>