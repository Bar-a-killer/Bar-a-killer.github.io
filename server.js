const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true
}));

let posts = []; // 存儲文章的簡單數組

// 用戶登入
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        req.session.user = username;
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// 用戶登出
app.post('/api/logout', (req, res) => {
    req.session.destroy();
    res.json({ success: true });
});

// 獲取文章
app.get('/api/posts', (req, res) => {
    if (req.session.user) {
        res.json(posts);
    } else {
        res.status(401).json({ error: '未授權' });
    }
});

// 新增文章
app.post('/api/posts', (req, res) => {
    if (req.session.user) {
        const { title, content } = req.body;
        posts.push({ title, content });
        res.json({ success: true });
    } else {
        res.status(401).json({ error: '未授權' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});