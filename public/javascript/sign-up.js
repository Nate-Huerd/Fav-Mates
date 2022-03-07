async function signup(e) {
    e.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      // make api call to create a new user
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json'}
      });
  
      // send user back to homepage if signup ok
      if (response.ok) document.location.replace('/');
      else console.log(response.statusText);
    }
  }
  
document.querySelector('.sign-up-form').addEventListener('submit', signup);