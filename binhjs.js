document.querySelectorAll('.timeline-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Chặn hành vi nhảy lập tức của thẻ a

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Hiệu ứng cuộn mượt mà
                block: 'center'     // Đẩy phần nội dung chi tiết vào giữa màn hình
            });
        }
    });
});