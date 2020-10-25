<template>
  <div id="app">
    <!-- {{message}} -->
    <!-- <Home /> -->
    
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
// import Home from './pages/home'
export default {
  name: 'App',
  data() {
    return {
      // message: ""
    }
  },
  // created() {
  //   axios.get("/").then(res => {
  //     // console.log(res)
  //     this.message = res.data
  //   })
  // },

  components: {
    // Home
  }
}
</script>

<style>
</style>
