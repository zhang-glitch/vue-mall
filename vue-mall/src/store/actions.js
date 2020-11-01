
export default {
  saveUserName(context, username) {
    context.commit("saveUserName", username)
  },
  deleteUserName(context, username) {
    context.commit("deleteUserName", username)
  },
  saveCartCount(context, cartCount) {
    context.commit("saveCartCount", cartCount)
  }
}