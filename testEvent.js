const EventEmitter = require('events');
class MonEmeteurClasse extends EventEmitter{};

// objet qui va servir à emettre un événement 
const emeteur = new MonEmeteurClasse();

emeteur.on('evenement', ()=>{console.log('evenement est ON')});
emeteur.on('X', ()=>{console.log('X est ON')});
emeteur.on('Y', ()=>{console.log('Y est ON')});
//
emeteur.emit('evenement');
emeteur.emit('X');
emeteur.emit('Y');
