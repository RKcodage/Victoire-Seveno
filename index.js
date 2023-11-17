const slide = [
  "./img/image1.jpeg",
  "./img/image2.jpeg",
  "./img/image3.jpeg",
  "./img/image4.jpeg",
  "./img/image5.jpeg",
  "./img/image6.jpeg",
  "./img/image7.jpeg",
  "./img/image8.jpeg",
  "./img/image9.jpeg",
  "./img/image10.jpeg",
  "./img/image11.jpeg",
  "./img/image12.jpeg",
  "./img/image13.jpeg",
  "./img/image14.jpeg",
  "./img/image15.jpeg",
  "./img/image16.jpeg",
  "./img/image17.jpeg",
  "./img/image18.jpeg",
  "./img/image19.jpeg",
  "./img/image20.jpeg",
  "./img/image21.jpeg",
  "./img/image22.jpeg",
  "./img/image23.jpeg",
  "./img/image24.jpeg",
  "./img/image25.jpeg",
  "./img/image26.jpeg",
  "./img/image27.jpeg",
  "./img/image28.jpeg",
  "./img/image29.jpeg",
  "./img/image30.jpeg",
  "./img/image31.jpeg",
  "./img/image32.jpeg",
  "./img/image33.jpeg",
];

let number = 0;
let intervalId;

function ChangeSlide(sens) {
  number = number + sens;
  if (number > slide.length - 1)
    number = 0; /* conditions pour boucler dans le tableau */
  if (number < 0) number = slide.length - 1;
  document.getElementById("slide").src = slide[number];
}

/* setInterval("ChangeSlide(1)", 2000); */
function startAutoScroll() {
  intervalId = setInterval(function () {
    ChangeSlide(1);
  }, 1800);
}

startAutoScroll();

document.getElementById("slider").addEventListener("mouseover", function () {
  clearInterval(intervalId); // Arrête le défilement automatique lors du survol
});

document.getElementById("slider").addEventListener("mouseout", function () {
  // Redémarre le défilement automatique lorsque la souris quitte le slide
  startAutoScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  // Récupérer le corps de la page
  var body = document.body;

  // Appliquer la classe 'loaded' après un court délai
  setTimeout(function () {
    body.classList.add("loaded");
  }, 800);
});
