let clicked = 0;
let orderArray = [];

async function orderToSession() {
  console.log(orderArray);
  const response = await fetch('/api/users/order', {
    method: 'POST',
    body: JSON.stringify({
      orderArray
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/shopping-cart')
  } else {
    console.log(response.statusText);
  }
}

function addToCart(e) {
  if (!clicked) {
    let checkoutBtn = document.createElement('button');
    checkoutBtn.textContent = 'Check Out';
    document.querySelector('.menu-items').appendChild(checkoutBtn);
    checkoutBtn.addEventListener('click', orderToSession);
  }
  clicked = 1;
  orderArray.push(e.target.dataset.id);
  console.log(orderArray);
}

let buttonArray = document.querySelectorAll('.add-to-cart');
buttonArray.forEach(button => {
  button.addEventListener('click', addToCart);
});

