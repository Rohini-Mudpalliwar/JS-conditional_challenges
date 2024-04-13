document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');
    
    if (username.length < 8 || !(/[!@#$%^&*(),.?":{}|<>]/.test(password))) {
      message.textContent = "Username must be at least 8 characters long and password must contain a special character.";
      message.classList.remove('hidden');
    } else {
      message.classList.add('hidden');

      console.log("Username:", username);
      console.log("Password:", password);
    }
  });
  