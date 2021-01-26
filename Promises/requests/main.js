// Information to reach API
const url = 'https://api.datamuse.com/words?'
const queryParams = 'rel_rhy='
// 'rel_rhy=' is the start of a parameter for the query string. 
//This parameter will narrow your search to words that rhyme.

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  //inputField.value grabs what is in the inputField and assigns it to the variable wordQuery
  const endpoint = `${url}${queryParams}${wordQuery}`;
  const xhr = new XMLHttpRequest ();
  xhr.responseType = 'json';
  // When data is sent back, it will be in JSON format.
  xhr.onreadystatechange = () => {};

}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
