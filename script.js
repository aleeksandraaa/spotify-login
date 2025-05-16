const passwordField = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');
let visible = false;

togglePassword.addEventListener('click', () => {
  visible = !visible;
  passwordField.type = visible ? 'text' : 'password';
  togglePassword.src = visible ? 'assets/eye-slash-icon.png' : 'assets/eye-icon.png';
});

