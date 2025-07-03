// OLD TEST:
const {EventEmitterOld} = require('./EventEmitterProto.js');
const myOldEE = new EventEmitterOld();

let h = (name) => {
    console.log(`Hello ${name}!`)
}

let gb = (name) => {
    console.log(`Goodbye ${name}!`)
}

myOldEE.on("Say Hello", h);

myOldEE.emit("Say Hello", "Daniel"); // works!

myOldEE.off("Say Hello", h);
myOldEE.emit("Say Hello", "Daniel"); // doesn't work!

myOldEE.once("Say Goodbye", gb);
myOldEE.emit("Say Goodbye", "Daniel");
myOldEE.emit("Say Goodbye", "Daniel"); // doesn't work!


// NEW TEST:
const {EventEmitter} = require('./EventEmitter.js');
const myEE = new EventEmitter();

myEE.on("Say Hello", h); 

myEE.emit("Say Hello", "Daniel"); // works!

myEE.off("Say Hello", h);
myEE.emit("Say Hello", "Daniel"); // doesn't work!

myEE.once("Say Goodbye", gb);
myEE.emit("Say Goodbye", "Daniel");
myEE.emit("Say Goodbye", "Daniel"); // doesn't work!