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
      data: {}
    }
  },
  // created() {
  //   axios.get("/").then(res => {
  //     // console.log(res)
  //     this.message = res.data
  //   })
  // },

  created() {
    // 本地mock
    this.axios.get("/mock/user/login.json").then(res => {
      console.log(res)
    })

    // mockjs
    // this.axios.get("/user/login").then(res => {
    //   console.log(res)
    //   this.data = res
    // })
  },
  components: {
    // Home
  }
}
</script>

<style>
</style>
