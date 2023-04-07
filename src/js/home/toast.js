let success = document.querySelectorAll('#success');
let login = document.querySelectorAll('#login');
let logout = document.querySelectorAll('#logout');
let phone = document.querySelectorAll('#phone');
let notpass = document.querySelectorAll('#notpass');
let notifications = document.querySelector('.notifications');


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
login.forEach(button => {
    button.onclick = function(){
        let type = 'login';
        let icon = 'fa-solid fa-circle-check';
        let title = 'Thành công';
        let text = 'Đăng nhập thành công.';
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
logout.forEach(button => {
    button.onclick = function(){
        let type = 'logout';
        let icon = 'fa-solid fa-circle-check';
        let title = 'Thành công';
        let text = 'Đăng ký thành công.';
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
phone.forEach(button => {
    button.onclick = function(){
        let type = 'phone';
        let icon = 'fa-solid fa-circle-check';
        let title = 'Thành công';
        let text = 'Gửi liên hệ thành công.';
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
notpass.forEach(button => {
    button.onclick = function(){
        let type = 'notpass';
        let icon = 'fa-solid fa-circle-check';
        let title = 'HOÀN THÀNH';
        let text = 'Tạo mật khẩu mới thành công';
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