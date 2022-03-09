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
    setTimeout(() => {
      document.location.replace('/shopping-cart')
    },5000)
  } else {
    console.log(response.statusText);
  }
}

function addToCart(e) {
  if (e.target.innerText === 'Add to Cart') {

    if (!clicked) {
      let checkoutBtn = document.createElement('button');
      checkoutBtn.textContent = 'Check Out';
      document.querySelector('.menu-items').appendChild(checkoutBtn);
      checkoutBtn.addEventListener('click', orderToSession);
    }
    clicked = 1;
    let itemId = e.target.dataset.id;
    let itemAmount = e.target.previousElementSibling.value;
  
    orderArray.push({
      itemId,
      itemAmount
    });
  
    e.target.innerHTML = 'Remove';
  } else if (e.target.innerText === 'Remove') {
    let index = orderArray.map(e => e.itemId).indexOf(e.target.dataset.id)
    console.log('The index of the item to remove is ' + index);
    e.target.innerHTML = 'Add to Cart';
    orderArray.splice(index, 1);
  }

  // console.log(itemAmount);
  // console.log(itemId);
  console.log(orderArray);
}

let buttonArray = document.querySelectorAll('.add-to-cart');
buttonArray.forEach(button => {
  button.addEventListener('click', addToCart);
});

