<template>
  <div>
    <OrderHeader />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import Footer from '../components/Footer'
export default {
  name: "order",
  components: {
    OrderHeader,
    Footer
  }
}
</script>

<style>

</style>