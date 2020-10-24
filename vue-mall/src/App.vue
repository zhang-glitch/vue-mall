<template>
  <div id="app">
    {{message}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      message: ""
    }
  },
  created() {
    axios.get("/").then(res => {
      // console.log(res)
      this.message = res.data
    })
  },

  components: {
  }
}
</script>

<style>
</style>
