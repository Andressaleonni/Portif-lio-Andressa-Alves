function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle("light");


    const jpg = document.querySelector("#profile img");


    if(html.classList.contains("light")){
        jpg.setAttribute("src","../jpg/eu2.jpg");
    }else {
        jpg.setAttribute("src","../jpg/Eu.jpg");
    }
}