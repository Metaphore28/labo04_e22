const Logger = require('./logger');
const logger = new Logger();

logger.on('message', (data) => console.log('gestionnaire a ete appele: ', data));

logger.log('Connexon a la BD reussite');
logger.log('Hello World!');
logger.log('2e message');