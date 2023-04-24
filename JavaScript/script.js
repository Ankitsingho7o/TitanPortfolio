let words= document.getElementsByClassName("fullpage");
let body= document.querySelector("body");

setTimeout(function(){
    words[0].style.transform="translateY(-100%)";
     words[0].style.borderRadius="0 0 50% 50%"
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
            if(value<=536){
            text[0].style.marginLeft = value*1.1 + 'px';}
            
        })

        $(function(){
            $(".toggleMenu").on("click",function(){
                if($(".nav1").hasClass("active")){
                $(".nav1").removeClass("active");
                $(this).find("a").html("<i class='fa-solid fa-bars fa-2xl'></i>");
            } else{
                   $(".nav1").addClass("active");
                    $(this).find("a").html("<i class='fa-solid fa-xmark fa-2xl'></i>");
            }
});
        });