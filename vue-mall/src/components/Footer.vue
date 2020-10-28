<template>
  <div class="footer">
      <div class="top-footer">
        <ul>
          <li>预约维修服务</li>
          <li>7天无理由退货</li>
          <li>15天免费换货</li>
          <li>满150元包邮</li>
        </ul>
      </div>
      <div class="bottom-footer">
        <div class="footer-logo">
          <img src="/imgs/logo-footer.png" alt="">
          <p>小米商城</p>
        </div>
        <div class="footer-link">
          <a href="http://39.97.212.45:3000/">淼昊的个人博客</a><span>|</span>
          <a href="https://github.com/zhang-glitch">淼昊的github</a><span>|</span>
          <a href="https://juejin.im/user/2225067267204935">淼昊的掘金</a><span>|</span>
          <a href="https://www.zhihu.com/people/hao-hao-25-36-48">淼昊的知乎</a>
        </div>
        <div class="footer-detail">
          该网站是由Vue + ElementUI + VueRouter等构建而成
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
  @import "../assets/scss/base.scss";
  @import "../assets/scss/config.scss";
  @import "../assets/scss/mixin.scss";

 .footer {
   position: fixed;
   bottom: 0px;
   left: 0px;
   right: 0px;
   color: #999999;
    .top-footer ul{
      @include flex(space-evenly);
      height: 100px;
      background:#ffffff;
      font-size: 20px;
      li:nth-child(1) {
        &:before {
          content: "";
          @include bgImg(20px, 20px, "/imgs/icon-setting.png");
          margin-right: 5px;
          margin-top: -3px;
          vertical-align: middle;
        }
      }
      li:nth-child(2) {
        &:before {
          content: "";
          @include bgImg(20px, 20px, "/imgs/icon-7day.png");
          margin-right: 5px;
          margin-top: -3px;
        vertical-align: middle;
        }
      }
      li:nth-child(3) {
        &:before {
          content: "";
          @include bgImg(20px, 20px, "/imgs/icon-15day.png");
          margin-right: 5px;
          margin-top: -3px;
        vertical-align: middle;
        }
      }
      li:nth-child(4) {
        &:before {
          content: "";
          @include bgImg(20px, 20px, "/imgs/icon-post.png");
          margin-right: 5px;
          margin-top: -3px;
        vertical-align: middle;
        }
      }
  }

  .bottom-footer {
    height: 234px;
    background: $colorB;
    border-top: 5px solid $colorA;
    font-size: 16px;
    text-align: center;
    .footer-logo {
      margin-top: 46px;
      margin-bottom: 31px;
      img {
        width:53px;
        height: 36px;
        margin-bottom: 13px;
      }
     
    }
    .footer-link {
      a {
        color:#999999 !important;
        display: inline-block;
      }
      span {
        margin: 0px 10px;
      }
    }
    .footer-detail {
      margin-top: 10px;
    }
  }
 }
</style>