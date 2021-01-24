import axios from 'axios';

const articleURL = 'https://lambda-times-api.herokuapp.com/articles'

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const card = document.createElement('div');
  card.classList.add('card');

  //making a card for each article
  for(let i = 0; i < article.length; i++){
    // setting consts
    const headline = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorPhoto = document.createElement('img');
    const authorName = document.createElement('span');

    //headline
    headline.classList.add('headline');
    headline.textContent = article[i].headline;
    card.appendChild(headline);

    //author container
    authorContainer.classList.add('author');
    card.appendChild(authorContainer);

    //image container
    imgContainer.classList.add('img-container');
    authorContainer.appendChild(imgContainer);

    //author photo
    authorPhoto.src = article[i].authorPhoto;
    imgContainer.appendChild(authorPhoto);

    //author name
    authorName.textContent = `By ${article[i].authorName}`;
    authorContainer.appendChild(authorName);

    //event listener for headlines
      headline.addEventListener('click', () =>{
        console.log(headline)
      })
  }

  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(articleURL)
  .then(res=>{
    console.log("success")
    const articleArray = res.data;

    //grabbing arrays from res data
    const bootStrap = Array.from(articleArray.articles.bootstrap);
    const javaScript = Array.from(articleArray.articles.javascript);
    const jQuery = Array.from(articleArray.articles.jquery);
    const node = Array.from(articleArray.articles.node);
    const technology = Array.from(articleArray.articles.technology);

    // appending children
    const parent =  document.querySelector(selector);
    parent.appendChild(Card(javaScript));
    parent.appendChild(Card(jQuery));
    parent.appendChild(Card(node));
    parent.appendChild(Card(technology));
    parent.appendChild(Card(bootStrap));

  })
  .catch(err=>{
    console.log(err)
  })
}

export { Card, cardAppender }
