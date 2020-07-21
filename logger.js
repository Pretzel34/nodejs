
var url = 'http://mylogger.io9/log';

console.log(__filename);
console.log(__dirname);


function log(message) {
    //Send HTTP message
    console.log(message);
}

module.exports.log = log;
