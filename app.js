// const fs = require('fs');

// // const files = fs.readdirSync('./');

// // console.log(files);

// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

const EventEmitter = require('events');
const emitter = new EventEmitter();

///Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
});



//Raised an event
emitter.emit('messageLogged');
//make a noise, or signal something

