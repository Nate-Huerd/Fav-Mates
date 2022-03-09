async function checkoutHandler(e) {  
  e.preventDefault(e);
  let total = new Number(document.querySelector('#sub-total').innerHTML);
  let deliveryFee = 4.5
  let tip;
  if (document.querySelector('#twenty-percent').checked) tip = .2;
  if (document.querySelector('#twenty-five-percent').checked) tip = .25;
  if (document.querySelector('#thirty-percent').checked) tip = .3;
  tip = total * tip;

  let grandTotal = (total + tip + deliveryFee).toFixed(2);

  // add grand total property to user's cart
  const response = await fetch('/api/users/addTotal', {
    method: 'POST',
    body: JSON.stringify({
      grandTotal
    }),
    headers: { 'Content-Type': 'application/json'}
    });
    if (response.ok) document.location.replace('/shopping-cart/complete');
    else console.log(response.statusText);
}

document.querySelector('#confirm-order').addEventListener('click', checkoutHandler);