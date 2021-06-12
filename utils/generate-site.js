const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error, reject the Promise and send the error to the Promises '.catch()' method.
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't execute the resolve funciton as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = style => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                console.log(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied'
            });
        });
    });
};

module.exports = {writeFile,copyFile};