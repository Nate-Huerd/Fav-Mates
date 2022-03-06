async function login(e) {
  e.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    // make api call to login the user
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json'}
    });

    // send user back to homepage when logged in
    if (response.ok) document.location.replace('/');
    else console.log(response.statusText);
  }
}

document.querySelector('.login-form').addEventListener('submit', login);