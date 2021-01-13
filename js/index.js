document.getElementById("prev-btn").addEventListener("click", () => {
    changeSlides(-1);
});
document.getElementById("next-btn").addEventListener("click", () => {
    changeSlides(1);
});

document.getElementById("slide-one").addEventListener("click", () => {
    slideIndex = 1;
    showSlides(slideIndex)
});
document.getElementById("slide-two").addEventListener("click", () => {
    slideIndex = 2;
    showSlides(slideIndex)
});
document.getElementById("slide-three").addEventListener("click", () => {
    slideIndex = 3;
    showSlides(slideIndex)
});
document.getElementById("slide-four").addEventListener("click", () => {
    slideIndex = 4;
    showSlides(slideIndex)
});

bars = document.getElementsByClassName("bar");
timer = document.getElementsByClassName("overlaytimer");
vid = document.getElementById("vid");


function slidesAnimations() {
    timer[slideIndex-1].style.transition = "width 5s linear";
    timer[slideIndex-1].style.width = "100%";
    if (slideIndex != 2) {
        document.querySelector(".fa-play").style.color = "#141518";
        for (var i = 0; i < bars.length; i++) {
            bars[i].style.backgroundColor = "#14151845";
        }
        bartext = document.getElementsByClassName("bartext");
        for (var i = 0; i < bartext.length; i++) {
            bartext[i].style.color = "#141518";
        }
        timer[slideIndex-1].style.backgroundColor = "#141518"
    }
    else {
        document.querySelector(".fa-play").style.color = "white";
        for (var i = 0; i < bars.length; i++) {
            bars[i].style.backgroundColor = "#ffffff50";
        }
        bartext = document.getElementsByClassName("bartext");
        for (var i = 0; i < bartext.length; i++) {
            bartext[i].style.color = "white";
        }
        timer[slideIndex-1].style.backgroundColor = "white"
    }
    if (slideIndex == 3) {
        vid.currentTime = 0;
        vid.play();
    }
}


function nextSlide() {
    showSlides(slideIndex += 1);
}

function changeSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    for (var i = 0; i < timer.length; i++) {
        timer[i].style.transition = "0s";
        timer[i].style.width = "0%";
    }
    var fivesec = setTimeout(nextSlide,5000);
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
    slidesAnimations();
    //timer fixes with buttons
    document.getElementById("prev-btn").addEventListener("click", () => {
        clearTimeout(fivesec);
    });
    document.getElementById("next-btn").addEventListener("click", () => {
        clearTimeout(fivesec);
    });
    document.getElementById("slide-one").addEventListener("click", () => {
        clearTimeout(fivesec);
    });
    document.getElementById("slide-two").addEventListener("click", () => {
        clearTimeout(fivesec);
    });
    document.getElementById("slide-three").addEventListener("click", () => {
        clearTimeout(fivesec);
    });
    document.getElementById("slide-four").addEventListener("click", () => {
        clearTimeout(fivesec);
    });
}

var slideIndex = 1;
showSlides(slideIndex);
