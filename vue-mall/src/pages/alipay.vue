<template>
  <div class="alipay">
    <order-header title="订单支付">
      <template #body>
        <h2>订单支付 <span>请谨防钓鱼链接或诈骗电话，了解更多</span></h2>
      </template>
    </order-header>
    <div class="form" v-html="content" v-loading="loading"></div>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader";
export default{
  name: 'alipay',
  components: {
    OrderHeader,
  },
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true, 
    }
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      this.axios.post('/pay', {
        orderId: this.orderId,
        orderName: 'Vue高仿小米商城',
        amount: 0.01,
        payType: 1
      }).then(res => {
        // console.log(res)
        this.content = res.content;
        setTimeout(() => {
          // 手动提交
          document.forms[0].submit();
          this.loading = false;
        }, 100)
      })
    }
  }
}
</script>
<style lang="scss">
</style>
