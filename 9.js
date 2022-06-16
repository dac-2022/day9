async function getWeather() {
  const inputRef = document.querySelector("#input1");

  const city = inputRef.value;
  const appid = "7023923dd26a725da995c75b65864de5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`;

  let res = await fetch(url);
  let item = await res.json();

  console.log(item);
  document.querySelector("#output").innerHTML = item.main.temp;
}
