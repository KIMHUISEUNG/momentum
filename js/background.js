const images = ["food.jpg", "room.jpg", "tea.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("myBackground");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
