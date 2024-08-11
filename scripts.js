document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 假設使用本地存儲進行簡單的用戶認證
    if (username === 'admin' && password === 'password') {
        window.location.href = '/devmode/';
    } else {
        alert('用戶名或密碼錯誤');
    }
});

document.getElementById('new-post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
    document.getElementById('posts').appendChild(post);

    // 清空表單
    document.getElementById('new-post-form').reset();
});
