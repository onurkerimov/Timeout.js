# Timeout.js

**Timeout.js** is basically a setTimeout() and clearTimeout() in a wrapper, but it's smarter. It lets you group timers and if necessary, terminate their future executions group-wise. See below.

## Usage
### Basics
In the following example, `timeout1` is our group. 

```js
const timeout1 = new Timeout
timeout1.set(() => console.log('foo'),2000)
timeout1.set(() => console.log('bar'),4000)
```
```js
// Output
foo [Time 0:02]
bar [Time 0:04]
```
### Multiple timers
```js
const timeout1 = new Timeout
const timeout2 = new Timeout
timeout1.set(() => console.log('foo'),2000)
timeout2.set(() => console.log('bar'),4000)
```
```js
// Output
foo [Time 0:02]
bar [Time 0:04]
```
### Preventing future executions from the group
```js
const timeout1 = new Timeout
// Note that the following four lines are immediatelly invoked
timeout1.set(() => console.log('foo'),2000)
timeout1.set((t) => t.clear(),3000)
timeout1.set(() => console.log('bar'),4000)
```
```js
// Output
foo [Time 0:02]
//bar won't be executed because of the .clear method is called in the middle line
```
In this example, the ordering could have been the following:
```js
timeout1.set(() => console.log('foo'),2000)
timeout1.set(() => console.log('bar'),4000)
timeout1.set((t) => t.clear(),3000)
```
The console output would be the same.

### Note
These two lines achieve the same functionality.
```js
timeout1.set((t) => t.clear(),3000)
```
```js
timeout1.set(function() { this.clear() },2000)
```


## License

Licensed under the MIT license.