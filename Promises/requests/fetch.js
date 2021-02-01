fetch('https://api-to-call.com/endpoint').then(response => {
  if (response.ok){
    return response.json();
  }
  throw new Error('Request failed!');
  });
  //then() will fire only after the promise status of fetch() has been resolved.
  //The reason we’re testing the ok property of the 
  //response object is that it will be a Boolean value. 
  //If there were no errors response.ok will be true 
  //and then your code will return response.json().

  