fetch('https://api-to-call.com/endpoint').then(response => {
  if (response.ok){
    return response.json();
  }});
  //then() will fire only after the promise status of fetch() has been resolved.