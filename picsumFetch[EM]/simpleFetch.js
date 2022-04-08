console.log("Damn you to hell lil fetch program");

/*
  Cette requete ne demande qu'un film
  Vous avez la possibilité de demander plusieurs films
  Le traitement est alors bien différents 
*/


let urlMultipleImage = "https://picsum.photos/v2/list?page=2&limit=10";



//requete pour obtenir notre json
let request = async () => {
  const response = await fetch(`${urlMultipleImage}`);
  if (response.ok) {
    // Si le statut est entre 200-299
    // Nous récuperons la reponse
    let json = response.json();
    return Promise.resolve(json);
  } else {
    //sinon la reponse est  400 à 500 alors
    return Promise.reject("La requete n'a pas fonctionné");
  }
};

request().then(async (response) => {
  let request = async () => {
    const response = await fetch(`${urlMultipleImage}`);
    if (response.ok) {
      // Si le statut est entre 200-299
      // Nous récuperons la reponse
      let json = response.json();
      return Promise.resolve(json);
    } else {
      //sinon la reponse est  400 à 500 alors
      return Promise.reject("La requete n'a pas fonctionné");
    }
  };
  console.log(response);

  request().then(async (response) => {
  
    var images = response;
    console.log(images)
    //à partir de maintenant nous allons travailler sur notre objet
    images.forEach(image => {
      console.log(image.download_url)
      let url = `https://picsum.photos/id/${image.id}/600/600`;
      let urlUnsplash = image.url
      createImage(image.author,url, urlUnsplash )

      
    });
  });
});

//Création d'une fonction qui crée des élément dans notre page
//New article servira uniquement dans la structure de notre page
let sectionSelector = document.querySelector("section");
let newArticle, newAuthor, newImg, newButton;


function createElements() {
  //Creation des éléments
  newArticle = document.createElement("article");
  newAuthor = document.createElement("h2");
  newImg = document.createElement("img");
  newButton = document.createElement("button");
}

function fillElements(author, imgSrc,urlUnsplash) {
  //nous remplissont ensuite nos éléments
  newAuthor.textContent = author; //Nous mettrons le titre ici
  newImg.src = imgSrc; //nous mettrons la source de l'image ici
  newButton.innerHTML = "Visit";
  newButton.addEventListener ("click", function() {
    window.location.assign(urlUnsplash);
});

}

function appendElements() {
  sectionSelector.append(newArticle);
  newArticle.classList.add("grid-item");
  newArticle.append(newAuthor);
  newArticle.append(newImg);
  newArticle.appendChild(newButton);

}

function createImage(author, imgSrc,urlUnsplash) {
  createElements();
  fillElements(author, imgSrc,urlUnsplash);
  appendElements();
}

