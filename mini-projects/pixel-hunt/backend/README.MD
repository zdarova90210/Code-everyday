# PixelHunt Backend

## Описание
PixelHunt - это серверная часть приложения для угадывания изображений по пикселям. Этот бэкенд обрабатывает API-запросы, управляет базой данных и обеспечивает хранение изображений.

## Функциональность (в планах)
- Получение случайного изображения из базы данных.
- Проверка введенного пользователем ответа.
- Хранение изображений локально.
- API для фронтенда.

## Используемый стек технологий
- **Node.js** – серверная среда.
- **Express.js** – фреймворк для создания API.
- **MySQL** – база данных для хранения информации.
- **dotenv** – работа с переменными окружения.
- **multer** – загрузка изображений.
- **cors** – настройка CORS для работы фронтенда.

## Структура проекта (планируемая)
```
backend/
│-- config/
│   └── db.js            # Настройка подключения к БД
│-- controllers/
│   └── imageController.js  # Логика работы с изображениями
│-- routes/
│   └── imageRoutes.js   # API-маршруты
│-- uploads/             # Папка для хранения изображений (не пушить в гит)
│-- index.js             # Основной файл сервера
│-- .env                 # Файл с переменными окружения
│-- .gitignore            # Файлы, исключаемые из гита
│-- package.json         # Зависимости и настройки проекта
└-- README.md            # Описание проекта
```

## API эндпоинты (в планах)

### Получение случайного изображения
**GET /api/images**

**Ответ:**
```json
{
  "id": 1,
  "filename": "cat.jpg",
  "answer": "cat"
}
```

---

### Проверка ответа
**POST /api/guess**

**Запрос:**
```json
{
  "imageId": 1,
  "answer": "cat"
}
```

**Ответ:**
```json
{
  "correct": true
}
```

---

## TODO (планы на будущее)
- Реализация авторизации пользователей.
- Добавление рейтинга участников.
- Размещение базы данных в облаке.
- Добавление категорий изображений.
---

## Контакты
Если возникли вопросы, обращайся: [zdarova90210@gmail.com](mailto:zdarova90210@gmail.com)

