/*
  For at aktivere et kort, tilføj en css class med navnet active
  eks. object.classList.add("active"); . men husk også at fjerne class hvis 
  kortet ikke matcher. .classList.remove("active");
*/

// Step 1. Tilføj click event på alle kort holder elemente <figure>.

flipcard[index].addEventListener("click",(data =>)){
  ScoreElement.innertext = score
}

function reset(){
  for (let index = 0 ; index < flipcard.length;index++)  {
    flipcard[index].classList.remove("active");
  }

  score = 0;
  ScoreElement.innertext = score
  matches = 0;
  confetti.stop()
}

shuffle()

for (let index = 0; < flipcard.length;index++){
  flipcard[index].addEventListener("click", (data) => ){

    if (firstclick ==="") {
      firstclick = data.target;
      data.target.classList.add("active");
    }
 else
console.log(firstclick.children[0].src)
console.log(data.target.children[0].src)
}

if (firstclick.children[0].src === data.target.children[0])
  firstclick ="";
data.target.classList.add("active");
matches +=1;
score += 1;
if (matches == 6){
  confetti.start
}
 else{
firstclick.classList.remove("active");
firstclick ="";
score -=1;
}

ScoreElement.innertext = score

}

function shuffleArray(array) {
  fro (let i = array.length - 1; i > 0; i--) {
    const j = math.floor(Math.random()* (i + 1));
    [array [i]; array[j]] = [array[j]; array[i]];
  }


  function shuffle(){
    let array = memoryPictureUrls
    shuffleArray(array);
    for (let index = 0; index < flipcard.length;index++){
      flipcard[index].children[0].src = array[index]
    }
  }
  
}

shuffle()
for (let index = 0 < flipcard.length; index++){
  flipcard[index].addEventListener("click"(data) => ){



    if (firstclick ===""){
      firstclick = data.target;
      data.target.classList.add("active");
    }
  }
  else {
    console.log(firstclick.children[0].src)
    console.log(data.target.children[0].src)
  }

  if (firstclick.children[0].src === data.target.children[0].src)
}


let flipcard = document.querySelectorAll("figure.card");
let firstclick ="";
let score = 0;
let ScoreElement = document.querySelector("#score")

let matches = 0;





const memoryPictureUrls = 
  "https://picsum.photos/seed/memory_1/300/300",
  "https://picsum.photos/seed/memory_2/300/300",
  "https://picsum.photos/seed/memory_3/300/300",
  "https://picsum.photos/seed/memory_4/300/300",
  "https://picsum.photos/seed/memory_5/300/300",
  "https://picsum.photos/seed/memory_6/300/300",
  "https://picsum.photos/seed/memory_1/300/300",
  "https://picsum.photos/seed/memory_2/300/300",
  "https://picsum.photos/seed/memory_3/300/300",
  "https://picsum.photos/seed/memory_4/300/300",
  "https://picsum.photos/seed/memory_5/300/300",
  "https://picsum.photos/seed/memory_6/300/300"
  

// Step 2. Tilføj check om 2 billeder som er aktive matcher.

// Ekstra opgaver.
// 1. Indbyg en score som give + point ved korret match, og - point ved forkert.
// 2. Indbyg en reset knap så spillet kan genstrate.
// 3. Udskriv billeder i tilfældig rækkefølge.
/*
eks ved at bruge en array:


*/
// 4. Når spillet er forbi, brug confetti.js til at vise confetti på skærmen. Mere info her : https://github.com/abelmoricz/abelmoricz.github.io/tree/9eac02160de7bb57170441a441db96b36e8341d8/confetti.js-master
