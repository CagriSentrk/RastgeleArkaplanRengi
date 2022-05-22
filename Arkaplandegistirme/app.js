//  const body=document.querySelector("body");
//  const button=document.querySelector("button");
//  const color=["black","yellow","green","pink","purple","orange"];

//  button.addEventListener("click",changeBackground);

//  function changeBackground(){
//     const rastgeleSayı=Math.floor(Math.random()*color.length)
//      body.style.backgroundColor=color[rastgeleSayı];;

    

//  }

 const button=document.querySelector("button");
  const body=document.querySelector("body");
  const renkler=["black","yellow","blue","green","pink","red"];

 button.addEventListener("click",arkaplan);

function arkaplan(){
  
   const rastgelesayi= Math.floor(Math.random()*renkler.length);
   
  body.style.backgroundColor=renkler[rastgelesayi];

 }













