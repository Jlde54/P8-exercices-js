const myBtn = document.querySelector("#myButton");
myBtn.addEventListener("click", () => {
    const myMsg = document.querySelector("#myMsg");
    myMsg.textContent = "Bonjour, vous avez cliqué sur le bouton !";
});