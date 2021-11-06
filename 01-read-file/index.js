
//* Синхронные функции не использовал ! 
const fs = require('fs');
fs.readFile(`${__dirname}/text.txt`, "utf8", (error, data) => {
    console.log(data)
})
