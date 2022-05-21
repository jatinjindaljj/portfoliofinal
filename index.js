



window.addEventListener("scroll",()=>{
    console.log(window.pageYOffset);
    if(window.pageYOffset>20){
        document.getElementById("header").style.boxShadow="0 0 0.625rem black";
    }else{
        document.getElementById("header").style.boxShadow="none";

    }
})