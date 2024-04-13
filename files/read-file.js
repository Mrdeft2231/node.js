const fs = require('fs');

const readFile = () => {
    const file = fs.readFile('file.txt', {encoding: 'utf-8'}, (err, data) => {
        console.data(data);
    })
}

readFile();