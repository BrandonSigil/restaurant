import breffast from './imgs/breffast.jpg';


function content() {
    const body = document.createElement('div');
    body.classList.add('heroCont')


    const bodyCopyCont = document.createElement('div');
    const bodyHeader = document.createElement('h1');
    bodyCopyCont.classList.add('bodyCopy');

 
    bodyHeader.innerHTML = 'Contact Us';

    const homePara = document.createElement('p');
    homePara.innerHTML = "1003 S 11th St, Tacoma, WA 98405<br> Terrys1003@gmail.com <br> (360) 775-9834 <br> Terry\'s Diner first opened its doors in October of 2016. We've been hands down the best breakfast place in the Northwest ever since. "


    bodyCopyCont.append(bodyHeader, homePara);
    body.append(bodyCopyCont);

    return body;
}

function loadContact() {
    const main = document.getElementById("content");
    main.textContent = "";
    main.append(content())
    console.log(loadContact)
}

export default loadContact;