// texts
const text0 = document.getElementById("Text0");
const text1 = document.getElementById("Text1");
const text2 = document.getElementById("Text2");
const text3 = document.getElementById("Text3");
const text4 = document.getElementById("Text4");
const text5 = document.getElementById("Text5");
const text6 = document.getElementById("Text6");
const text7 = document.getElementById("Text7");
const text8 = document.getElementById("Text8");
const text9 = document.getElementById("Text9");
const text10 = document.getElementById("Text10");

//divs
const intro = document.getElementById("intro");
const page = document.getElementById("home");

//click
const click = document.getElementById("body");
const move = document.getElementById("homemouvement")

// function

click.addEventListener("click", () =>{
    if (text1.style.display === "flex"){
        text1.style.display = "none";
        text0.style.display = "none";
        text2.style.display = "flex";
        text10.style.display = "flex";
        return null;
    }
    if (text2.style.display === "flex"){
        text2.style.display = "none";
        text3.style.display = "flex";
        return null;
    }
    if (text3.style.display === "flex"){
        text3.style.display = "none";
        text4.style.display = "flex";
        return null;
    }
    if (text4.style.display === "flex"){
        text4.style.display = "none";
        text5.style.display = "flex";
        return null;
    }
    if (text5.style.display === "flex"){
        text5.style.display = "none";
        text6.style.display = "flex";
        return null;
    }
    if (text6.style.display === "flex"){
        text6.style.display = "none";
        text7.style.display = "flex";
        return null;
    }
    if (text7.style.display === "flex"){
        text7.style.display = "none";
        text8.style.display = "flex";
        return null;
    }
    if (text8.style.display === "flex"){
        text8.style.display = "none";
        text9.style.display = "flex";
        return null;
    }
    if (text9.style.display === "flex"){
        text9.style.display = "none";
        intro.style.display = "none";
        page.style.display = "flex";
        move.style.display = "flex";
        return null;
    }

})