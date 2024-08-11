document.getElementById('new-post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // 發送 POST 請求到後端 API
    fetch('/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            content: content
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // 顯示成功消息或刷新文章列表
            alert('文章發布成功');
            document.getElementById('new-post-form').reset();
            fetchPosts(); // 刷新文章列表
        } else {
            alert('文章發布失敗');
        }
    })
    .catch(error => {
        console.error('錯誤:', error);
        alert('發生錯誤');
    });
});

function fetchPosts() {
    fetch('/api/posts')
    .then(response => response.json())
    .then(posts => {
        const postsList = document.getElementById('posts-list');
        postsList.innerHTML = ''; // 清空文章列表
        
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
            postsList.appendChild(postDiv);
        });
    });
}

// 當頁面加載時加載文章
document.addEventListener('DOMContentLoaded', function() {
    fetchPosts();
});

// 登出功能
document.getElementById('logout-link').addEventListener('click', function(event) {
    event.preventDefault(); // 防止默認的連結行為

    fetch('/api/logout', {
        method: 'POST'
    })
    .then(response => {
        // 確保伺服器回應成功（狀態碼在 200 到 299 之間）
        if (!response.ok) {
            throw new Error('登出請求失敗');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            // 成功處理登出，重定向到首頁
            window.location.href = '/';
        } else {
            // 如果伺服器返回的數據表示登出失敗，顯示錯誤消息
            alert('登出失敗：' + (data.message || '請稍後再試。'));
        }
    })
    .catch(error => {
        // 處理網絡錯誤或其他異常情況
        console.error('錯誤:', error);
        alert('登出過程中發生錯誤，請稍後再試。');
    });
});