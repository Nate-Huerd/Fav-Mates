module.exports = {
  checkCart: cartArray => {
    if (cartArray.length) return true;
  },

  checkCount: cartArray => {
    let total = 0;
    for (let i = 0; i < cartArray.length; i++) {
      let quantity = parseInt(cartArray[i].quantity);
      total += quantity;
    }
    return total;
  },

  // item.price needs to be a number for this to work
  totalItems: cartArray => {
    let priceArray = cartArray.map(item => item.price);
    let quantityArray = cartArray.map(item => item.quantity);
    let multipliedArray = [];
    for (let i = 0; i < priceArray.length; i++) {
      let amount = priceArray[i] * quantityArray[i];
      multipliedArray.push(amount);
    }
    let total = multipliedArray.reduce((a, b) => a+b);
    return total;
  },

  formatCurrency: amount => {
    let str = amount.toString();
    let cents = str.slice(-2);
    let dollars;
    if (str.length-2 > 0) {
    dollars = str.slice(0, str.length-2);
      return `${dollars}.${cents}`;
    } else {
      return `0.${cents}`
    }
  },

  readyTime: date => {
    var newDateObj = new Date(date.getTime() + 20 * 60000);
    let hours = newDateObj.getHours();
    let meridian = 'AM';
    if (hours > 12) {
      hours -= 12;
    }
    if (hours >=12) {
      meridian = 'PM';
    }

    if (hours == 0) {
      hours = 12
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
    }
    if (hours >= 12) {
      meridian = 'PM';
    }
    if (hours == 0) {
      hours = 12;
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
    }
    if (hours >= 12) {
      meridian = 'PM';
    }
    if (hours == 0) {
      hours = 12;
    }

    let minutes = newDateObj.getMinutes();
    return `${hours}:${minutes.toString().padStart(2, 0)} ${meridian}`;
  }
}