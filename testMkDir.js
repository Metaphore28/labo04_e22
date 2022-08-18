const path = require('path');
const fs = require('fs');
console.log('debut du programme');
fs.mkdirSync(path.join(__dirname, 'mesFichiers', 'test1'), {});
console.log('Dossier test1 cree avec succes');
fs.mkdir(path.join(__dirname, 'mesFichiers', 'test2'), {},
    (err)=>{
        if (err) throw err;

        console.log('Dossier test2 cree avec success');
    }   
);
console.log('fin du programme');