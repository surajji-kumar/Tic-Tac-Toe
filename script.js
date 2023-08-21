 {


    console.log("Welcome To My First Game Tic Tac Toe");
let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3");
let gameover = new Audio(" gameover.mp3");
let turnx = "X"
let ingameover =false;
// Funtion to change the turn

const changeTurn =() =>{
    return turnx ==="X"?"0": "X"

}

// funtion to check for a win
const checkWin = ()=>{
    let boxtext =document.getElementsByClassName('boxtext');
        let win = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
        [1,4,7,5,15,90],
        [0,3,6,-5,15,90],
        [2,5,8,15,15,90],    
    ]
    win.forEach(e =>{
        if( (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
   {
    document.querySelector('.info').innerText = boxtext[e[0]].innerText +" "+ "Won"
    ingameover =true
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "30vw"
    document.querySelector('.info').style.color = 'green'
    document.querySelector('.info').style.scale = 1.5
     document.querySelector("#line").style.transform = `translate(${e[3]}vw, ${e[4]}vw)  rotate(${e[5]}deg)`; 
     document.querySelector('#line').style.opacity =1
    
   }
 })
}

// Game Logic
 let boxes = document.getElementsByClassName("box");
 Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click",()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turnx;
           turnx = changeTurn();
            turn.play();
            checkWin();
            if(!ingameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turnx;
             
            }
       }
     })
 })

//  Add onclick listener to reset button
   let reset = document.getElementById('reset')
    reset.addEventListener('click',()=>{
       let boxtexts = document.querySelectorAll('.boxtext');
       Array.from(boxtexts).forEach(element =>{
        element.innerText = ''
    })
    document.querySelector('.info').style.color = ''
    document.querySelector('#line').style.opacity =0
    document.querySelector('.info').style.scale = 1
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0"
        turnx = "X";
        isgameover = false
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turnx;
                
    })


}





// {
// console.log("heee1");


// // asyns methode promise
// var a = new Promise((c,b)=>{
//     return c("helooo");
// })
//  var a1 = a.then(function(data){
//     console.log(data)
//    return new Promise((e,b)=>{
//         return e("heloo2");
//     })
// })
// a1.then(function(data){
//        console.log(data);
// })






// console.log("hee2");
// setTimeout(function(){
//     console.log("fiii3");

// },0)
// console.log("sssss");


// var ans = new Promise((c,b)=>{
     
//    var a = Math.floor(Math.random()*2);

//    if(a<1){
//       console.log("bello");
//    }
//    else{
//     console.log("ffff");
//    }
// })
// ans.then(function(){
//     console.log(c);
// })
// fetch(function(){
//   console.log(b)
// })
// }

