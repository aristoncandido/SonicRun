
let personagem = document.querySelector("#personagem");
let quadrado = document.querySelector('#quadrado');
let sprite = document.querySelector("#sprite");
let game = document.querySelector('#game');
let inimigo = document.querySelector('#shadow');
let score= document.querySelector('h1');

let pontuar = 0;


var  x = 10 ;
let y = 10 ;
var vel = 10;






document.addEventListener('keydown', function (e) {

   var tec = e.keyCode;

   setInterval(function(){
      checkCollision(sprite,inimigo)
   },50)
   
   
 
 

   if (tec == 32) {
      pular();
 

   }

   else if(tec == 39){
       
      Direita();
      

   }
   else if(tec == 37){

       Esquerda();
      
   }




})





function pular() {


   if (personagem.classList != 'animar') {
      personagem.classList.add('animar')
   } // caso não tenha uma classe chamada Animar, ele vai adicionar!


   sprite.src = './Imgs/sonicball.gif';




   setTimeout(function () {

      personagem.classList.remove('animar');

      sprite.src = './Imgs/sonic-sonic-the-hedgehog.gif';

     
         if (checkCollision(sprite,inimigo)) {
          
         }
         ponto();
     



   }, 300)






}

function colidir() {
        
 
   location.href ='GameOver.html'


}

function Direita() {
 
   
   x = x+10;

   personagem.style.left = x + "px";
  
   
   if (checkCollision(sprite,inimigo)) {
          
   }
   ponto();

   



  

}

function Esquerda() {
 
   
   x = x-10;

   personagem.style.left = x + "px";

   
   if (checkCollision(sprite,inimigo)) {
          
   }
   ponto();






  

}

function ponto(){
   
    pontuar++;
    score.innerHTML = "SCORE:" + pontuar; 

 
}

function checkCollision(obj1, obj2) {
   var rect1 = obj1.getBoundingClientRect();
   var rect2 = obj2.getBoundingClientRect();
 
   if (rect1.left < rect2.left + rect2.width &&
     rect1.left + rect1.width > rect2.left &&
     rect1.top < rect2.top + rect2.height &&
     rect1.height + rect1.top > rect2.top) {


      colidir()



   } else{
      
   
   }

 }