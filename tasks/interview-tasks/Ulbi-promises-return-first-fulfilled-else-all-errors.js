/*
Примеры
[Promise.resolve(1), Promise.resolve(2)]
[Promise.reject(3), Promise.resolve(4)]
[Promise.reject(5), Promise.reject(6)]
Реализуйте функцию resolver, на вход которой поступает массив промисов, а на выходе новый промис,
работающий по следующим правилам:
1) Если в массиве есть успешно выполняемый промис – возвращаем новый промис с результатом этого промиса.
2) Если массив состоит только из промисов, которые завершаются с ошибкой (reject), то необходимо вернуть новый промис,
где в reject передаем массив ошибок всех промисов.
т.е. задача агрегировать все ошибки массива промиссов в один промис.

Выход
Кейс 1 – Promise => 5
Кейс 2 – Promise => Error(errors)
*/

function resolver(promises) {
  return Promise.any(promises)
    .catch(aggregatedError => Promise.reject(aggregatedError.errors))
}

// console.log([Promise.resolve(1), Promise.resolve(2)])
// console.log([Promise.reject(3), Promise.resolve(4)])
// console.log([Promise.reject(5), Promise.reject(6)])

console.log(resolver([Promise.reject(5), Promise.reject(6)]).then(console.log));