
import './style.css';
import loadMenu from "./foodMenu";
import loadHome from "./home";
import loadNav from "./website";
import loadFooter from "./footer";
import loadContact from './contact';


function setPage() {

    const $content = document.getElementById("content")

    loadNav();
    loadFooter(); 
    loadHome();

    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn')
    const contactBtn = document.getElementById('contactBtn')

    homeBtn.onclick = function(){loadHome()};
    menuBtn.onclick = function(){loadMenu()};
    contactBtn.onclick = function(){loadContact()};
}


setPage();

