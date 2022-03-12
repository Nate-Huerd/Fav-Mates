async function finishOrderHandler(e) {
  let response = await fetch('/api/users/empty');

  if (response.ok) {
    document.location.replace('/restaurants');
  }
}

document.querySelector('#finish-button').addEventListener('click', finishOrderHandler);