let movies = [
    {
        name: 'Doctor Strange in the Multiverse of Madness',
        des: 'When the Multiverse is unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary.',
        image: 'images/slider 1.png'
    },
    {
        name: '2AM',
        des: 'New to the city, a medical student settles in a hostel. Her life turns upside down when she experiences mysterious happenings, unfolding a horrifying past.',
        image: 'images/slider 2.png'
    },
    {
        name: '9 Hours',
        des: 'Three prisoners, three teams, three banks and nine hours to pull off three impossible heists and return to jail. Can they do it?',
        image: 'images/slider 3.png'
    },
    {
        name: 'Mr & Mrs Chinnathirai',
        des: 'Your favourite celebrity couples put their relationship to test through a series of fun, challenging and hilarious tasks! Whom will you root for this season?',
        image: 'images/slider 4.png'
    },
    {
        name: 'Anupama',
        des: "Despite the many challenges thrown her way, Anupama begins a new chapter of her life post-divorce. Head held always high, what's waiting for her next?",
        image: 'images/slider 5.png'
    }
]

const carousel = document.querySelector('.carousel');
let sliders=[];
let slideIndex=0;

const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }
    // Create DOM Element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // Attaching all the elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // Setting up images
    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    // Setting elements classnames
    slide.className='slider';
    content.className='slider-content';
    h1.className='movie-title';
    p.className='movie-des';

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for (let i=0;i<3;i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 5000);

// Video Cards

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    });
});

// Card Slider

let cardContainers = [...document.querySelectorAll('.card-slider')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let contanerWidth = containerDimensions.width;
    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += contanerWidth-200;
    })
    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= contanerWidth+200;
    })
});