<template>
  <div class="order-confirm">
    <OrderHeader>
      <template #body >
        订单确认<span>请认真填写收货地址</span>
      </template>
    </OrderHeader>
    orderConfirm
  </div>
</template>

<script>

import OrderHeader from '../components/OrderHeader'
export default {
  name: 'orderConfirm',
  components: {
    OrderHeader
  }
}
</script>

<style>

</style>