// https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json


async function populate(){

    const requestUrl = "https://github.com/matteocurir/JSON/blob/main/superheroes.json";

    const request = new Request(requestUrl);    //la parola new request crea un nuovo oggetto che prende da requestUrl

    const response = await fetch(request);      //è asincrona, permette al programma di iniziare un compito lungo e di permettere di usare le funzionalita del programma anche se non ha recuperato tutti i dati   

    const superHeroes = await response.json();

    populateHeader(superHeroes);    
    populateHeroes(superHeroes);    //mette dentro il file di testo tutta la funzione SUPERHEROES

}

function populateHeader(obj){

    //creazione dell h1
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.squadName;   //inserisce all interno dell h1 squadName
    header.appendChild(myH1);   //mette l h1 all interno di header

    //creazione di un paragrafo
    const myPara = document.createElement('p');
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);

    //creazione di un altro paragrafo
    const myBase = document.createElement('p');
    myBase.textContent = `Secret Base: ${obj.secretBase}`;
    header.appendChild(myBase);

}

function populateHeroes(obj){

    const section = document.querySelector('section');
    const heroes = obj.members;

    for(const hero of heroes){

        //crea gli elementi per inserire testo 
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = hero.name;

        myPara1.textContent = `Secret identity: ${hero.secretrIdentity}`;
        myPara2.textContent = `Age: ${hero.age}`;
        myPara3.textContent = "Superpowers:";

        //ciclo tra i super poteri di ogni eroe
        const superPowers = hero.powers;    //referenzia l'array che contiene tanti valori 

        //ciclo for annidato dentro un altro ciclo for
        for(const power of superPowers){

            const listItems = document.createElement('li');

            listItems.textContent = power;

            myList.appendChild(listItems);

        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);

    }

}

//chiamata della funzione princicipale 
populate();