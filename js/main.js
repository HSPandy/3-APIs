
document.querySelector('button').addEventListener('click', getWaifu)

function getWaifu(){
  const url = `https://api.waifu.pics/sfw/waifu`

  fetch(url).then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.getElementById("waifu").src = data.url;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

