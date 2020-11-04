<template>
  <div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: "order",
  components: {
    Footer
  }
}
</script>

<style>

</style>