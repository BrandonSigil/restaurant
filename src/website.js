
function createLogo() {
    const logoCont = document.createElement('div');
    logoCont.classList.add('logoCont')

    // Creating address text for nav bar
    const address = document.createElement('div')
    address.classList.add('menu-text');
    address.innerHTML = "1003 S 11th St, Tacoma, WA 98405"

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerHTML = 'TERRY\'S <br> DINER';

    // Creating address text for nav bar
    const quote = document.createElement('div')
    quote.classList.add('menu-text');
    quote.innerHTML = "The best you'll find."

    logoCont.append(quote, logo, address)

    return logoCont;
}

function createNav() {
    const nav = document.createElement('nav');


    // Creating nav buttons
    const homeButton = document.createElement('button');
    homeButton.classList.add('button-nav');
    homeButton.setAttribute('id', 'homeBtn')
    homeButton.innerHTML = 'home';

    const menuButton = document.createElement('button');
    menuButton.classList.add('button-nav')
    menuButton.setAttribute('id', 'menuBtn')
    menuButton.innerHTML = 'menu';

    const contactButton = document.createElement('button');
    contactButton.classList.add('button-nav')
    contactButton.setAttribute('id', 'contactBtn')
    contactButton.innerHTML = 'contact';


    nav.append(homeButton, menuButton, contactButton);

    return nav;
}

function loadNav() {
    const main = document.getElementById("website");
    main.append(createLogo(), createNav())
}

export default loadNav;