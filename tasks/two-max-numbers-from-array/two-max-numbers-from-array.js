// Задача из собеседования в Yandex
// Дан целочисленный массив, нужно вернуть два максимальных значения.
// Например: [2,1,3] -> [3,2]

// Решение с сортировкой приведёт к линейно-логарифмической зависимости, что не очень хорошо.
// Решение в 2 прохода с помощью метода нахождения максимального числа типа Math.max(...myArr) тоже не лучшее. Нужно за 1 проход.

const myArr = Array.from({length: 1000000}, () => Math.floor(Math.random() * 1000001));


function findTwoMaxNumbers(arr) {
    if (!arr || arr.length < 2) {
        throw new Error('Array must have at least 2 elements');
    }

    let firstNum = -Infinity;
    let secondNum = -Infinity;

    arr.forEach(n => {
        if (n > firstNum) {
            secondNum = firstNum;
            firstNum = n;
        } else if (n > secondNum) {
            secondNum = n;
        }
    })

    return [firstNum, secondNum];
}

console.log(myArr);
console.log(findTwoMaxNumbers(myArr));


