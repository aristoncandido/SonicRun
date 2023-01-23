
let btn = document.querySelector("#reset");



btn.addEventListener('click',reload);



function reload(e){
 
     e.preventDeafult;
     location.replace('index.html');


}