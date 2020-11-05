<template>
  <div class="register">
    <div class="wrapper">
      <div class="container">
        <div class="logo">
          <a href="/index">
            <img src="/imgs/logo-mi.png" alt="">
          </a>
        </div>
        <div class="title">
          <h3>注册小米账号</h3>
        </div>
        <div class="username">
          <p>用户名</p>
          <input type="text" placeholder="请输入用户名" v-model="username">
        </div>
        <div class="password">
          <p>密码</p>
          <input type="password" placeholder="请输入密码" v-model="password">
        </div>
        <div class="btn-box" @click="register">
          <a href="javascript:;" class="btn btn-large">立即注册</a>
        </div>
      </div>
    </div>
    <Footer :isShow="isShow"/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: 'register',
  components: {
    Footer
  },
  data() {
    return {
      username: '',
      password: '',
      isShow: false
    }
  },
  methods: {
    register() {
      let {username, password} = this;
      if (!password) return;
      this.axios.post('/user/register', {
        username,
        password,
        email: `${username}@163.com`
      }).then(() => {
        this.$message.success('注册成功');
        // window.location.href = '/login';
        this.$router.push("/login")
        // 清空输入框
        this.username = "";
        this.password = "";
      }).catch((res) => {
        // console.log(res)
        if(res.status === 1) {
          this.$message.error(res.msg);
        }
        
        // 清空输入框
        this.username = "";
        this.password = "";
      })    
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/base.scss";
  @import "../assets/scss/config.scss";
  @import "../assets/scss/mixin.scss";
  .register {
    .wrapper {
      background-color: $colorJ;
      // 里一定要用padding设置间距，因为可以设置背景。而不是用margin。
      padding-top: 100px;
      padding-bottom: 100px;
      .container {
        width:854px;
        margin:0 auto;
        padding-bottom:10px;
        background: $colorG;
        text-align: center;
        padding-bottom: 50px;
        .logo {
          width: 49px;
          height: 49px;
          margin: 0 auto;
          padding-top: 10px;
          margin-bottom: 30px;
          img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
        .title {
          font-size: 30px;
          padding-bottom: 30px;
        }
        .username, .password {
          width: 300px;
          margin: 0 auto;
          p {
            font-size: $fontJ;
            color: #757575;
            margin-bottom: 10px;
            text-align: left;
          }
          input {
            height: 40px;
            line-height: 40px;
            width: 300px;
          }
        }
        .password {
          margin-bottom: 30px;
          margin-top: 10px;
        }
      }
    }
  }

</style>