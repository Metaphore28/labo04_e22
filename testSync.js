const path = require('path');
const fs = require('fs');
console.log('debut du programme');
const ligne = fs.readFileSync(path.join(__dirname, 'mesFichiers', 'toto.txt'), {encoding:'utf-8'});
console.log(ligne);
console.log('fin du programme');