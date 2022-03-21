import breffast from './imgs/breffast.jpg';


function content() {
    const body = document.createElement('div');
    body.classList.add('heroCont')

    const myBreffast = new Image();
    myBreffast.src = breffast;
    myBreffast.classList.add('hero');


    const bodyCopyCont = document.createElement('div');
    const bodyHeader = document.createElement('h1');
    bodyCopyCont.classList.add('bodyCopy');

 
    bodyHeader.innerHTML = 'You haven\'t had breakfast until you\'ve had Terry\'s';

    const homePara = document.createElement('p');
    homePara.innerHTML = "At Terry\'s we pride ourselves on being the best gosh-darn breakfast in Tacoma. When you taste a fluffy flaky buttermilk biscuit or dig into a full stack of pancakes you will never be able to return to the old way of diner food. This is diner food elevated."


    bodyCopyCont.append(bodyHeader, homePara);
    body.append(myBreffast, bodyCopyCont);

    return body;
}

function loadHome() {
    const main = document.getElementById("content");
    main.textContent = "";
    main.append(content())
}

export default loadHome;