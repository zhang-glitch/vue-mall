<template>
  <div class="order-pay">
    <OrderHeader>
      <template  #body>
        <h2>订单支付<span>请谨防钓鱼链接或诈骗电话，了解更多></span></h2>
      </template>
    </OrderHeader>
    <div class="wrapper">
      <div class="container">
        <div class="order-wrap ">
          <div class="top-wrap clearfix" :class="isShow ? 'line' : ''">
            <div class="order-left fl">
              <div class="icon-success fl"></div>
              <div class="order-address fr">
                <h2>订单提交成功！去付款咯～</h2>
                <p>请在 <span>30分</span> 内完成支付, 超时后将取消订单</p>
                <p>收货信息：{{detailAddress}}</p>
              </div>
            </div>
            <div class="order-right fr">
              <div class="total-price">
                <span>应付金额：</span>
                <span class="price">{{totoalPrice}}</span> 元
              </div>
              <div class="order-detail">
                <span>订单详情  <em @click="openDetailProducts" :style="styleObj"></em></span>
              </div>
            </div>
          </div>
          <div class="product-detail" v-if="isShow">
            <ul>
              <li>订单号：<span>{{orderId}}</span></li>
              <li>收货地址：<span>{{detailAddress}}</span></li>
              <li class="clearfix">
                <div class="product-name fl"> 商品名称：</div>
                <ul class="product-list fl">
                  <li v-for="item in productList" :key="item.productId">
                    <img :src="item.productImage" alt="">
                    <span>{{item.productName}}</span>
                  </li>
                </ul>
              </li>
              <li>发票信息：<span>电子发票 个人</span></li>
            </ul>
          </div>
        </div>
        <div class="pay-method">
          <h2>选择以下支付方式付款</h2>
          <div class="pay-box">
            <div class="pay-flat">支付平台</div>
            <div class="pay-img">
              <div class="pay pay-ali" @click="skipPay(1)" :class="{'border': currentIndex === 1}"></div>
              <div class="pay pay-wechat" @click="skipPay(2)" :class="{'border': currentIndex === 2}"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
export default {
  name: 'orderPay',
  components: {
    OrderHeader
  },
  data() {
    return {
      // 是否显示订单的详细信息
      isShow: false,
      // 展开图片翻转
      styleObj: "",
      orderId: this.$route.query.orderNo, // 从路由中获取参数
      // 商品列表
      productList: [],
      //地址选项
      address: {},
      // 总价格
      totoalPrice: 0,
      // 支付方式的索引。 1: 支付宝，2: 微信
      currentIndex: 1
    }
  },
  created() {
    this.getOrderDetail()
  },
  methods: {
     // 获取订单详情
    getOrderDetail() {
      this.axios.get(`/orders/${this.orderId}`)
        .then(res => {
          // console.log(res)
          this.productList = res.orderItemVoList
          this.address = res.shippingVo
          this.totoalPrice = res.payment
          console.log(res)
        })
    },
    openDetailProducts() {
      this.isShow = !this.isShow;
      this.styleObj = this.isShow ? {transform: "rotateX(180deg)"} : {}
    },
    // 改变索引
    skipPay(index) {
      this.currentIndex = index
    }
  },
  computed: {
    // 返回完整的地址
    detailAddress() {
      return `${this.address.receiverProvince}  ${this.address.receiverCity}  ${this.address.receiverDistrict}  ${this.address.receiverAddress}`
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/base.scss";
  @import "../assets/scss/config.scss";
  @import "../assets/scss/mixin.scss";
  //展开订单的下划线
  .line {
    border-bottom: 1px solid $colorA;
  }
  // 高亮支付方式的边框
  .border {
    border: 1px solid $colorA !important; 
  }
  .order-pay {
    .wrapper {
      background-color: $colorJ;
      padding-top: 30px;
      padding-bottom: 40px;
      .order-wrap {
        background-color: $colorG;
        padding: 62px 50px;
        font-size: $fontJ;
        margin-bottom: 30px;
        .top-wrap {
          padding-bottom: 20px;
          .order-left {
            .icon-success {
              display: inline-block;
              @include bgImg(90px, 90px, "/imgs/icon-gou.png");
              background-size: 60px;
              text-align: center;
              line-height: 90px;
              background-color: #80c58a;
              border-radius: 50%;
              margin-right: 40px;
            }
            .order-address {
              h2 {
                margin-top: 8px;
                margin-bottom: 10px;
              }
              p{
                margin-bottom: 8px;
                span {
                  color: $colorA;
                }
              }
            }
          }
          .order-right {
            margin-right: 160px;
            .total-price {
              margin-top: 18px;
              margin-bottom: 10px;
              .price {
                color: $colorA;
                font-size: $fontG;
              }
            }
            .order-detail {
              span {
                em {
                  @include bgImg(14px, 10px, "/imgs/icon-down.png");
                  cursor: pointer;
                  transition: all 0.5s;
                }
              }
            }
          }
        }
        .product-detail {
          // margin-top: 30px;
          padding-top: 30px;
          margin-left: 200px;
          ul {
            li {
              margin-bottom: 10px;
              .product-list {
                margin-top: 3px;
                img {
                  width: 30px;
                  vertical-align: middle;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
      .pay-method {
        background: $colorG;
        padding-top: 30px;
        padding-bottom: 40px;
        padding-left: 50px;
        h2 {
          border-bottom: 1px solid $colorA;
          padding-bottom: 20px;
          font-size: $fontF;
        }
        .pay-box {
          font-size: $fontH;
          margin-top: 30px;
          .pay-flat {
            margin-bottom: 15px;
          }
          .pay-img {
            .pay {
              display: inline-block;
              width: 188px;
              height: 64px;
              border: 1px solid $colorF;
              cursor: pointer;
            }
            .pay-ali {
              margin-right: 20px;
              background: url("/imgs/pay/icon-ali.png") no-repeat center;
              background-size: 103px 38px;
            }
            .pay-wechat {
              background: url("/imgs/pay/icon-wechat.png") no-repeat center;
              background-size: 103px 38px;
            }
          }
        }
      }
    }
  }
</style>