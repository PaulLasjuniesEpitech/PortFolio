//Mouvement button
const homeclick = document.getElementById("homemouvement");
const aboutclick = document.getElementById("aboutmouvement");
const projectclick = document.getElementById("projectmouvement");

//Mouvement page
const Move = document.getElementById("MovePage");

//Mouvement directions
const home = document.getElementById("textHome");
const about = document.getElementById("About");
const projects = document.getElementById("Projects");
const contacts = document.getElementById("Contacts");

//Pages
const Home = document.getElementById("dHOME");
const About = document.getElementById("dAbout_me");
const Projects = document.getElementById("dProjects");
const Contacts = document.getElementById("dContacts");
const main = document.getElementById("portfolio")

//liens
const email = document.getElementById("email");

//display mouvement page
homeclick.addEventListener('click', () =>{
    if (Move.style.display === "none"){
    Move.style.display = "flex";
    Home.style.display = "none";
    } else{
    Move.style.display = "none";
    Home.style.display = "flex";

    home.style.display = "none";
    about.style.display = "flex";
    projects.style.display = "flex";
    contacts.style.display = "flex";
    }
});
aboutclick.addEventListener('click', () =>{
    if (Move.style.display === "none"){
    Move.style.display = "flex";
    About.style.display = "none";
    } else{
    Move.style.display = "none";
    About.style.display = "flex";
    }
    home.style.display = "flex";
    about.style.display = "none";
    projects.style.display = "flex";
    contacts.style.display = "flex";
});
projectclick.addEventListener('click', () =>{
    if (Move.style.display === "none"){
    Move.style.display = "flex";
    Projects.style.display = "none";
    } else{
    Move.style.display = "none";
    Projects.style.display = "flex";
    }
    home.style.display = "flex";
    about.style.display = "flex";
    projects.style.display = "none";
    contacts.style.display = "flex";
});

//Mouvement directions
about.addEventListener('click', () =>{
    Move.style.display = "none";
    About.style.display = "flex";

    homeclick.style.display = "none";
    aboutclick.style.display = "flex";
    projectclick.style.display = "none";
});
contacts.addEventListener('click', () =>{
    Move.style.display = "none";
    Contacts.style.display = "flex";
    email.style.display = "flex";

    homeclick.style.display = "none";
    aboutclick.style.display = "none";
    projectclick.style.display = "none";
});
projects.addEventListener('click', () =>{
    Move.style.display = "none";
    Projects.style.display = "flex";

    homeclick.style.display = "none";
    aboutclick.style.display = "none";
    projectclick.style.display = "flex";
});
home.addEventListener('click', () =>{
    Move.style.display = "none";
    Home.style.display = "flex";

    homeclick.style.display = "flex";
    aboutclick.style.display = "none";
    projectclick.style.display = "none";
});