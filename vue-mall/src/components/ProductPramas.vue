<template>
  <div class="procuc-params">
    <div class="container">
     <div class="nav-bar">
        <div class="phone-name">
          {{productName}}
        </div>
        <div class="product-menu">
          <a href="javascript:;">概述</a><span>|</span>
          <a href="javascript:;">参数</a><span>|</span>
          <a href="javascript:;">用户评价</a>
          <slot name="buy"></slot>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ProductParams',
  // props: ["name"]
  computed: {
    productName() {
      return this.$store.state.productName
    },
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/config.scss";
  @import "../assets/scss/mixin.scss";
  .procuc-params {
    height: 70px;
    line-height: 70px;
    border-top: 1px solid $colorH;
    background: $colorG;
    .container {
      .nav-bar {
        @include flex();
        .product-menu {
          font-size: $fontJ;
          a {
            // margin: 0 10px;
            color: #666;
          }
          span {
            margin:0 10px;
          }
          .buy {
            margin-left: 10px;
          }
        }
        .phone-name {
          font-size: 18px;
          color: #333;
          font-weight: 700;
        }
      }
    }
  }
</style>