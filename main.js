const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2022-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2020-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container = document.getElementById('container');
console.log(posts, posts.length);

for (i = 0; i < posts.length; i++){
    const post = document.createElement('div');
    post.classList.add('post');
    console.log(posts[i].author.name);
    let mesiTrascorsi = calcoloData(posts[i].created);
    
    console.log('mesi trascorsi', mesiTrascorsi);
    post.innerHTML = `
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${posts[i].media} alt="${posts[i].author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author.name}</div>
                        <div class="post-meta__time">${calcoloData(posts[i].created)} mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i].content}</div>
            <div class="post__image">
                <img src=${posts[i].media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href=#"like-counter-${posts[i].id}" data-postid=${posts[i].id}>
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
    `
    container.append(post);
}

const likesPosts = [];
const myButtons = document.querySelectorAll('.like-button');
const likes = document.querySelectorAll('.js-likes-counter');
console.log(likes);
console.log(myButtons, myButtons.length);
let counter = 0;
for (let i = 0; i < myButtons.length; i++){
    myButtons[i].addEventListener('click', function(){
        
        if (!myButtons[i].classList.contains('like-button--liked')){
        myButtons[i].classList.add('like-button--liked');
        likes[i].innerHTML ++
        likesPosts.push(posts[i].id);
        counter ++
        } else {
            myButtons[i].classList.remove('like-button--liked');
            likes[i].innerHTML --;
            counter --;
            likesPosts.splice(counter, 1);
        }
        console.log(likesPosts);
        console.log(counter);
    })
}
calcoloData(posts[0].created)
function calcoloData (day){
    const giornoRiferimento = new Date(day);
    // console.log(giornoRiferimento)
    const dataCorrente = new Date();
    // Calcolo differenza in mesi
    // const differenzaInMesi = (dataCorrente.getFullYear() - giornoRiferimento.getFullYear()) * 12 + (dataCorrente.getMonth())
    const differenzaInMillisecondi = dataCorrente - giornoRiferimento;
    console.log(differenzaInMillisecondi);
    const giorniPassati = Math.floor(differenzaInMillisecondi / (24 * 60 * 60 * 1000));
    console.log(giorniPassati);
    mesiPassati = Math.floor(giorniPassati / 12);
    return mesiPassati
}

