<template>
  <div class="cart">
    <OrderHeader>
      <template #body>
        <h2>我的购物车<span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span></h2>
      </template>
    </OrderHeader>
    <div class="container">
       <div class="main-table">
         <table cellpadding="30px" cellspacing="30px" >
          <thead>
            <tr>
              <th><span class="all-checked" @click="allChecked" :class="{'checked': selectedAll}"></span> 全选</th>
              <th>商品名称</th>
              <th>单价</th>
              <th>数量</th>
              <th>小计</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartList" :key="item.productId">
              <td><span class="item-checked"  :class="{'checked': item.productSelected}" @click="itemChecked(item)"></span><img v-lazy="item.productMainImage" alt="" class="img"></td>
              <td>{{item.productName}} {{item.productSubtitle}}</td>
              <td>{{item.productPrice}}</td>
              <td>
                <div class="sum-box">
                  <a @click="subSum(item)">-</a><span>{{item.quantity}}</span><a @click="addSum(item)">+</a>
                </div>
              </td>
              <td class="main-color">{{item.productTotalPrice}}</td>
              <td><span class="close" @click=delProduct(item,index)></span></td>
            </tr>
          </tbody>
        </table>
       </div>
      <div class="total">
        <div class="total-left">
          <a href="/index">继续购物</a>共 <span>{{cartList.length}}</span> 件商品，已选择 <span>{{checkedNum}}</span> 件
        </div>
        <div class="total-right">
          合计: <span>{{cartTotalPrice}}</span> 元
          <a href="javascript:;" class="btn btn-large" @click="skipOrderConfirm">去结算</a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import Footer from '../components/Footer'
export default {
  name: "cart",
  components: {
    OrderHeader,
    Footer
  },
  data() {
    return {
      cartList: [],
      selectedAll: true,
      // 商品总价格
      cartTotalPrice: 0,
      // 已选中的数量
      checkedNum: 0
    }
  },
  created() {
    this.getCartList()
  },
  methods: {
    // 获取购物车列表
    getCartList() {
      this.axios.get('/carts')
        .then(res => {
          console.log(res)
          this.cartList = res.cartProductVoList
          this.selectedAll = res.selectedAll
          this.cartTotalPrice = res.cartTotalPrice
          this.checkedNum = res.cartProductVoList.filter(item => item.productSelected).length;
      })
    },
    // 增加数量
    addSum(item) {
      item.quantity += 1;
      // item.productTotalPrice = item.quantity * item.productPrice;
      // 更新数据
      this.updateProduct(item)
    },
    subSum(item) {
      if(item.quantity >= 2) {
        item.quantity -= 1;
        // item.productTotalPrice = item.quantity * item.productPrice;
      }
      // 更新数据
      this.updateProduct(item)
    },
    // 全选
    allChecked() {
      this.selectedAll = !this.selectedAll
      // 将每个商品中的productSelected设置为true
      this.cartList.forEach(item => {
        item.productSelected = this.selectedAll
      });

      //发送请求
      let url = this.selectedAll ? '/carts/selectAll' : '/carts/unSelectAll';
      this.axios.put(url).then((res) => {
        // console.log(res)
        // this.selectedAll = res.selectedAll
        this.cartTotalPrice = res.cartTotalPrice
        this.checkedNum = res.cartProductVoList.filter(item => item.productSelected).length;
      })
      
    },
    // 改变单个商品的选中
    itemChecked(item) {
      item.productSelected = !item.productSelected
      // 控制全选按钮的样式
      // let selectNums = this.selectNum;
      // let length = this.cartList.length;
      // // console.log(selectNums)
      // // console.log(length)
      // if(selectNums < length) {
      //   this.selectedAll = false;
      // }else {
      //   this.selectedAll = true;
      // }
      this.axios.put(`/carts/${item.productId}`, {
        quantity: item.quantity,
        selected: item.productSelected
      }).then(res => {
        this.cartList = res.cartProductVoList
        this.selectedAll = res.selectedAll
        this.cartTotalPrice = res.cartTotalPrice
        this.checkedNum = res.cartProductVoList.filter(item => item.productSelected).length;
      })

      //为什么这里不能用some判断
      let selectNum = this.cartList.filter(item => item.productSelected).length
      if(selectNum < this.cartList.length) {
        this.selectedAll = false;
      }else {
        this.selectedAll = true;
      }
      
      // console.log(item.productSelected)
    },
    // 删除该商品
    delProduct(item, index) {
      this.cartList.splice(index, 1)
      // console.log(this.cartList)
      this.axios.delete(`/carts/${item.productId}`)
      .then(res => {
        // console.log(res)
        this.selectedAll = res.selectedAll
        this.cartTotalPrice = res.cartTotalPrice
        this.checkedNum = res.cartProductVoList.filter(item => item.productSelected).length;
      })
    },

    // 更新数据
    updateProduct(item) {
       // 更新数据
      this.axios.put(`/carts/${item.productId}`, {
        quantity: item.quantity,
        selected: item.productSelected
      }).then(res => {
        // this.cartList = res
        // this.selectedAll = res.selectedAll
        this.cartTotalPrice = res.cartTotalPrice
        this.checkedNum = res.cartProductVoList.filter(item => item.productSelected).length;
      })
    },

    // 确认订单
    skipOrderConfirm() {
      let flag = this.cartList.some(item => item.productSelected);
      if (!flag) {
        alert("请选择一件商品")
      }
      this.$router.push("/order/confirm")
    }
  },
  computed: {
    // 统计购物车总价格
    // totalPrice() {
    //   let sum = 0
    //   this.cartList.forEach(item => {
    //     sum += item.productTotalPrice
    //   });
    //   return sum
    // }

    // totalPrice() {
    //   return this.cartList.filter(item => item.productSelected).reduce((pre, item) => pre + item.productTotalPrice, 0)
    // },

    // 统计商品选中的数量
    // selectNum() {
    //   let num = 0
    //   // return this.cartList.filter(item => item.productSelected).length
    //   this.cartList.forEach(item => {
    //     if(item.productSelected) {
    //       num += 1
    //     }
    //   })
    //   return num
    // }
  }
}
</script>

<style lang="scss" scoped>

  @import "../assets/scss/base.scss";
  @import "../assets/scss/config.scss";
  @import "../assets/scss/mixin.scss";
  .checked {
    background: url("/imgs/icon-gou.png") #f60 no-repeat 50%;
    background-size: 16px 12px;
    border: none;
  }
  .cart {
    font-size: $fontJ;
    .container {
      .main-table {
        background-color: #fff !important;
        table {
          width: 100%;
          color: #999;
          text-align: center;
          border-collapse: collapse;
          .all-checked {
            margin-left: -110px;
            margin-right: 10px;
            display: inline-block;
            width: 22px;
            height: 22px;
            border: 1px solid #e5e5e5;
            vertical-align: middle;
            margin-right: 17px;
            cursor: pointer;
          }
          .item-checked {
            display: inline-block;
            width: 22px;
            height: 22px;
            border: 1px solid #e5e5e5;
            vertical-align: middle;
            margin-right: 17px;
            cursor: pointer;
            margin-left: 30px;
          }
          .img {
            width: 80px;
            height: 80px;
            vertical-align: middle;
            margin-left: 70px;
          }
          .sum-box {
            display: inline-block;
            width: 150px;
            height: 40px;
            line-height: 40px;
            border: 1px solid #e5e5e5;
            font-size: 14px;
            a,span {
              display: inline-block;
              text-align: center;
              width: 50px;
            }
            a {
              cursor: pointer;
            }
          }
          .main-color {
            color: $colorA;
          }
          .close {
            @include bgImg(14px, 12px, "/imgs/icon-close.png");
            cursor: pointer;
          }
        }
      }
      .total {
        @include flex();
        margin-top: 20px;
        margin-bottom: 130px;
        .total-left {
          a {
            color: #666;
            margin-right: 37px;
          }
          span {
            color: $colorA;
          }
        }
        .total-right {
          color: $colorA;
          span {
            font-size: $fontE;
          }
          a {
            margin-left: 20px;
          }
        }
      }
    }
  }
</style>