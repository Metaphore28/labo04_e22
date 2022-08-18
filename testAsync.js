const path = require('path');
const fs = require('fs');
console.log('debut du programme');
fs.readFile(path.join(__dirname, 'mesFichiers', 'toto.txt'), { encoding:'utf-8' }, 
        (err, ligne) => {
            console.log(ligne)
        });
console.log('fin du programme');
