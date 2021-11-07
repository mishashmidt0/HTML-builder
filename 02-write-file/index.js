
const fs = require('fs');
const path = require('path');

path1 = path.join(`${__dirname}`, "text.txt");

const writeStream = fs.createWriteStream(path1),
    stdin = process.stdin;

console.log('Зравствуйте, введите текст:');

stdin.on('data', (data) => {
    data.toString().trim() === 'exit'
        ? process.exit()
        : writeStream.write(data);
});

process.on('exit', () => console.log('До свидания!'))
process.on('SIGINT', () => process.exit())