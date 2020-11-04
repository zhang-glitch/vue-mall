<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo fl">
        <a href="/" class="logo-icon"></a>
      </div>
      <div class="title fl">
        <slot name="body"></slot>
      </div>
      <div class="username fr">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderHeader',
  computed: {
    username() {
      return this.$store.state.username
    }
  }
}
</script>

<style lang="scss">

  @import "../assets/scss/base.scss";
  @import "../assets/scss/config.scss";
  @import "../assets/scss/mixin.scss";
  .order-header {
    margin-top: 30px;
    padding-bottom: 30px;
    border-bottom: 3px solid $colorA;
    
    .container {
      
        // .header-logo {
        //   a {
        //     &:after, &:before {
        //       content: "";
        //       @include bgImg(55px, 55px, "/imgs/mi-logo.png")
        //     }
        //   }
        // }

        .title {
          h2 {
            font-size: $fontC;
            color: #333;
            margin-left: 54px;
            margin-top: 20px;
            span {
              font-size: $fontJ;
              margin-left: 17px;
              color: #999;
              font-weight: 200;
            }
          }
        }
        .username {
          height: 55px;
          line-height: 55px;
          a {
            color: #666;
            font-size: $fontI;
          }
        }
    }
  }
</style>