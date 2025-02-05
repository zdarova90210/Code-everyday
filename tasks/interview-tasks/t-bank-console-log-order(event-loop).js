const run = () => {
    setTimeout(() => {
        console.log('timeOut');
    }, 0);

    console.log(1);

    new Promise((resolve) => {
        console.log('Promise');
        setTimeout(() => {
            console.log('777');
            resolve(); // Тут важно обратить внимание на то что resolve() находится внутри setTimeout, поэтому микрозадачи .then будут выполнены после setTimeout'ов
        }, 0);
    })
        .then(() => {
            console.log('then1');
        })
        .then(() => {
            console.log('then2');
        });

    console.log(4);

    setTimeout(() => {
        console.log('timeOut2');
    }, 0);
};

run();

// 1 Promise 4 timeOut 777 then1 then2 timeOut2


// Ответ:
// 1
// Promise
// 4
// timeOut
// 777
// then1
// then2
// timeOut2