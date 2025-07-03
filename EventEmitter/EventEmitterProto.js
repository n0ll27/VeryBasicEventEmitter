class EventEmitterOld {
    // keyword method/language API that'll run once event object is instantiated:
    constructor() {
        this.events = {};
    }

    // creating the on() method which allows you to add an event to our events object:
    on(eventName, listener) {
        // checks if said event has been instantiated before, if not create an empty array which is later filled:
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    // allows you to actually use your event
    emit(eventName, ...args) {
        // exit out if the event doesn't exist
        if (!this.events[eventName]) return;

        // if it does exist -> loop through the array using the forEach language API 
        // -> assigns the callback the optional arguments given that they are stored in an array [callback1, callback2, ...]
        // -> executes the anonymous callback with ...args array as params
        // if empty then an array w/ 0 args as elems is passed:
        this.events[eventName].forEach(listener => {
            listener(...args);
        });
    }
    // remove the listener you don't want, could use .splice() API but it's longer and messier
    off(eventName, listenerRemoveName) {
        // if it doesn't exist terminate the operation:
        if (!this.events[eventName]) return;

        // index check && remove:
        const listenerArr = this.events[eventName];
        for (let i = 0; i < listenerArr.length; ++i) {
            if (listenerArr[i] === listenerRemoveName) {
                listenerArr.splice(i, 1);
            }
        }
    }

    // building a simple once using the other methods, works beautifully
    // allows you to run an event ONLY once:
    once(eventName, listener) {
        const temp = (...args) => {
            listener(...args);
            this.off(eventName, temp);
        };
        this.on(eventName, temp);
    }
}

// make it a module perfect for destructuring:
module.exports = {EventEmitterOld};