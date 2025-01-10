const path = require("path")
// console.log(path.sep);
// // \(window),/(mac, linux)
// console.log(process.env.PATH);
// console.log(path.delimiter);//(;)//

// to find current file path
const currentFilePath = __filename
console.log('currentFilePath>',currentFilePath);
//C:\Users\Ayushi\Desktop\NodeJS\my-app\index.js//
let basename =path.basename(currentFilePath);
console.log('basename>',basename);//index.js
let basenameWithoutExt=path.basename(currentFilePath, '.js');
console.log('basenameWithoutExt>',basenameWithoutExt);//index

let dirname = path.dirname(currentFilePath);
console.log('dirname',dirname);
//C:\Users\Ayushi\Desktop\NodeJS\my-app
console.log('ext>',path.extname(currentFilePath));
//ext> .js
console.log('ext2>',path.extname('index.md.js'));
//ext> .js

//To combine
let pathToFile= path.format({
    dir:'\public_html\home',
    base:'index.html'
});
console.log('pathToFile>',pathToFile);

//to check path relative or absolute
console.log('IsAbsolute', path.isAbsolute(currentFilePath));
//IsAbsolute true
console.log('IsAbsolute', path.isAbsolute('\index.js'));//IsAbsolute false
console.log('IsAbsolute', path.isAbsolute('.\index.js'));//IsAbsolute false
console.log('IsAbsolute', path.isAbsolute('..\index.js'));//IsAbsolute false

//to combine multiple path
let pathToDir= path.join('\home','js','dist','index.js');
console.log('pathToDir>',pathToDir);
//pathToDir> home\js\dist\index.js
console.log('parse>',path.parse(currentFilePath));
//parse> {
//     root: 'C:\\',
//     dir: 'C:\\Users\\Ayushi\\Desktop\\NodeJS\\my-app',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }

//(from,to)//
// console.log('relative path>',path.relative('\home\user\config','\home\user\js\'));

    console.log('resolve>', path.resolve());//resolve> C:\Users\Ayushi\Desktop\NodeJS\my-app
    console.log('normalize>', path.normalize('\\home\\user\\js'));//normalize> \home\user\js
    
    