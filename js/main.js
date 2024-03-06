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

const outputCarusel = document.getElementById("output")
const outputThumb = document.getElementById("thumb_output")
const prevBtn = document.querySelector(".my-previous")
const nextBtn = document.querySelector(".my-next")




images.forEach((image)=>{
    outputCarusel.innerHTML +=`
    <div class="my-carousel-item active">
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


const imagesElements = document.querySelectorAll(".my-carousel-item")
const thumbElements = document.querySelectorAll(".my-thumbnail")
console.log(imagesElements, thumbElements);
let counterItem = 0

nextBtn.addEventListener("click", showNext)

prevBtn.addEventListener("click", showPrevious)

console.log(counterItem);

// questi sono gli elementi dell' oggetto
for(image of images){
    console.log(image.url);
    console.log(image.title);
    console.log(image.description);
}

// functions //

function showNext(){
    imagesElements[counterItem].classList.add("hide");
    thumbElements[counterItem].classList.remove("active");   
    counterItem++;
    // se il contatore arriva alla fine dell' array il ontatore diventa 0
    if( counterItem === images.length){
       counterItem = 0
    }
    imagesElements[counterItem].classList.remove("hide");
    thumbElements[counterItem].classList.add("active");
 }

 function showPrevious(){
    imagesElements[counterItem].classList.add("hide");
    thumbElements[counterItem].classList.remove("active");   
    counterItem--;
    // se il contatore è inferiore a 0 prendo  l' ultimo elemento dell' array
    if( counterItem === -1){
       counterItem = images.length -1
    }
    imagesElements[counterItem].classList.remove("hide");
    thumbElements[counterItem].classList.add("active");
 }
 