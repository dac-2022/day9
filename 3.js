function getData() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  let http = new XMLHttpRequest();

  // Registering the handler
  http.onload = function () {
    const list = JSON.parse(http.responseText);

    let ref = document.querySelector("#output");
    for (let item of list) {
      let newValue = `<p class="post">${item.body}</p>`;
      ref.innerHTML = newValue + ref.innerHTML;
    }
  };

  // Sending the request
  http.open("GET", url, true);
  http.send();
}
