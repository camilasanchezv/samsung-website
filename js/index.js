document.getElementById("prev-btn").addEventListener("click", () => {
    changeSlides(-1);
});
document.getElementById("next-btn").addEventListener("click", () => {
    changeSlides(1);
});
var slideIndex = 1;
    showSlides(slideIndex);
function changeSlides(n) {
    showSlides((slideIndex += n));
 }

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}