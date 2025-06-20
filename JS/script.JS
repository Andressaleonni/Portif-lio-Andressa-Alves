function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle("light");


    const jpg = document.querySelector("#profile jpg");


    if(html.classList.contains("light")){
        jpg.setAttribute("src","./avatar2.jpg");
    }else {
        jpg.setAttribute("src","./avatar1.jfif");
    }
}