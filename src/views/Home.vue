<template>
 <div class="container">
     <div class="row">
        <div class="col-md-12 mt-4">

        <div class="alert alert-info" role="alert">
          List Members
        </div>

      <b-list-group>
        <b-list-group-item>User1 <router-link class="btn btn-secondary" to="/chat-room/user1" >Chat</router-link> </b-list-group-item>
        <b-list-group-item>User2 <router-link class="btn btn-secondary" to="/chat-room/user1" >Chat</router-link></b-list-group-item>
        <b-list-group-item>User3 <router-link class="btn btn-secondary" to="/chat-room/user1" >Chat</router-link></b-list-group-item>
      </b-list-group>
        
        </div>
  </div>
 </div>
</template>

<script>
export default {
 name: "HomeView"
}
</script>

<style>

</style>