async function fetchGhibli(){
    return fetch("https://ghibliapi.herokuapp.com/films")
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  function printData(data){
    let img = document.querySelector("img");
    let widthimg = img.offsetWidth;
    img.setAttribute("style", `height : ${widthimg}px`);
    let title = document.querySelector("h1");
    img.setAttribute("src", data.image)
    title.textContent = data.original_title;
    let titleR = document.querySelector("h3");
    titleR.textContent = data.original_title_romanised;
    let description = document.querySelector("p");
    description.textContent = data.description;
  }
  
    async function main(){
    let img = document.querySelector("img");
    let txt = document.querySelector(".txt");
    let totoro = await fetchGhibli();
    console.log(totoro);
    let controller = 0;
    let buttons = document.querySelectorAll(".fas");
    printData(totoro[controller]);
    buttons[0].addEventListener("click", () => {
        img.classList.remove("animationIn");
        img.classList.add("animationOut");
        txt.classList.remove("animationIn");
        txt.classList.add("animationOut");
        setTimeout(() => {
            if(controller > 0){
                controller--;
                printData(totoro[controller]);
            }
            if(controller == 0){
                controller = totoro.length - 1;
                printData(totoro[controller]);
            }
        }, 500);
        setTimeout(() => {
            img.classList.remove("animationOut");
            img.classList.add("animationIn");
            txt.classList.remove("animationOut");
            txt.classList.add("animationIn");
        }, 500);
    })
    buttons[1].addEventListener("click", () => {
        img.classList.remove("animationIn");
        img.classList.add("animationOut");
        txt.classList.remove("animationIn");
        txt.classList.add("animationOut");
        setTimeout(() => {
            if(controller < totoro.length - 1){
                controller++;
                printData(totoro[controller]);
            }
            if(controller == totoro.length - 1){
                controller = 0;
                printData(totoro[controller]);
            }
        }, 500);
        setTimeout(() => {
            img.classList.remove("animationOut");
            img.classList.add("animationIn");
            txt.classList.remove("animationOut");
            txt.classList.add("animationIn");
        }, 500);
    });  
  }
  
  main();