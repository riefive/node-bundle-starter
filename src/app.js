const fs = require('fs');
const path = require('path');
const source = path.join(__dirname, '/config.json');

function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 1000);
    });
}
  
async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
}
  
addAsync(10).then((sum) => {
    console.log(sum);
});

console.log('hello world');
console.log(__dirname);
console.log(source);

if (fs.existsSync(source) && fs.statSync(source).isFile()) {
    const config = fs.readFileSync(source, 'utf8');
    const data = JSON.parse(config.toString());
    console.log(data);
}

