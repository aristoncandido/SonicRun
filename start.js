let btn = document.querySelector("#start");



btn.addEventListener('click',reload);



function reload(e){
 
     e.preventDeafult;
     location.replace('index.html');


}