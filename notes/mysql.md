# Основы MySQL для начала работы

## Введение

1. **MySQL** — это система управления базами данных (СУБД), позволяет хранить, организовывать и манипулировать данными.
2. **Главная цель** MySQL — работа с реляционными базами данных. Данные хранятся в таблицах (столбцы и строки).
3. Основным языком для работы с MySQL является **SQL** (Structured Query Language).

---

## Основные запросы MySQL для начала

### 1. Создание базы данных
```sql
CREATE DATABASE database_name;
```

### 2. Использование базы данных
```sql
USE database_name;
```

### 3. Создание таблицы
```sql
CREATE TABLE table_name (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Auto-increment primary key
    column1 VARCHAR(255),              -- Text column
    column2 INT,                       -- Integer column
    column3 DATE                       -- Date column
);
```

### 4. Добавление данных в таблицу
```sql
INSERT INTO table_name (column1, column2, column3)
VALUES ('text', 123, '2023-01-01');
```

### 5. Чтение данных из таблицы
```sql
SELECT * FROM table_name; -- Select all data
SELECT column1, column2 FROM table_name WHERE column2 > 100; -- With condition
```

### 6. Обновление данных
```sql
UPDATE table_name
SET column1 = 'new text'
WHERE id = 1;
```

### 7. Удаление данных
```sql
DELETE FROM table_name WHERE id = 1;
```

### 8. Удаление таблицы
```sql
DROP TABLE table_name;
```

### 9. Удаление базы данных
```sql
DROP DATABASE database_name;
```

### 10. Просмотр всех баз данных
```sql
SHOW DATABASES;
```

### 11. Просмотр всех таблиц в базе
```sql
SHOW TABLES;
```

---

## Примечания

- **AUTO_INCREMENT** — используется для автоматического увеличения значения столбца, полезно для уникальных идентификаторов.
- **PRIMARY KEY** — создаёт уникальный ключ для каждой записи.
- Используйте **WHERE** при обновлении или удалении данных, чтобы не изменить/удалить всё содержимое таблицы.
- Формат даты — **YYYY-MM-DD**, например, `'2023-01-01'`.