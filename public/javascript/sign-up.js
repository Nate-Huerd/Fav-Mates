let errorExists = 0;

async function signup(e) {
  e.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const passwordEl = document.querySelector('#password-signup');
  const errorEl = document.createElement('p');

  if (password.length < 4) {
    if (!errorExists) {
      errorExists++;
      errorEl.textContent = 'Password must be at least 4 characters';
      errorEl.style.color = 'red';
      errorEl.className = 'password_text';
      errorEl.style.margin = '0 auto';
      passwordEl.parentNode.insertBefore(errorEl, passwordEl.nextSibling);
      return;
    }
  }

  if (username && password.length >= 4) {
    // make api call to create a new user
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    // send user back to homepage if signup ok
    if (response.ok) document.location.replace('/');
    else {
      window.alert(`Username ${username} is not available`);
      document.location.replace('/sign-up');
    }
  }
}

document.querySelector('.sign-up-form').addEventListener('submit', signup);
