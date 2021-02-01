fetch('https://api-to-call.com/endpoint').then(response => {
  if (response.ok){
    return response.json();
  }});