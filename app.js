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


//part 4
const btnEl = document.querySelector('#bg-color-btn');
const bodyEl = document.querySelector('body');
function handleBackgroundChange(){
    bodyEl.style.backgroundColor='lavender';
}
btnEl.addEventListener('click',(handleBackgroundChange));



//part 5
const roseElement = document.querySelector('#rose-latte');
const pistachioElement = document.querySelector('#croissant');
const lotusElement = document.querySelector('#cheesecake');
const roseButton = document.getElementById('0')
const pistachioButton = document.getElementById('1');
const lotusButton = document.getElementById('2');

roseElement.textContent='available';
pistachioElement.textContent='sold out';
lotusElement.textContent='available';

roseButton.addEventListener('click',() => {
    roseElement.textContent = 'sold out';

})
pistachioButton.addEventListener('click',() => {
     pistachioElement.textContent = 'sold out';

})
lotusButton.addEventListener('click',() => {
     lotusElement.textContent = 'sold out';

})

// const specialtyElements = document.querySelectorAll('.specialty-status');
// const statuses = ['Available','Sold out','Available'];

// statuses.forEach( (stat,index) => {
//     console.log(stat,index)
//     specialtyElements[index].textContent = stat;

// })




