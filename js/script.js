//-------------------------hamburger Button----------------------//
function toggleMenu(){
	document.querySelector(".navlinks").classList.toggle("open");
    document.querySelector(".hamburgerbttn").classList.toggle("open")
}

const x  = document.querySelector(".hamburgerbttn")
    x.onclick = toggleMenu;


//----------------setting date------------------------------------//
let today = new Date();
    // console.log(`today is ${today}`)
let year = today.getFullYear();
    // console.log(year)

const lastmod = document.querySelector("#lastmod")
    lastmod.textContent = `Last updated at ${document.lastModified}`;

    document.querySelector("#thisyear").innerHTML= year;
    console.log(year)

//-----------------------------alert subscribe-------------------------//
function thankyou(){
    alert("Thank you for subscribing to our newsletters")
}