const rosaenlgPug = require('rosaenlg');


let phones = [
    {
        name: 'OnePlus 5T',
        colors: ['Black', 'Red', 'White'],
        displaySize: 6,
        screenRatio: 80.43,
        battery: 3300,
    },
    {
        name: 'OnePlus 5',
        colors: ['Gold', 'Gray'],
        displaySize: 5.5,
        screenRatio: 72.93,
        battery: 3300,
    },
    {
        name: 'OnePlus 3T',
        colors: ['Black', 'Gold', 'Gray'],
        displaySize: 5.5,
        screenRatio: 73.15,
        battery: 3400,
    },
];

let res = rosaenlgPug.renderFile('tuto.pug', {
    language: 'en_US',
    phone: phones[0]
});
console.log(res);