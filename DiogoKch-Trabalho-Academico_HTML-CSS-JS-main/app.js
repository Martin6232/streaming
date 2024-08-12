const setas = document.querySelectorAll(".seta");
const listaAnimes = document.querySelectorAll(".lista_anime")

setas.forEach((seta,i)=>{
    const itemNumero = listaAnimes[i].querySelectorAll("img").length;
    let clickCounter = 0
    seta.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 344);
        clickCounter++;
        if(itemNumero -(5 + clickCounter) + (5 - ratio) >= 0) {
        listaAnimes[i].style.transform = `translateX(${
            listaAnimes[i].computedStyleMap().get("transform")[0].x.value - 374
        }px)`;
        } else {
            listaAnimes[i].style.transform = "translateX(0)";
            clickCounter = 0
        }
    });
    
    console.log(Math.floor(window.innerWidth / 344));
});