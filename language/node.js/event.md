> Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

> When the EventEmitter object emits an event, all of the functions attached to that specific event are called `synchronously`(in the order in which they were registered). Listener functions can switch to an asynchronous mode of operation using the `setImmediate()` or `process.nextTick()` methods. Any values returned by the called listeners are` ignored `and will be discarded.

>  when an ordinary listener function is called, the standard `this` keyword is intentionally set to reference the EventEmitter instance to which the listener is attached.

```js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
  console.log(a, b, this, this === myEmitter);
  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined } true
});
myEmitter.emit('event', 'a', 'b');
```
`eventEmitter.once()`: 
```
 Once the event is emitted, the listener is unregistered and then called.
```

> When an error occurs within an EventEmitter instance, the typical action is for an 'error' event to be emitted. If an EventEmitter does not have at least one listener registered for the 'error' event, and an 'error' event is emitted, the error is thrown, a stack trace is printed, and the Node.js process exits.

> All EventEmitters emit the event 'newListener' when new listeners are added and 'removeListener' when existing listeners are removed. The fact that the event is triggered before adding the listener has a subtle but important side effect: any additional listeners registered to the same name within the 'newListener' callback will be inserted before the listener that is in the process of being added.

```js
const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');
// Prints:
//   B
//   A
```
more API:
- emitter.listenerCount(eventName)
- emitter.setMaxListeners(n)
- emitter.rawListeners(eventName)
- emitter.removeListener(eventName, listener)#
- emitter.removeAllListeners(`[eventName]`)
- emitter.prependOnceListener(eventName, listener)
- emitter.prependListener(eventName, listener)
- emitter.eventNames()
