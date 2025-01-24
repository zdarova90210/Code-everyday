const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Подключение к базе данных
// const db = mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD || 'password',
//     database: process.env.DB_NAME || 'pixelhunt'
// });
//
// db.connect(err => {
//     if (err) {
//         console.error('Ошибка подключения к базе данных:', err);
//     } else {
//         console.log('Подключено к MySQL');
//     }
// });

// Пример эндпоинта для получения изображений
app.get('/api/images', (req, res) => {
    // db.query('SELECT * FROM images ORDER BY RAND() LIMIT 1', (err, result) => {
    //     if (err) {
    //         return res.status(500).send('Ошибка получения данных');
    //     }
    //     res.json(result[0]);  // Отдаем случайное изображение
    // });
    res.send('Hello World!');
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));