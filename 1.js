// const getData = () => {}

function getData() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  // AJA X/J=XML XML WAS POPULAR EARLY DAYS :: JSON
  // IT helps to make HTTP Call, programmitcally via JS
  let http = new XMLHttpRequest();

  // will hadnle the response here
  // Register the callback/handler function BEFORE makeing the acutal request.
  http.onload = function () {
    console.log("I GOT THE DATA, WIP");
  };

  // making request now
  http.open("GET", url, true);
  http.send();
}
