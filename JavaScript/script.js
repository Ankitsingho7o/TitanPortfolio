let words= document.getElementsByClassName("fullpage");
let body= document.querySelector("body");

let navButton = document.querySelector(".mobile-navbar-button");
let header= document.querySelector(".header");
let navLinks = document.querySelectorAll(".navLinks")

let cross = document.querySelector(".cross");
let backToTop = document.querySelector(".backToTop");

window.onscroll = function (){
    scrollUp()
}
function scrollUp() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTop.style.opacity = "1";
    } else {
      backToTop.style.opacity = "0";
    }
  }
  backToTop.addEventListener("click", function () {
    document.body.scrollTop = -1;
    document.documentElement.scrollTop = -1;
  })
navButton.addEventListener("click", function() {
header.classList.toggle("active");
    
})

navLinks.forEach(item  =>{
    item.addEventListener("click", ()=>{
    
        header.classList.toggle("active");
        })
})


setTimeout(function(){
    words[0].style.transform="translateY(-100%)"
     if(window.innerWidth<=400){

         words[0].style.borderRadius="0 0 35% 35%"
     }else{
        words[0].style.borderRadius="0 0 50% 50%"
     }
     words[0].style.scale= "1.1"
     body.classlist;
    console.log(body.classList);
    body.classList.remove("intialHeight");
    //  bodyClasslist.remove("intialHeight")
},1600)

let text = document.getElementsByClassName("candid");
// let textParallax=document.querySelector(".candid");
console.log(text);

        window.addEventListener("scroll",function(){
            
            let value = window.scrollY;
            // console.log(value);
            // console.log(window.screen.width);
            // if(value<=536){
            text[0].style.marginLeft = value*1.1 + 'px';
            
        })

