const DOG_IMAGE_URL = "https://dog.ceo/api/breeds/image/random";

function addDog() {
  fetch(DOG_IMAGE_URL).then(function(response) {
    return response.json();
  }).then(function(data) {
    const img = document.createElement("img");
    img.src = data.message;
    img.alt = "a cute dog";

    const dogs = document.querySelector(".dogs");
    dogs.appendChild(img);
  });
}

function init() {
  const addDogButton = document.querySelector(".add-dog")
  addDogButton.addEventListener("click", addDog);
}

init();
