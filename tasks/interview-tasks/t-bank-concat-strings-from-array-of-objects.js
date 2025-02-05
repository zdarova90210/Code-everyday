// написать функцию, либо последовательность операций, которая вернет результат следующих условий
// результат есть строка из сконкатенированных value элементов коллекции, расположенных в обратном порядке символов,
// результат собирается только из непросроченных записей и конкатенируется в порядке возрастания order
// результат не содержит одинаковых символов

const input = [
    { value: 'abcd', order: 4, expired: false },
    { value: 'qwer', order: 2, expired: true },
    { value: 'xyz1', order: 1, expired: false },
    { value: 'abx2', order: 3, expired: false }
];

// Первое решение "в лоб", которое пришло в голову:
// const result = Array.from(new Set(input.filter(item => !item.expired).map(item => item.value.split('').reverse()).flat())).join('');
// console.log(result);

// =============

// Хорошее решение за одну фильтрацию + одну сортировку + один проход по массиву.
// Собеседующий сказал что это предпочтительный алгоритм, если учесть что входных данных может быть много.
const convertInput = (input) => {
    const filtered = input.filter(item => !item.expired);
    const sorted = filtered.sort((a, b) => a.order - b.order);

    const result = sorted.reduce((acc, curr) => {
        const reversed = curr.value.split('').reverse().join('');
        return acc += reversed;
    }, '');
    return Array.from(new Set(result)).join('');
}

console.log(convertInput(input));