export default {
  saveUserName(state, username) {
    state.username = username
  },
  deleteUserName(state, username) {
    state.username = username
  },
  saveCartCount(state, cartCount) {
    state.cartCount = cartCount
  },
  saveProductName(state, productName) {
    state.productName = productName
  }
}