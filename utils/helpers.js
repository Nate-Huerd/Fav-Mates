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
  },

  formatCurrency: amount => {
    let str = amount.toString();
    let cents = str.slice(-2);
    let dollars;
    if (str.length-2 > 0) {
    dollars = str.slice(0, str.length-2);
      return `$${dollars}.${cents}`;
    } else {
      return `$0.${cents}`
    }
  },

  readyTime: date => {
    var newDateObj = new Date(date.getTime() + 20 * 60000);
    let hours = newDateObj.getHours();
    let meridian = 'AM';
    if (hours > 12) {
      hours -= 12;
      meridian = 'PM';
    }

    let minutes = newDateObj.getMinutes();
    return `${hours}:${minutes.toString().padStart(2, 0)} ${meridian}`;
  },

  deliveryEarly: date => {
    var newDateObj = new Date(date.getTime() + 40 * 60000);
    let hours = newDateObj.getHours();
    let meridian = 'AM';
    if (hours > 12) {
      hours -= 12;
      meridian = 'PM';
    }
    let minutes = newDateObj.getMinutes();
    return `${hours}:${minutes.toString().padStart(2, 0)} ${meridian}`;
  },

  deliveryLate: date => {
    var newDateObj = new Date(date.getTime() + 60 * 60000);
    let hours = newDateObj.getHours();
    let meridian = 'AM';
    if (hours > 12) {
      hours -= 12;
      meridian = 'PM';
    }
    let minutes = newDateObj.getMinutes();
    return `${hours}:${minutes.toString().padStart(2, 0)} ${meridian}`;
  }
}