function requestComplement() {
  const complementField = document.querySelector(".complement");

  fetch("/complement")
    .then((response) => { 
      return response.json()
    })
    .then((data) => {
      complementField.innerText = data.complement
    })
}

function init() {
  document
    .querySelector(".complement-requester")
    .addEventListener("click", requestComplement);
}

init();