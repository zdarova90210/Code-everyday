// У тебя есть массив строк (продуктовая корзина).
// Нужно превратить его в объект, где ключом будет название продукта,
// а значением — количество этих продуктов в корзине.

const inventory = ['apple', 'banana', 'cherry', 'apple', 'orange', 'banana', 'apple'];

// Ожидаемый результат: { apple: 3, banana: 2, cherry: 1, orange: 1 }

const result = inventory.reduce((acc, item) => {
  if (!acc[item]) {
    acc[item] = 0;
  }
  acc[item] = ++acc[item];
  return acc;
}, {})

console.log(result);
