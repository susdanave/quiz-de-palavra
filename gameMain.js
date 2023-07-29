const p1Name = localStorage.getItem("p1Name");
const p2Name = localStorage.getItem("p2Name");
let p1Score = 0;
let p2Score = 0;
let questionCount = 0;
let word;

const input = document.getElementById("input");
const output = document.getElementById("output");

output.style.display = "none";

document.getElementById("p2Name").innerHTML = p2Name + ": ";
document.getElementById("p1Name").innerHTML = p1Name + ": ";


writeScore();

writeQA();

function writeScore() {
    document.getElementById("p1Score").innerHTML = p1Score;
    document.getElementById("p2Score").innerHTML = p2Score;

}

function writeQA(){
    let question, answer;
   if (questionCount % 2 == 0) {
    question = p1Name;
    answer = p2Name;
   } else {
    question = p2Name;
    answer = p1Name;
   }
   document.getElementById("playerQuestion").innerHTML = "Turno de pergunta: "+ question;
   document.getElementById("playerAnswer").innerHTML = "Turno de resposta: "+ answer;
}
function send(){
    const wordInput = document.getElementById("word")
 word = wordInput.value;
  word = word.toUpperCase();
  console.log("Palavra: " + word);
  let wordReplace = word;


  const wordLength = word.length;
  console.log("Length: " + wordLength)

  if (wordLength >= 5) {
    const charIndex = new Set();

    while (charIndex.size < 3) {
        const randomIndex = Math.floor(Math.random() * wordLength)
        charIndex.add(randomIndex)
    }
    console.log(charIndex);
    for (const index of charIndex.values()){
       // console.log("Index: " + index);
      //  const char = word[index];
      //   console.log("Char: " + char);
        wordReplace = replaceAt(wordReplace, index, "_");
        console.log(wordReplace);
    }


    wordReplace = wordReplace.split('').join('');

    const wordDisplay = "<h4 id='wordDisplay' class='display-4'>" + wordReplace + "</h4>";
    const inputAnswer = "<label class='col-form-label'>Resposta: </label>" + 
        "<input id='answer' type='text' class='form-control' placeholder='resposta'>"
    const button = "<button onclick='check()' class='btn btn-warning col-6 mx-auto'>Checar</button>"
    const outputHTML = wordDisplay + inputAnswer + button;

    output.innerHTML = outputHTML;
    output.style.display = "grid";

    wordInput.value = "";
    input.style.display = "none";

}
}

function replaceAt(str, index, replacement) {
let replaced = 
    str.substring(0, index) + 
    replacement + 
    str.substring(index + 1);
return replaced;
}
function check(){
 const answer = document.getElementById("answer").value.toUpperCase();
 console.log(answer);
 if(word === answer) {
    console.log("yay! =]");
    if (questionCount % 2 == 0) {
        p2Score++;
    } else {
        p1Score++;
    }
    writeScore()
 }
 questionCount++;
 writeQA();
 document.getElementById("output").innerHTML = "";

 document.getElementById("input").style.display="flex";
 document.getElementById("enviar").style.display="inline-block"
}
