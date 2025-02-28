# Механизм Change Detection в Angular

Механизм **Change Detection (Обнаружение изменений)** в Angular позволяет синхронизировать данные между моделью и
пользовательским интерфейсом автоматически. Это достигается благодаря дереву компонентов и механизму отслеживания
изменений. Angular применяет подходы для оптимизации, такие как зоны и опции для кастомизации.

---

## Как работает Change Detection

### 1. Зоны (`zone.js`)

Angular использует библиотеку `zone.js` для отслеживания асинхронных операций.

- **Как работает зона?**
  Зона перехватывает события, происходящие в приложении (таймеры, клики, HTTP-запросы и т.д.) и запускает цикл проверки
  дерева компонентов.

- **Какие события отслеживаются зоной?**
  Примеры:
    - Пользовательские события (нажатия, ввод данных, события мыши);
    - `Promise` или другие колбэки;
    - Таймеры вроде `setTimeout`, `setInterval`.

---

### 2. Цикл проверки изменений

Angular проходит через дерево компонентов, начиная с корневого узла, проверяя:

- Изменились ли свойства компонента?
- Нужно ли обновить шаблон?

Для проверки изменений Angular использует механизм **dirty checking**: текущее значение проверяется на совпадение с
предыдущим.

---

### Режимы Change Detection

Angular поддерживает два режима Change Detection:

#### 1. Default (По умолчанию)

- Проверяется всё дерево компонентов.
- Это универсальный режим, но может быть менее производительным при больших объемах данных.

#### 2. OnPush

- Обновления проверяются **только при изменении ссылки на данные** (или если они передаются в шаблон).
- Это улучшает производительность, т.к. обновляются только необходимые участки.

```typescript

@Component({
    selector: 'app-example',
    changeDetection: ChangeDetectionStrategy.OnPush // Используем OnPush
})
export class ExampleComponent {
    @Input() data!: any; // Обновится только при смене объекта data (immutable)
}
```

## Упрощение работы с шаблонами

### 1. Использование `trackBy` в `*ngFor`

Если список длинный, при перерисовке Angular создаёт весь список заново. Чтобы улучшить производительность, можно
использовать функцию `trackBy`.

```
trackByFn(index: number, item: any): number {
  // Возвращает уникальный идентификатор
  return item.id;
}
```

Пример в шаблоне:

```html

<div *ngFor="let item of items; trackBy: trackByFn">
    {{ item.name }}
</div>
```

### 2. Использование `AsyncPipe`

При работе с Observables можно упростить код и избежать ручного управления подписками:

```html

<div *ngIf="data$ | async as data">
    {{ data }}
</div>
```

---

## Советы по производительности

1. **Minimize Default Strategy**
   Уменьшайте обновления дерева:
    - Используйте стратегию `OnPush` там, где возможно.
    - Отключайте компоненты с помощью `ChangeDetectorRef.detach()`.

2. **Reactive Approach**
   Используйте реактивные подходы, такие как `RxJS`:
    - Трансформируйте данные внутри потоков операторов `map`, `distinctUntilChanged`.

3. **Значения только по ссылке**
   Избегайте изменения свойств объектов внутри ссылок (используйте immutable).

---

## Пример с использованием OnPush и ручного обновления

### Компонент:

```typescript
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component
} from '@angular/core';

@Component({
    selector: 'app-on-push-example',
    template: `
    <div>
      <h1>{{ title }}</h1>
      <button (click)="manualUpdate()">Manual Update</button>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushExampleComponent {
    title = 'Default Title';

    constructor(private cdr: ChangeDetectorRef) {
    }

    manualUpdate() {
        this.title = 'Updated Title';
        this.cdr.detectChanges(); // Обновляем вручную
    }
}
```

---

## Вывод

Change Detection — мощный инструмент Angular, который автоматически синхронизирует модель данных с UI. Используйте
стратегию `OnPush`, `AsyncPipe`, и оптимизируйте большие списки при помощи `trackBy`, чтобы приложения оставались
производительными.