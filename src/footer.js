import './style.css';

function footer() {
    const footerDiv = document.createElement('div')
    footerDiv.classList.add('footer')

    const footerContent = document.createElement('p')
    footerContent.innerHTML = 'Open 7 days a week | 6am - 2pm'

    const footerContentRight = document.createElement('p')
    footerContentRight.innerHTML = 'Copyright Brandon 2022'
    footerContentRight.style.textAlign = "right";

    footerDiv.append(footerContent, footerContentRight)

    return footerDiv
}

function loadFooter() {
    console.log('HELLO!')
    const main = document.getElementById("footer");
    main.append(footer());
}

export default loadFooter;