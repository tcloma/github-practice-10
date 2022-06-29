const centerText = document.querySelector("#center-text")
const pageBody = document.querySelector("#page-body")

centerText.addEventListener('click', () => {
    centerText.style.color = 'white';
    
    let text = prompt("Say something funny");
    centerText.textContent =`${text} isn't that funny ngl`
    centerText.style.fontSize = "70px";
})