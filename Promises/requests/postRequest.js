const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response 
  }
}

//.open() creates a new request and the arguments passed in determine what type of request is being made and where it’s being made to
xhr.open('POST', url);

//.send() will send the request to the server.
xhr.send(data);