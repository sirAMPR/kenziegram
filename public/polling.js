async function getLatest(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

setInterval(() => {
  //   fetch("/poll")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }

  getLatest("/latest", { after: 1523972111977 }).then((data) => {
    console.log(data);
  });
}, 5000);