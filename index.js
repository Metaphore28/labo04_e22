console.log('Salut tout le monde!')

const personne = require('./personne');
// import personne from './personne';
console.log(personne.nom);
console.log("Voice l'age de Bob " + personne.age + " ans");


const Personne = require('./classPersonne');
const paul = new Personne('Paul Larue', 38);
paul.salut();
var bob = new Personne('Bob Larue', 33);
bob.salut();