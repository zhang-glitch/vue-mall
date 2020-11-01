<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-else @click="skipLogin">请登录</a>
          <a href="javascript:;" v-if="username" @click="exit">退出</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="skipCart"><span class="icon-cart"></span> 购物车({{cartCount}})</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
           <a href="/index" class="logo-icon"></a>
        </div>
        <div class="header-menu">
          <div class="menu-item">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item in phoneList" :key="item.id">
                  <a class="product-wrapper" :href="`/product/${item.id}`" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" alt="">
                    </div>
                    <div class="pro-name">
                      {{item.name}}
                    </div>
                    <div class="pro-price">{{item.price | filterPrice}}</div>
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
          <div class="menu-item">
            <span>笔记本</span>
             <div class="children"></div>
          </div>
          <div class="menu-item">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" class="search-input" name="keyword">
            <a href="javascript:;" class="search-icon"></a> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'NavHeader',
  data() {
    return {
      phoneList: []
    }
  },
  // async created() {
  //   let res = await this.getProductList()
  //   console.log(res)
  // },
  created() {
    this.getProductList()
  },
  methods: {
    skipCart() {
      this.$router.push("/cart")
    },
    skipLogin() {
      this.$router.push("/login")
    },
    getProductList() {
      this.axios({
        url: "/products",
        params: {
          categoryId: "100012",
          pageSize: 6
        }
      }).then(res => {
        // console.log(res)
        this.phoneList = res.list
      })
    },
    // 退出登录
    exit() {
      this.username = ""
      this.$store.dispatch("deleteUserName", "")
      this.$router.push('login')
    }
  },
  filters: {
    filterPrice(val) {
      if (!val) return '0.00';
      return `￥${val.toFixed(2)}元`;
    }
  },
  //防止请求延迟带来的数据未获取
  computed:{
    username() {
      return this.$store.state.username
    },
    cartCount() {
      return this.$store.state.cartCount
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/base.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    color: #b0b0b0;
    background-color: #333;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
        text-align: center;
      }
      // 我的购物车
      .my-cart {
        width: 110px;
        background-color: #f60;
        margin-right: 0;
        color: #fff;
        // 图标
        .icon-cart {
          @include bgImg(16px, 12px, "../../public/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }

  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
     

      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .menu-item {
          line-height: 112px;
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 17px;
          margin-right: 20px;
          cursor: pointer;
          
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
              border: 1px solid $colorH;
              border-top: 0px;
            }
          }

          .children {
            z-index: 10;
            width: 1226px;
            height: 0;
            opacity: 0;
            position: absolute;
            top: 112px;
            left: 0;
            box-shadow: 0 7px 6px 0 rgba(0,0,0,.11);
            transition: all 0.5s;
            background-color: $colorG;
            overflow: hidden;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a {
                display: inline-block;
              }
              &::after {
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                width: 1px;
                height: 100px;
                border-right: 1px solid $colorF;
              }
              &:last-child::after {
                border: none;
              }
              .product-wrapper {
                display: inline-block;
                .pro-img {
                  height: 137px;
                  img {
                    margin-top: 27px;
                    width: auto;
                    height: 110px;
                  }
                }
                .pro-name {
                  color: $colorB;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  font-weight: 700;
                }

                .pro-price {
                  color: $colorA;
                }
              }
            }
          }
        }
      }

      .header-search {
        width: 319px;
        .wrapper {
          border: 1px solid #e0e0e0;
          height: 50px;
          display: flex;
          align-items: center;
          .search-input {
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            box-sizing: border-box;
            height: 50px;
            padding-left: 14px;
          }

          .search-icon {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>