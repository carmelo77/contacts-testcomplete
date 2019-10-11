const fs = require('fs');
const path = require('path'),

files = fs.readdirSync(__dirname); //para abrir  el directorio actual, de manera sincrona.

files.forEach(function(file) { //Recorremos el directorio
    let fileName = path.basename(file, '.js'); //Le colocamos cualquier nombre de archivo, pero
    //que sea de extensión .js

    if(fileName !== 'index') { //Todos los archivos que sean distinto a este "index.js".
        exports[fileName] = require('./'+ fileName); //Lo exportamos, para usar en cualquier lugar.
    }
});