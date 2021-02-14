const container = document.querySelector(".container");
const galaxies = [
  {
    name: "Andromeda",
    image: "IMAGES/Andromeda.jpg"
  },
  {
    name: "Antennae",
    image: "IMAGES/Antennae.jpg"
  },
  {
    name: "Blackeye",
    image: "IMAGES/Blackeyegalaxy.jpg"
  },
  {
    name: "Cartwheel",
    image: "IMAGES/Cartwheel.jpg"
  },
  {
    name: "Circinus",
    image: "IMAGES/Circinus.png"
  },
  {
    name: "Comet",
    image: "IMAGES/Comet.jpg"
  },
  {
    name: "CR7",
    image: "IMAGES/CR7.jpg"
  },
  {
    name: "Large Web",
    image: "IMAGES/LargeWeb.jpg"
  },
  {
    name: "Messier",
    image: "IMAGES/Messier.jpg"
  }
];
const showGalaxies = () => {
  let output = "";
  galaxies.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Travel Here</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showGalaxies);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}