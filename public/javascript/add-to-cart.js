function addToCart(e) {
  e.target.textContent = 'Added to Order';
  let checkoutBtn = document.createElement('button');
  checkoutBtn.textContent = 'Check Out';
  document.querySelector('.menu-items').appendChild(checkoutBtn);
}

let buttonArray = document.querySelectorAll('.add-to-cart');
buttonArray.forEach(button => {
  button.addEventListener('click', addToCart);
});