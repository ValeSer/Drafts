// call the 'https://api.datamuse.com/words' API and log the response to console

const xhr = new XMLHttpRequest();
const url = 'https://api.datamuse.com/words';

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE ){
        console.log(xhr.response);
    }
}
