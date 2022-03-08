let errorExists = 0

async function login(e) {
  e.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  const passwordEl = document.querySelector('#password-login');
  const errorEl = document.createElement('p');

  if (password.length < 4) {
    if (!errorExists) {
      errorExists++;
      errorEl.textContent = 'Password must be at least 4 characters'
      errorEl.style.color = 'red';
      errorEl.className = 'password_text';
      errorEl.style.margin = '0 auto';
      passwordEl.parentNode.insertBefore(errorEl, passwordEl.nextSibling);
      return;
    }
  }

  if (username && password >= 4) {
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
    else {
     window.alert('Username/Password mismatch. Please check your input and try again')
     document.location.replace('/login');
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', login);