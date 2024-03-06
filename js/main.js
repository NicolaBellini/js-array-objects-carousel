const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

// campi di output dove stampare il template literal
const outputCarusel = document.getElementById("output");
const outputThumb = document.getElementById("thumb_output");
const caruselWrapper = document.querySelector(".my-carousel-container")


// stampo dinamicamente in pagina
images.forEach((image)=>{
    outputCarusel.innerHTML +=`
    <div class="my-carousel-item">
        <img class="img-fluid" src=${image.url} alt="${images.title} picture">
        <div class="item-description px-3">
            <h2>${image.title}</h2>
            <p>${image.description}</p>
            </div>
    </div>
    `
    outputThumb.innerHTML +=`
    <div class="my-thumbnail ">
        <img class="img-fluid" src=${image.url} alt="Thumbnail of Svezia picture" title ="svezia">
    </div>
    `
})

// tutte le immagini e tutte le thumbnails
const imagesElements = document.querySelectorAll(".my-carousel-item")
const thumbElements = document.querySelectorAll(".my-thumbnail")
// contatore
let counterItem = 0
// bottoni
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const stopBtn = document.getElementById("stop-autoplay");
const startBtn = document.getElementById("start-autoplay");

// aggiungo la classe actrive in modo che quando carico la pagina sia visibile la prima immagine e la thumbnail corrispettiva sia accesa
imagesElements[counterItem].classList.add("active")
thumbElements[counterItem].classList.add("active")

// eventlisteners
prevBtn.addEventListener("click", showPrevious)

nextBtn.addEventListener("click", showNext)


//  CLICCANDO SULLE THUMBNAIL //
thumbElements.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        // Rimuovo la classe "active" da tutte le immagini e thumbnail
        imagesElements.forEach(item => item.classList.remove("active"));
        thumbElements.forEach(item => item.classList.remove("active"));

        // Mostra l'immagine e la thumbnail corrispondenti all'indice
        imagesElements[index].classList.add("active");
        thumbElements[index].classList.add("active");

        // Aggiorna il counterItem all'indice corrente
        counterItem = index;
    });
});
// ilbottone stop quando cliccato assume la classe hide e la toglie al bottone start
stopBtn.addEventListener("click",function(){
    stopCarousel()
    stopBtn.classList.add("hide")
    startBtn.classList.remove("hide")
    console.log(isStop,stopBtn);
})

// ilbottone start quando cliccato assume la classe hide e la toglie al bottone stop
startBtn.addEventListener("click",function(){
    startCarousel()
    startBtn.classList.add("hide")
    stopBtn.classList.remove("hide")
})

// flag per controllare se il bottone stop è premuto
let isStop = true

if (stopBtn.classList.contains(".hide")) {
    isStop = false
}

console.log(isStop);

// CAROSELLO AUTOMATICO //
let caruselInterval = ""

// Avvia l'autoplay del carosello
startCarousel();

// gli dò di default la classe hide poichè voglio si veda solo lo stop autoplay
startBtn.classList.add("hide")

// functions //

// Funzione per avviare l'autoplay del carosello
function startCarousel() {
    carouselInterval = setInterval(showNext, 1000);
}

 // Funzione per fermare l'autoplay del carosello
function stopCarousel() {
    clearInterval(carouselInterval);
}
// Aggiungo gli event listener per interrompere/riavviare l'autoplay quando il mouse entra/esce dal carosello
caruselWrapper.addEventListener("mouseenter", stopCarousel);

if(!isStop){
    caruselWrapper.addEventListener("mouseleave", startCarousel);
}




function showNext(){
    imagesElements[counterItem].classList.remove("active");
    
    thumbElements[counterItem].classList.remove("active");   
    counterItem++;
    // se il contatore arriva alla fine dell' array il ontatore diventa 0
    if( counterItem === images.length){
       counterItem = 0
    }
    console.log(thumbElements[counterItem],  imagesElements[counterItem],  imagesElements[counterItem-1]);
    console.log(counterItem);
    imagesElements[counterItem].classList.add("active");
    thumbElements[counterItem].classList.add("active");
 }

 function showPrevious(){
    imagesElements[counterItem].classList.remove("active");
    thumbElements[counterItem].classList.remove("active");   
    counterItem--;
    // se il contatore è inferiore a 0 prendo  l' ultimo elemento dell' array
    if( counterItem === -1){
       counterItem = images.length -1
    }
    console.log(counterItem);
    imagesElements[counterItem].classList.add("active");
    thumbElements[counterItem].classList.add("active");
 }

