const acc = document.getElementsByClassName("accordion");

for(let i = 0 ; i < acc.length ; ++i){
  acc[i].addEventListener("click",function(){

    for(let i = 0 ; i < acc.length ; ++i){
      panels[i].style.display="none";
     }

     for(let i = 0 ; i < acc.length ; ++i){
    acc[i].className = acc[i].className.replace("active","");
     }

    let panel = this.nextElementSibling;
    this.classList.toggle("active");
       if(panel.style.display==="block"){
          panel.style.display ="none";
       }
       else{
          panel.style.display = "block";
       }
  });
}