const path = require('path');
const fs = require('fs');
path1 = path.join("03-files-in-folder", "secret-folder");


fs.readdir(path1, { withFileTypes: true }, function (err, items) {
    items.forEach(function (item) {
        if (item.isFile() === true) {
            let name = item.name.substr(0, item.name.indexOf("."));
            let a = path.parse(item.name).ext.slice(1);
            let pathEl = path1 + '/' + item.name;
            fs.stat(pathEl, (err, stats) => {
                if (err) {
                    console.log(err);
                }
                else {
                    let size = stats.size
                    console.log(name + ' ' + '-' + ' ' + a + ' ' + '-' + ' ' + size + 'b');
                }
            });
        }
    })
});