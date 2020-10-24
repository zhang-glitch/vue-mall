<template>
  <div>
    home
    <NavHeader />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import Footer from '../components/Footer'
export default {
  name: 'home',
  components: {
    NavHeader,
    Footer
  }
}
</script>

<style>

</style>