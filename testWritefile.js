const path = require('path');
const fs = require('fs');
console.log('debut du programme');

fs.writeFile(
    path.join(__dirname, 'mesFichiers', 'salut.txt'),
    'Salut tout le monde',
    err => {
        if (err) throw err;
        console.log('Fichier salut.txt cree avec success');

        fs.appendFile(
            path.join(__dirname, 'mesFichiers', 'salut.txt'),
            "J'aime nodeJS",
            (err) => {
                if (err) throw err;
                console.log('Texte ajoute a salut.txt');
            }
        );
    }
);