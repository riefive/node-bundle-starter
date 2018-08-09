const fs = require('fs');
const source = './package.json';
const target = './dist/package.json';

try {
    if (fs.existsSync(source) && fs.statSync(source).isFile()) {
        const packages = fs.readFileSync(source, 'utf8');
        const data = JSON.parse(packages.toString());
        delete data.scripts;
        delete data.devDependencies;
        fs.writeFileSync(target, JSON.stringify(data, null, 4));  
    }
} catch (error) {
    throw error;
}

