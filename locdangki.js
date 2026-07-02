function handleRegister(event) {
    event.preventDefault();

    const username = document.getElementById('reg-username').value;
    const phone = document.getElementById('reg-phone').value;
    const password = document.getElementById('reg-password').value;
    const errorMsg = document.getElementById('error-message');

    // Hàm tiện ích để hiển thị lỗi lên thẻ ẩn
    function showError(text) {
        errorMsg.innerText = text;
        errorMsg.style.display = "block"; // Hiện thẻ lên
        
        // Tự động ẩn đi sau 3 giây
        setTimeout(() => {
            errorMsg.style.display = "none";
        }, 3000);
    }

    // --- KIỂM TRA RÀNG BUỘC DỮ LIỆU ---

    if (username.length <= 5) {
        showError("Tên đăng nhập phải dài hơn 5 ký tự!");
        return;
    }

    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
        showError("Số điện thoại không xác định!");
        return;
    }

    // --- XỬ LÝ LƯU LOCALSTORAGE ---
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(u => u.username === username);
    if (userExists) {
        showError("Tên đăng nhập này đã có người sử dụng!");
        return;
    }

    // Nếu mọi thứ đều đúng -> Tiến hành lưu
    users.push({ 
        username: username, 
        phone: phone, 
        password: password 
    });

    localStorage.setItem('users', JSON.stringify(users));

    // Đăng ký thành công thì có thể alert hoặc chuyển trang luôn
    alert("Đăng ký thành công! Hệ thống sẽ chuyển đến trang Đăng nhập.");
    window.location.href = 'locdangnhap.html';
}