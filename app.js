console.log('Cozy Cafe JavaScript is connected!');

//part 1 
const mainTitleEl = document.querySelector('#main-title');
console.log(mainTitleEl.textContent);
mainTitleEl.textContent = "Welcome to the cozy cafe";


//part 2
const highlightTitleEls = document.querySelectorAll('.highlight-title');
highlightTitleEls.forEach(element => {
    console.log(element.textContent);
    element.style.fontStyle = 'italic';
    
});
const paragraphEl = document.querySelector('#quote-of-the-day');
paragraphEl.textContent = "A cup of coffee never hurt anyone";
paragraphEl.classList.add("featured");


//part 3
const imageEl = document.querySelector('#main-photo');
console.log(imageEl.getAttribute("src")) ;
imageEl.setAttribute("src","./assets/berry-cake.jpg");
imageEl.setAttribute("alt","A berry cake served at the cafe");


