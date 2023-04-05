let success = document.querySelectorAll('#success');
let warning = document.querySelectorAll('#warning');
let notifications = document.querySelector('.notifications');

console.log(success, warning, notifications)

success.forEach(button => {
    button.onclick = function(){
        let type = 'success';
        let icon = 'fa-solid fa-circle-check';
        let title = 'Thành công';
        let text = 'Đặt hàng thành công.';
        let newToast = document.createElement('div');
    newToast.innerHTML = `
        <div class="toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="close fa-solid fa-xmark"
                onclick="(this.parentElement).remove()"
                ></i>
            </div>`;

    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(() => newToast.remove(), 5000)
    }
});
warning.forEach(button => {
    button.onclick = function(){
        let type = 'warning';
    let icon = 'fa-solid fa-triangle-exclamation';
    let title = 'Xóa';
    let text = 'Xóa sản phẩm thành công';
        let newToast = document.createElement('div');
    newToast.innerHTML = `
        <div class="toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="close fa-solid fa-xmark"
                onclick="(this.parentElement).remove()"
                ></i>
            </div>`;

    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(() => newToast.remove(), 5000)
    }
});


