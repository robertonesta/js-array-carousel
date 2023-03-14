/*rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.*/

const imgEl = document.getElementById("carousel");
console.log(imgEl)

const previous = document.getElementById("prev")
const next = document.getElementById("next")

const carousel = [
    '"./assets/img/01.webp"',
    '"./assets/img/02.webp"',
    '"./assets/img/03.webp"',
    '"./assets/img/04.webp"',
    '"./assets/img/05.webp"'
]

//select the active image

let activeImage = 0;

//for loop

for (i = 0; i < carousel.length; i++) {
    const imgSrc = carousel[i];
    const imgElement = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`;
    console.log(imgElement);

   // InnerHTML
   imgEl.innerHTML += imgElement;
}
//select the slides
const slidesImagesElements = document.querySelectorAll('.slider > .carousel > img')

//eventlistener on the prev button
const prevpic = document.querySelector('.prev')
prevpic.addEventListener('click', function (){
    console.log('foto precedente')

    console.log(slidesImagesElements);
    const currentpic = slidesImagesElements(activeImage)
    console.log(currentpic);
    //remove the active class from the current pic
    currentpic.classList.remove('active')
    //decrement the value of the active image
    activeImage--
    console.log(activeImage)
    const nextImage = slidesImagesElements[activeImage]
    //active class
    console.log(nextImage);
    nextImage.classList.add('active')
})
//eventlistener on the next button
const nextpic = document.querySelector('.next')
nextpic.addEventListener('click', function (){
    console.log('foto successiva')

    console.log(slidesImagesElements);
    const currentpic = slidesImagesElements(activeImage)
    console.log(currentpic);
    //remove the active class from the current pic
    currentpic.classList.remove('active')
    //decrement the value of the active image
    activeImage++
    console.log(activeImage)
    const nextImage = slidesImagesElements[activeImage]
    //active class
    console.log(nextImage);
    nextImage.classList.add('active')
})
