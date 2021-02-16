fetch("https://l5info.live/info.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("AAAAAAAAAAAA")
  });