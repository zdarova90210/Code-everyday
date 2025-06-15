/*
  Написать функцию, определяющую является ли число простым.
  Простое число имеет только 2 делителя - самого себя и единицу.
*/

/*
  Есть смысл проверять делители в промежутке от 1 до корня от заданного числа.
  Также есть смысл проверять только нечётные числа (за исключением случая, когда проверяем число 2).
*/

function isPrime(n) {
  if (n <= 1) {
    console.log(`❌ Простое число не может быть меньше 1`);
    return false;
  }
  if (n === 2) {
    console.log(`✅ Число 2 является простым. Это единственное чётное простое число`)
    return true;
  }

  if (n % 2 === 0) {
    console.log(`❌ Число ${n} не является простым, так как делится на 2`)
    return false;
  }

  const sqrtN = Math.floor(Math.sqrt(n));

  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i === 0) {
      console.log(`❌ Число ${n} не является простым. Найденный делитель - ${i}`)
      return false;
    }
  }
  console.log(`✅ Число ${n} является простым`)
  return true;
}

// Простые числа для проверки:
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109

isPrime(1);
isPrime(2);
isPrime(3);
isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(8);
isPrime(9);
isPrime(10);
isPrime(11);
isPrime(12);
isPrime(13);
isPrime(14);
isPrime(15);
isPrime(16);
isPrime(17);
isPrime(18);
isPrime(19);
isPrime(20);
isPrime(21);
isPrime(22);
isPrime(23);
isPrime(24);
isPrime(25);
isPrime(26);
isPrime(27);
isPrime(28);
isPrime(29);
isPrime(30);
isPrime(31);
isPrime(32);
isPrime(33);
isPrime(34);
isPrime(35);
isPrime(36);
isPrime(37);
isPrime(38);
isPrime(39);
isPrime(40);
isPrime(41);
isPrime(42);
isPrime(43);
isPrime(44);
isPrime(45);
isPrime(46);
isPrime(47);
isPrime(48);
isPrime(49);
isPrime(50);
isPrime(51);
isPrime(52);
isPrime(53);
isPrime(54);
