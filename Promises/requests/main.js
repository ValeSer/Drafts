console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');

// changing seconds does not affect the order of messages but just the running time.
// 0 seconds means it runs immediately but yet the last one