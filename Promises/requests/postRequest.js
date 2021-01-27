const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});
// JSON.stringify() will convert a value to a JSON string. 
// By converting the value to a string, we can then send the data to a server

xhr.responseType = 'json';

//.onreadystatechange will contain the event handler that will be called when xhr‘s state changes.
xhr.onreadystatechange = () => {}
