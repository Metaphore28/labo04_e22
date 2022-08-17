const path = require('path');

console.log('Affichage de path.basename:', path.basename(__filename));
console.log('Affichage de path.dirname:', path.dirname(__filename));

console.log('Affiche de __filename:', __filename);
console.log('Affiche de __dirname:', __dirname);
console.log('delimiter vaut:', path.delimiter);
console.log('Affichage de path.extname', path.extname(__filename));
console.log('Affichage de path.parse', path.parse(__filename));
const partiesFichier = path.parse(__filename);
console.log(partiesFichier.name);
console.log(partiesFichier.root);
console.log(partiesFichier.dir);
console.log('Affichage du ext de path.parse', path.parse(__filename).ext);
console.log('COnstruction dun chemin de fichier', path.join(__dirname, 'mesFichiers', 'toto.txt'));
console.log('Le separateur est:', path.sep);

const fs = require('fs');
fs.mkdirSync(path.join(__dirname, 'mesFichiers', 'TEST'));
fs.unlinkSync(path.join(__dirname, 'mesFichiers', 'toto.txt'));