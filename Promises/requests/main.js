// First, we need to create the XMLHttpRequest object using the new operator. Save this object in a const called xhr.

// Note: While the code will work regardless of how you name your variables, it is a common practice to name this object xhr.

const xhr = new XMLHttpRequest();

const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';

//The purpose of this conditional statement checks to see if the request has finished.

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response
    }
    }
  }

  