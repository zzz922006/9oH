// File: login.js
function handleLogin(event) {
    // Ngăn form tự tải lại trang
    event.preventDefault();

    const inputUsername = document.getElementById('login-username').value;
    const inputPassword = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(u => u.username === inputUsername && u.password === inputPassword);

    if (validUser) {
        sessionStorage.setItem('currentUser', inputUsername);
        alert("Đăng nhập thành công! Chào mừng " + inputUsername);
        window.location.href = 'index.html'; 
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
    }
}