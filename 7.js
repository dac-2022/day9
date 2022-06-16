window.onload = function () {
  getData();
};

async function getData() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  // Async call
  let res = await fetch(url);
  let list = await res.json();

  // iterating the data/list :: dom operation
  for (let item of list) {
    let ref = document.querySelector("#output");

    let newValue = `<p class="post">${item.body}</p>`;
    ref.innerHTML = newValue + ref.innerHTML;
  }
}
