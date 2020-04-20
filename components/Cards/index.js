// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

console.log(axios.get('https://lambda-times-backend.herokuapp.com/articles'));


function createCard() {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const span1 = document.createElement('span');

    card.classList.add('card')
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    const cardsContainer = document.querySelector(".cards-container");

    cardsContainer.appendChild(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    card.appendChild(span1);


    return card;
}

const entryPoint = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        response.data.articles.forEach(element => {
            
        });

    })