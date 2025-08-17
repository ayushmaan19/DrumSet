let totalButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < totalButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInner = this.innerHtml;
    makeSound(buttonInner);
  });
}
document.addEventListener("keypress", (event) => {
  makeSound(event.key);
  console.log(event.key);
  animate(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
  }
}
function animate(keypair) {
  let active = document.querySelector("." + keypair);
  active.classList.add("active");

  setTimeout(function () {
    active.classList.remove("active");
  }, 100);
}
