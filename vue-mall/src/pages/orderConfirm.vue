<template>
  <div class="order-confirm">
    <OrderHeader>
      <template #body >
        <h2>订单确认<span>请认真填写收货地址</span></h2>
      </template>
    </OrderHeader>
     <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="position: absolute; width: 0px; height: 0px; overflow: hidden;"
    >
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path
            d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"
            class="path1"
          />
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path
            d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"
            class="path1"
          />
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path
            d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"
            class="path1"
          />
          <path
            d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path2"
          />
          <path
            d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path3"
          />
          <path
            d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path4"
          />
        </symbol>
      </defs>
    </svg>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="item-adress clearfix">
            <h2>收货地址</h2>
            <div class="detail-adress">
              <ul>
                <li class="fl item-list" v-for="(item, index) in addList" :key="item.id" @click="getIndex(index)" :class="{'checked': selectedIndex === index}">
                  <div class="name"><span>姓名：</span><span>{{item.receiverName}}</span></div>
                  <div class="phone"><span>手机号：</span><span>{{item.receiverMobile}}</span></div>
                  <div class="detail-adress"><span>详细地址：</span><span>{{detailAddress(item)}}</span></div>
                  <div class="tool-box">
                    <div class="icon-del fl" @click="showEditModal(item)">
                      <a href="javascript:;" >
                        <svg class="icon icon-del">
                          <use xlink:href="#icon-del" />
                        </svg>
                      </a>
                    </div>
                    <div class="icon-edit fr" @click="openEditModal(item)">
                      <a href="javascript:;" >
                        <svg class="icon icon-edit">
                          <use xlink:href="#icon-edit" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </li>
                <li class="fl" @click="openAddressModal">
                  <div class="icon-adress"></div>
                  <div class="add-adress">添加新地址</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="product-list">
            <h2>商品</h2>
            <ul>
              <li v-for="item in cartList" :key="item.id">
                <div class="goods-name">
                  <img v-lazy="item.productMainImage" alt="">
                  <span>{{item.productName}} {{item.productSubtitle}}</span>
                </div>
                <div class="goods-price">
                  {{item.productPrice}}元×{{item.quantity}}
                </div>
                <div class="total-price">
                  {{item.productPrice * item.quantity}}元
                </div>
              </li>
            </ul>
          </div>
          <div class="item-delivery clearfix">
            <h2 class="fl">配送方式</h2>
            <p class="fl">包邮</p>
          </div>
          <div class="item-invoice clearfix">
            <h2 class="fl">发票</h2>
            <span class="fl">电子发票</span>
            <span class="fl">个人</span>
          </div>
          <div class="detail">
            <div class="item">
              <span>商品件数：</span>
              <span>{{count}}</span>
            </div>
            <div class="item">
              <span>商品总价：</span>
              <span>{{cartTotalPrice}}元</span>
            </div>
            <div class="item">
              <span>优惠活动：</span>
              <span>0元</span>
            </div>
            <div class="item">
              <span>运费：</span>
              <span>0元</span>
            </div>
            <div class="item">
              <span>应付总额：</span>
              <span class="total-price">{{cartTotalPrice}}元</span>
            </div>
          </div>
          <div class="btn-group">
            <a href="/cart" class="btn btn-default btn-large ">返回购物车</a>
            <a href="javascript:;" class="btn btn-large " @click="orderSubmit">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <Modal 
      :modalTitle="modalTitle"
      btnType="1"
      :showModal="isModal"
      @closeModal="closeModal"
      @skipCart="submitAddress"
    >
      <template #body>
        <div class="edit-wrap">
          <div class="item">
            <input type="text" placeholder="姓名" v-model="addressObj.receiverName">
            <input type="text" placeholder="手机号" v-model="addressObj.receiverMobile">
          </div>
          <div class="item">
            <select name="province" v-model="addressObj.receiverProvince">
              <option value="北京">北京</option>
              <option value="天津">天津</option>
              <option value="重庆">重庆</option>
              <option value="上海">上海</option>
            </select>
            <select name="city" v-model="addressObj.receiverCity">
              <option value="北京">北京</option>
              <option value="天津">天津</option>
              <option value="上海">上海</option>
            </select>
            <select name="district" v-model="addressObj.receiverDistrict">
              <option value="昌平区">昌平区</option>
              <option value="海淀区">海淀区</option>
              <option value="东城区">东城区</option>
              <option value="西城区">西城区</option>
              <option value="顺义区">顺义区</option>
              <option value="房山区">房山区</option>
            </select>
          </div>
          <div class="item">
            <textarea name="street"  cols="80" rows="6" placeholder="请输入详细地址" v-model="addressObj.receiverAddress"></textarea>
          </div>
          <div class="item">
            <input type="text" class="input" placeholder="邮编" v-model="addressObj.receiverZip"/>
          </div>
        </div>
      </template>
    </Modal>
    <Modal 
      modalTitle="确认删除"
      btnType="1"
      :showModal="deleteModal"
      @closeModal="closeModal"
      @skipCart="submitAddress"
    >
      <template #body>
        <div>您确认要删除此地址吗？</div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '../components/Modal'
import OrderHeader from '../components/OrderHeader'
export default {
  name: 'orderConfirm',
  components: {
    OrderHeader,
    Modal
  },
  data() {
    return {
      // 地址列表
      addList: [],
      // 产品总价格
      cartTotalPrice: 0,
      // 商品列表
      cartList: [],
      // 商品总数量
      count: 0,
      // 是否显示弹窗
      isModal: false,
      // 地址对象
      addressObj: {},
      // 会话框的标题
      modalTitle: '',
      userAction: 0, // 编辑: 0, 新增: 1, 删除: 2
      // 确认删除会话框
      deleteModal: false, 
      // 选中的索引
      selectedIndex: 0
    }
  },
  created() {
    this.getAddressList();
    this.getCartList();
  },
  methods: {
    // 获取收货地址
    getAddressList() {
      this.axios.get("/shippings").then(res => {
        this.addList = res.list;
        console.log(res)
      });
    },
    // 获取结算商品
    getCartList() {
      this.axios.get("/carts").then(res => {
        this.cartTotalPrice = res.cartTotalPrice;
        this.cartList = res.cartProductVoList.filter(
          item => item.productSelected
        );
        console.log(this.cartList)
        this.count = this.cartList.reduce((accumulator, item) => {
          return accumulator + item.quantity;
        }, 0);
      });
    },
    // 返回完整的地址
    detailAddress(item) {
      return `${item.receiverProvince}  ${item.receiverCity}  ${item.receiverDistrict}  ${item.receiverAddress}`
    },
    // 显示新增模态框
    openAddressModal() {
      this.addressObj = {};
      this.isModal = true;
      this.userAction = 1;
      this.modalTitle = "新增地址";
    },
    // 显示编辑模态框
    openEditModal(item) {
      this.addressObj = item;
      this.isModal = true;
      this.userAction = 0;
      this.modalTitle = "修改地址";
    },
    // 显示删除的会话框, 设定用户点击行为, 保存当前点击的地址
    showEditModal(item) {
      this.addressObj = item;
      this.deleteModal = true;
      this.userAction = 2;
    },
    // 关闭弹窗
    closeModal() {
      this.isModal = false
      this.deleteModal = false
    },
       // 进行编辑0 新增1 删除2 ,操作
    submitAddress() {
      let { addressObj, userAction } = this;
      let method, url;
      // 编辑
      if (userAction === 0) {
        method = "put";
        url = `/shippings/${addressObj.id}`;
      // 新增
      } else if (userAction === 1) {
        method = "post";
        url = `/shippings`;
      // 删除
      } else {
        method = "delete";
        url = `/shippings/${addressObj.id}`;
      }
      // 用户点击修改或新增
      if (userAction === 0 || userAction === 1) {
        let {
          receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip
        } = this.addressObj;
        let errMsg;
        if (!receiverName) {
          errMsg = "请输入收货人名称";
        } else if (!receiverMobile || !/\d{11}/.test(receiverMobile)) {
          errMsg = "请输入正确格式的手机号";
        } else if (!receiverProvince) {
          errMsg = "请选择省份";
        } else if (!receiverCity) {
          errMsg = "请选择对应的城市";
        } else if (!receiverAddress || !receiverDistrict) {
          errMsg = "请输入收货地址";
        } else if (!/\d{6}/.test(receiverZip)) {
          errMsg = "请输入六位邮编";
        }
        if (errMsg) {
          // this.$message.error(errMsg);
          alert(errMsg)
          return;
        }
      }
      let params = this.addressObj;
      this.axios[method](url, params).then(() => {
        this.closeModal();
        this.getAddressList();
        // this.$message.success('操作成功');
        alert("操作成功");
      });
    },
    // 获取索引值
    getIndex(index) {
      this.selectedIndex = index
    },
    // 订单结算
    orderSubmit() {
      let item = this.addList[this.selectedIndex];
      if (!item) {
        // this.$message.error('请选择收货地址!');
        alert('请选择收货地址!')
        return;
      }
      this.axios.post('/orders', {
        shippingId: item.id
      })
        .then(res => {
          this.$router.push({
            path: '/order/pay',
            query: {
              orderNo: res.orderNo
            }
          })
        })
    }
  },
}
</script>

<style lang="scss">
  @import "../assets/scss/base.scss";
  @import "../assets/scss/config.scss";
  @import "../assets/scss/mixin.scss";
  .checked {
    border: 1px solid $colorA !important;
  }
  .edit-wrap {
    text-align: left;
    .item {
      margin-bottom: 15px;
      input {
        height: 40px;
        line-height: 40px;
        width: 265px;
        margin-right: 20px;
      }
      select {
        width: 100px;
        height: 50px;
        margin-right: 10px;
        font-size: 16px;
        text-align: center;
      }
    }
  }
  .order-confirm {
    .wrapper {
      background-color: #f5f5f5;
      padding-top: 30px;
      padding-bottom: 84px;
      .container {
        .order-box {
          background-color: #fff;
          padding-left: 40px;
          padding-bottom: 40px;
          .item-adress {
            h2 {
              font-size: $fontG;
              padding-top: 20px;
              margin-bottom: 20px;
            }
            .detail-adress {
              ul {
                li {
                  position: relative;
                  text-align: center;
                  box-sizing: border-box;
                  width: 271px;
                  height: 180px;
                  border: 1px solid #e5e5e5;
                  margin-right: 15px;
                  padding: 15px 24px;
                  font-size: $fontJ;
                  color: #757575;
                  margin-top: 20px;
                  .icon-adress {
                    @include bgImg(30px, 30px, "/imgs/icon-add.png", 14px);
                    background-color: #e0e0e0;
                    border-radius: 50%;
                    margin-top: 45px;
                    margin-bottom: 10px;
                  }
                }
                .item-list {
                  text-align: left;
                  .name {
                    height: 27px;
                    font-size: $fontH;
                    font-weight: 300;
                    color: #333;
                    margin-bottom: 10px;
                  }
                  .tool-box {
                    position: absolute;
                    bottom: 10px;
                    height: 50px;
                    width: 80%;
                    line-height: 50px;
                    .icon-del, .icon-edit {
                      @include wh(20px, 20px);
                      fill: $colorC;
                      vertical-align: middle;
                      &:hover {
                        fill: $colorA;
                      }
                    }
                    .icon-edit {
                      position: absolute;
                      bottom: 10px;
                      right: 0px;
                      top: 7px;
                    }
                  }
                }
              }
            }
          }
          .product-list {
            margin-bottom: 20px;
            h2 {
              border-bottom: 1px solid #e5e5e5;
              font-size: $fontG;
              padding-top: 20px;
              margin-bottom: 20px;
            }
            ul {
              li {
                @include flex();
                margin: 0 20px;
                height: 40px;
                line-height: 40px;
                margin-top: 10px;
                font-size: $fontI;
                color: #333;
                .goods-name {
                  flex: 5;
                  img {
                    width: 30px;
                    height: 30px;
                    vertical-align: middle;
                  }
                  span {
                    margin-left: 20px;
                  }
                }
                .goods-price {
                  flex: 2;
                }
                .total-price {
                  color: $colorA;
                  padding-right: 20px;
                }
              }
            }
          }
          .item-delivery {
            border-top: 1px solid #e5e5e5;
            padding-top: 20px;
            margin-bottom: 20px;
            h2 {
              font-size: $fontG;
            }
            p {
              margin-left: 50px;
              margin-top: 2px;
              font-size: $fontI;
              color: $colorA;
            }
          }
          .item-invoice {
            padding-top: 20px;
            margin-bottom: 20px;
            h2 {
              font-size: $fontG;
            }
            span {
              margin-left: 50px;
              margin-top: 2px;
              font-size: $fontI;
              color: $colorA;
            }
          }
          .detail {
            padding: 50px 44px 33px 0;
            // border-bottom: 1px solid #f5f5f5;
            text-align: right;
            font-size: $fontI;
            color: #666;
            .item {
              height: 30px;
              line-height: 30px;
              .total-price {
                color: $colorA;
                font-size: $fontG;
              }
            }
          }
          .btn-group {
            text-align: right;
            margin-right: 20px;
          }
        }
      }
    }
  }

</style>