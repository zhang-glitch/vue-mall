<template>
  <div class="login">
    <div class="container">
      <div class="login-header">
        <a href="/index">
          <img src="/imgs/login-logo.png" alt="">
        </a>
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h2><span class="login-color">帐号登录</span> <span class="col">|</span> <span>扫码登录</span></h2>
          <div class="username">
            <input type="text"  placeholder="请输入用户名" v-model="username">
          </div>
          <div class="password">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn" @click="judgeLogin">
            <a href="javascript:;">登录</a>
          </div>
          <div class="tips">
            <a href="/register">
              手机短信登录/注册
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer :isShow="isShow"/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name:'login',
  data() {
    return {
      isShow: false,
      username: "",
      password: "",
      userId: ""
    }
  },
  components: {
    Footer
  },
  methods: {
    judgeLogin() {
      let {username, password} = this
      this.axios({
        url: "/user/login",
        method: "post",
        data: {
          username,
          password
        }
      }).then(res => {
        // console.log("res", res)
        this.$cookie.set('userId', res.id, {expires: '1M'});
        // 保存用户信息到vuex
        this.$store.dispatch("saveUserName", res.username)
        this.$router.push("/index")
      })
    },
  }
}
</script>

<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/button.scss';
  .login {
    .container {
      .login-header {
        a {
          img {
            width: auto;
            height: 100%;
          }
        }
      }
    }
    .wrapper {
      background: url("/imgs/login-bg.jpg") no-repeat 50%;
      margin-bottom: 100px;
      .container {
        height: 576px;
        position: relative;
        .login-form {
          box-sizing: border-box;
          padding-left: 31px;
          padding-right: 31px;
          padding-top: 20px;
          width: 410px;
          height: 510px;
          background-color: #fff;
          position: absolute;
          bottom: 29px;
          right: 0;
          text-align: center;
          h2 {
            font-size: $fontE;
            margin-top: 30px;
            margin-bottom: 30px;
            .login-color {
              color: $colorA;
            }
            .col {
              margin: 0 10px;
            }
          }
          .username, .password {
            display: inline-block;
            width: 348px;
            height: 50px;
            border: 1px solid #e5e5e5;
            margin-bottom: 20px;
            input {
              width: 100%;
              height: 100%;
              padding-left: 10px;
            }
          }
          .btn {
            width: 100%;
            line-height: 50px;
            margin-top: 10px;
            font-size: 16px;
            a {
              color: #ffffff;
            }
          }
          .tips {
            margin-left: -221px;
            margin-top: 20px;
            a {
              color: #f60;
              font-size: 16px; 
            }
          }
        }
      }
    }
  }

</style>