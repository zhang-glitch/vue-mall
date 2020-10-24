<template>
  <div>
    <OrderHeader />
    cart
    <Footer />
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import Footer from '../components/Footer'
export default {
  name: "cart",
  components: {
    OrderHeader,
    Footer
  }
}
</script>

<style>

</style>