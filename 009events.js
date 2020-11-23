var events = require('events')


var eventEmitter = new events.EventEmitter()

//speak listener
var iWillSpeak = function(){
    console.log("I will speak!");
}

var iWillShout = function(){
    console.log("Shouting!")
}

eventEmitter.on('speak', iWillSpeak)

eventEmitter.emit('speak')

