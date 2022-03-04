module.exports = {
  checkCart: cartArray => {
    if (cartArray.length) return true;
  },

  checkCount: cartArray => {
    return cartArray.length;
  },

  // item.price needs to be a number for this to work
  totalItems: cartArray => {
    let priceArray = cartArray.map(item => item.price);
    return priceArray.reduce((a, b) => a+b);
  }
}