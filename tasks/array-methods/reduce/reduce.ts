// Уровень 1: Разогрев (Подсчет элементов)
// У тебя есть массив строк (продуктовая корзина).
// Нужно превратить его в объект, где ключом будет название продукта,
// а значением — количество этих продуктов в корзине.

// const inventory = ['apple', 'banana', 'cherry', 'apple', 'orange', 'banana', 'apple'];

// Ожидаемый результат: { apple: 3, banana: 2, cherry: 1, orange: 1 }

// const result = inventory.reduce((acc, item) => {
//   if (!acc[item]) {
//     acc[item] = 0;
//   }
//   acc[item] = ++acc[item];
//   return acc;
// }, {})
//
// console.log(result);

// -------------------------------------------------------------------------------

// Уровень 2: Группировка данных (Средний уровень)
// Задача: У тебя есть список студентов с их оценками. Используя reduce, сгруппируй студентов по их оценке.
// Результатом должен быть объект, где ключи — оценки, а значения — массивы имен студентов.

type Student = { name: string; grade: number };

const students: Student[] = [
  {name: 'Alice', grade: 5},
  {name: 'Bob', grade: 4},
  {name: 'Charlie', grade: 5},
  {name: 'David', grade: 3},
  {name: 'Eve', grade: 4}
];

const result = students.reduce<Record<number, string[]>>((acc, curr) => {
  (acc[curr.grade] ??= []).push(curr.name);
  return acc;
}, {})

console.log(result);

// Ожидаемый результат:
// {
//   '3': ['David'],
//   '4': ['Bob', 'Eve'],
//   '5': ['Alice', 'Charlie']
// }

// -------------------------------------------------------------------------------

// Уровень 3: Трансформация и фильтрация (Продвинутый)
// Задача: Представь, что ты получаешь данные о транзакциях. Твоя цель — за один проход (используя только один reduce)
// получить итоговый баланс (сумма всех amount) и список всех уникальных категорий, в которых были траты.
// Нюанс: не используй Set снаружи, попробуй собрать массив категорий прямо внутри аккумулятора.

// type Transaction = { id: number; amount: number; category: string };
//
// const transactions: Transaction[] = [
//   { id: 1, amount: 100, category: 'Food' },
//   { id: 2, amount: -50, category: 'Transport' },
//   { id: 3, amount: 200, category: 'Food' },
//   { id: 4, amount: -30, category: 'Entertainment' },
// ];

// Ожидаемый результат:
// {
//   totalBalance: 220,
//   categories: ['Food', 'Transport', 'Entertainment']
// }
