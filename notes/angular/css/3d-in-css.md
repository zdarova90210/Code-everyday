# 🎨 CSS 3D Трансформации: Конспект с примером карточки

## 📌 Что такое 3D в CSS

CSS позволяет применять трансформации к элементам не только в 2D (поворот, масштаб, перемещение), но и в
3D-пространстве. Основные свойства:

- `transform`: задаёт трансформации (например, `rotateX`, `rotateY`, `translateZ` и др.)
- `perspective`: создаёт иллюзию глубины, определяет, как "глубоко" мы видим сцену.
- `transform-style: preserve-3d`: сохраняет 3D-расположение вложенных элементов.
- `backface-visibility`: управляет видимостью обратной стороны элемента при повороте.

---

## 🧱 Пример: Переворачиваемая карточка

### ✅ HTML

```html

<div class="card-container">
    <div class="card">
        <div class="card-face card-back"></div>
        <div class="card-face card-front">{{ value }}</div>
    </div>
</div>
```

### ✅ CSS

```scss
.card-container {
  position: relative;
  height: 180px;
  perspective: 1000px; // Глубина 3 D сцены
}

.card {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d; // Сохраняем 3 D для вложенных элементов cursor: pointer;

  &:hover {
    transform: rotateY(180deg); // Поворот карточки по оси Y
  }

  .card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; // Скрывает "заднюю" сторону display: flex;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    font-weight: bold;
    border: 1px solid #fff;
    border-radius: 10px;
  }

  .card-back {
    background-color: #333;
    color: #fff;
  }

  .card-front {
    background-color: #ddd;
    color: #000;
    transform: rotateY(180deg); // Поворачиваем, чтобы спрятать "лицо"
  }
}
```

## ⚠️ Пример: Переворачиваемая карточка

- Обе стороны (`.card-front` и `.card-back`) должны быть `position: absolute`, совпадать по размеру и быть вложены в
  `.card`.
- Переворачивается вся карточка (`.card`), а не её отдельные стороны.
- Для клика вместо наведения можно использовать классы и переключать их с помощью JavaScript.

## ✅ Примерная логика переворота

1. Карточка вращается по оси Y.
2. Передняя сторона уже повернута на 180°, чтобы она показалась после поворота всей карточки.
3. Обратная сторона (.card-back) видна сначала, а затем скрывается за счёт backface-visibility.