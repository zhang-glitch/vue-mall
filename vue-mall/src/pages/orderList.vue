<template>
  <div class="order-list">
    <OrderHeader>
      <template #body>
        <h2>订单列表 <span>请谨防钓鱼链接或诈骗电话，了解更多></span></h2>
      </template>
    </OrderHeader>
    <div class="wrap" v-loading="loading">
      <div class="container">
        <div class="order-box" v-for="(item, index) in orderList" :key="index">
          <div class="some-detail clearfix">
            <div class="left fl">
              <ul>
                <li>{{item.createTime}}</li>
                <li>|</li>
                <li>{{item.receiverName}}</li>
                <li>|</li>
                <li>订单号：{{item.orderNo}}</li>
                <li>|</li>
                <li>{{item.paymentTypeDesc}}</li>
              </ul>
            </div>
            <div class="right fr">
              应付金额：<span>{{item.payment}}</span> 元
            </div>
          </div>
          <div class="product-list">
            <ul>
              <li v-for="element in item.orderItemVoList" :key="element.productId" class="clearfix">
                <div class="left fl">
                  <div class="img fl">
                    <img v-lazy="element.productImage" alt="">
                  </div>
                  <div class="name-price fr">
                    <p class="name">Redmi K20 Pro 尊享版</p>
                    <p class="price-sum">2699 X 3</p>
                  </div>
                </div>
                <div class="right fr">未支付</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        background
        @current-change="handleChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
export default {
  name: 'orderList',
  components: {
    OrderHeader
  },
  data() {
    return {
      pageNum: 1,
      orderList: [],
      total: 0,
      loading: true
    }
  },
  created() {
    this.getOrderList()
  },
  methods: {
    // 获取所有订单信息
    getOrderList() {
      this.axios.get('/orders', {
        params: {
          pageSize:10,
          pageNum:this.pageNum
        }
      })
        .then(res => {
          console.log(res)
          this.total = res.total
          this.orderList = res.list
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
    },
    // 改变当前页
    handleChange(page) {
      this.pageNum = page
      this.getOrderList()
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/base.scss";
  @import "../assets/scss/config.scss";
  @import "../assets/scss/mixin.scss";

  .order-list {
    .wrap {
      background-color: $colorJ;
      padding-top: 33px;
      padding-bottom: 110px;
      .container {
        background-color: $colorG;
        .order-box {
          border-bottom: 3px solid #eeeeee;
          padding-bottom: 20px;
          .some-detail {
            font-size: $fontI;
            margin-bottom: 20px;
            height: 74px;
            line-height: 74px;
            background-color: #FFFAF7;
            padding: 0 40px;
            .left {
              ul {
                @include flex();
                li {
                  margin: 0 5px;
                }
              }
            }
            .right {
              span {
                font-size: $fontG;
                color: $colorA;
              }
            }
          }
          .product-list {
            ul {
              font-size: $fontJ;
              li {
                padding: 0 40px;
                .img {
                  width: 112px;
                  img {
                    width: 100%;
                  }
                }
                .left {
                  .name-price {
                    margin-top: 38px;
                    margin-left: 10px;
                  }
                }
                .right {
                  margin-top: 38px;
                  color: $colorA;
                }
              }
            }
          }
        }
        .order-box:nth-of-type(10) {
          border-bottom: none;
        }
      }
      .el-pagination {
        margin-top: 25px;
        margin-left: 985px;
        .active {
          background-color: $colorA !important;
        }
      }
    }
  }
</style>