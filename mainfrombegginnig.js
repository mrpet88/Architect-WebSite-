loadBehaviour();

var imgArray = [
    'example01.jpg',
    'example02.jpg',
    'example03.jpg',
    ],
    curIndex = 0;
imgDuration = 7500;

var p1 = document.createElement('p');
p1.classList.add('small-paragraph');
p1.innerHTML = "Describe the First Page."
document.getElementById("pB").appendChild(p1);
var a1 = document.createElement('a');
a1.classList.add("align-button")
document.getElementById("pB").appendChild(a1);
var button1 = document.createElement('button');
button1.setAttribute("type", "button");
button1.classList.add("btn");
button1.innerHTML = "First Page Link"
a1.appendChild(button1);

var p2 = document.createElement('p');
p2.classList.add('small-paragraph');
p2.innerHTML = "Describe the Second Page."
document.getElementById("pB").appendChild(p2);
var a2 = document.createElement('a');
a2.classList.add("align-button")
document.getElementById("pB").appendChild(a2);
var button2 = document.createElement('button');
button2.setAttribute("type", "button");
button2.classList.add("btn");
button2.innerHTML = "Second Page Link"
a2.appendChild(button2);

var p3 = document.createElement('p');
p3.classList.add('small-paragraph');
p3.innerHTML = "Describe the Third Page."
document.getElementById("pB").appendChild(p3);
var a3 = document.createElement('a');
a3.classList.add("align-button")
document.getElementById("pB").appendChild(a3);
var button3 = document.createElement('button');
button3.setAttribute("type", "button");
button3.classList.add("btn");
button3.innerHTML = "Third Page Link"
a3.appendChild(button3);

var paraArray = [p1, p2, p3]
var aArray = [a1, a2, a3]

function slideShow() {

    document.getElementById('slider').className += "fadeOut";
    document.getElementById('pB').className += "fadeOut";
    setTimeout(function () {
        document.getElementById('slider').src = imgArray[curIndex];
        document.getElementById('pB').src = paraArray[curIndex];
        document.getElementById('slider').className = "";
        document.getElementById('pB').className = "";

        curIndex++;
        if ((paraArray.indexOf(p1) == [curIndex] - 1)) {
            p1.className = "fadeOut"
            p2.className = "none"
            p3.className = "none"
            a1.className = "fadeOut"
            a2.className = "none"
            a3.className = "none"

        } else if ((paraArray.indexOf(p2) == [curIndex] - 1)) {
            p2.className = "fadeOut"
            p1.className = "none"
            p3.className = "none"
            a2.className = "fadeOut"
            a1.className = "none"
            a3.className = "none"
        } else if ((paraArray.indexOf(p3) == [curIndex] - 1)) {

            p1.className = "none"
            p2.className = "none"
            p3.className = "fadeOut"
            a3.className = "fadeOut"
            a1.className = "none"
            a2.className = "none"
        }
    }, 1500);
    if ((curIndex == imgArray.length) && (curIndex == paraArray.length)) {
        curIndex = 0;
    }
    setTimeout(slideShow, imgDuration);
}
slideShow();

function loadBehaviour() {
    $(window).on('load', function () {
        console.log($(window).width())


        if ($(window).width() > 800) {
         
            $('.prev').addClass("none");
            $('.next').addClass("none");
            $('.row').removeClass('slideshow-container');
            $('.first-box').removeClass('mySlides');
            $('.second-box').removeClass('mySlides');
            $('.third-box').removeClass('mySlides');
        } else {
            console.log($(window).width())
            $('.prev').removeClass("none");
            $('.next').removeClass("none");
            $('.first-box').addClass('mySlides');
            $('.second-box').addClass('mySlides');
            $('.third-box').addClass('mySlides');
            $('.row').addClass('slideshow-container');
        }
    })
}
resizeFunction()
var slideIndex = 1;

function resizeFunction() {
    $(window).on('resize', function () {
        if ($(window).width() > 800) {
            $('.prev').addClass("none");
            $('.next').addClass("none");
            $('.row').removeClass('slideshow-container');


            $('.first-box').removeClass('mySlides');
            $('.second-box').removeClass('mySlides');
            $('.third-box').removeClass('mySlides');

        } else {
            console.log($(window).width())
            $('.prev').removeClass("none");
            $('.next').removeClass("none");
            $('.first-box').addClass('mySlides');
            $('.second-box').addClass('mySlides');
            $('.third-box').addClass('mySlides');
            $('.row').addClass('slideshow-container');
            showSlides(slideIndex);

        }
    })
}




//if($(window).width()<800){
//}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}
