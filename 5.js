function getData() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  let promise = fetch(url);
  promise
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // logic of dom
    });
}
