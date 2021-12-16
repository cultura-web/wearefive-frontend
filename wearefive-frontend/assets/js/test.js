const queryString = window.location.href;
const urlParams = new URLSearchParams(queryString);
console.log(urlParams.get())