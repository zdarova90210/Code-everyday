const run = () => {
    setTimeout(() => {
        console.log('timeOut');
    }, 0);

    console.log(1);

    new Promise((resolve) => {
        console.log('Promise');
        setTimeout(() => {
            console.log('777');
            // Тут важно обратить внимание на то что resolve() находится внутри setTimeout, поэтому микрозадачи .then
            // будут выполнены после setTimeout'ов
            resolve();
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