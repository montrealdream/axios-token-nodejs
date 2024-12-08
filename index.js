const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// [GET] /api/login
app.get('/api/login', (req, res) => {
    console.log('[GET] /api/login:::OK')
    return res.status(200).json({
        status: 'success',
        element: {
            token: 'accessToken',
            timeExpired: Date.now() + (60 * 1000) // 1 phút
        }
    });
});

// [GET] /api/user
app.get('/api/user', (req, res) => {
    console.log('[GET] /api/user:::OK')
    return res.status(200).json({
        status: 'success',
        element: [
            {
                name: 'giang trường'
            },
            {
                name: 'khắc duy'
            },
            {
                name: 'phúc quân'
            },
        ]
    });
});

// [GET] /api/user
app.get('/api/refreshToken', (req, res) => {
    console.log('[GET] /api/refreshToken:::OK')
    return res.status(200).json({
        status: 'success',
        element: {
            token: 'accessToken',
            timeExpired: Date.now() + (60 * 1000) // 1 phút
        }
    });
});

app.listen(port, () => {
  console.log(`app run on port ${port}`)
})