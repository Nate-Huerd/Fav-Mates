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

    // send user to their dashboard after successful log in
    if (response.ok) document.location.replace('/dashboard');
    else console.log(response.statusText);
  }
}

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

    // redirect to dashboard if signup ok
    if (response.ok) document.location.replace('/dashboard');
    else console.log(response.statusText);
  }
}

document.querySelector('.login-form').addEventListener('submit', login);
document.querySelector('.signup-form').addEventListener('submit', signup);