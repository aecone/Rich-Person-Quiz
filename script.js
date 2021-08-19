// Variables
var newMoneyCount = 0;
var oldMoneyCount = 0;
var questionNum = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");
var oldTitle = document.getElementById("old-title");
var newTitle = document.getElementById("new-title");
var oldDescription = document.getElementById("old-description");
var newDescription = document.getElementById("new-description");
var oldBox = document.getElementById("old-box");
var newBox = document.getElementById("new-box");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//Click function
q1a1.addEventListener('click',() => {    
     newMon();
     disableQ1()
     q1a1.classList.add("fade");
});

q1a2.addEventListener('click',() => {    
     newMon();
     disableQ1();  
     q1a2.classList.add("fade");  
}); 

q1a3.addEventListener('click',() => {    
     oldMon();
     disableQ1(); 
     q1a3.classList.add("fade");   
});

q1a4.addEventListener('click',() => {    
     oldMon();
     disableQ1();    
     q1a4.classList.add("fade");
});

q2a1.addEventListener('click',() => {    
     oldMon();
     disableQ2();    
     q2a1.classList.add("fade");
});

q2a2.addEventListener('click',() => {    
     newMon();
     disableQ2(); 
     q2a2.classList.add("fade");   
});

q2a3.addEventListener('click',() => {    
     oldMon();
     disableQ2();  
     q2a3.classList.add("fade");  
});

q2a4.addEventListener('click',() => {    
     newMon();
     disableQ2(); 
     q2a4.classList.add("fade");   
});

q3a1.addEventListener('click',() => {    
     oldMon();
     disableQ3();    
     q3a1.classList.add("fade");
});

q3a2.addEventListener('click',() => {    
     oldMon();
     disableQ3();    
     q3a2.classList.add("fade");
});

q3a3.addEventListener('click',() => {    
     newMon();
     disableQ3(); 
     q3a3.classList.add("fade");   
});

q3a4.addEventListener('click',() => {    
     newMon();
     disableQ3();  
     q3a4.classList.add("fade");  
});

q4a1.addEventListener('click',() => {    
     newMon();
     disableQ4();  
     q4a1.classList.add("fade");  
});

q4a2.addEventListener('click',() => {    
     oldMon();
     disableQ4();    
     q4a2.classList.add("fade");  
});

q4a3.addEventListener('click',() => {    
     newMon();
     disableQ4();    
     q4a3.classList.add("fade");  
});

q4a4.addEventListener('click',() => {    
     oldMon();
     disableQ4();  
     q4a4.classList.add("fade");    
});

q5a1.addEventListener('click',() => {    
     oldMon();
     disableQ5();  
     q5a1.classList.add("fade");  
});

q5a2.addEventListener('click',() => {    
     newMon();
     disableQ5();    
     q5a2.classList.add("fade");  
});

q5a3.addEventListener('click',() => {    
     newMon();
     disableQ5();    
     q5a3.classList.add("fade");  
});

q5a4.addEventListener('click',() => {    
     oldMon();
     disableQ5();  
     q5a4.classList.add("fade");    
});

restart.addEventListener("click", resetEverything);

//functions

function newMon() {
  newMoneyCount += 1;
  questionNum += 1;
  console.log("new money = " + newMoneyCount + " question count = " + questionNum);

  if (questionNum == 5){
    console.log("Done");
    updateResult();
    displayResult(); 
  }
}

function oldMon() {
  oldMoneyCount += 1;
  questionNum += 1;
  console.log("old money = " + oldMoneyCount + " question count = " + questionNum);

  if (questionNum == 5){
    console.log("Done");
    updateResult();
    displayResult(); 
  }
}

function disableQ1() { 
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
 }

function disableQ2() { 
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
 }

function disableQ3() { 
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
 }

 function disableQ4() { 
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
 }

function disableQ5() { 
q5a1.disabled = true;
q5a2.disabled = true;
q5a3.disabled = true;
q5a4.disabled = true;
  }

 function enableBtns() { 
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
 }

 function noFade() { 
  q1a1.classList.remove("fade");
  q1a2.classList.remove("fade");
  q1a3.classList.remove("fade");
  q1a4.classList.remove("fade");
  q2a1.classList.remove("fade");
  q2a2.classList.remove("fade");
  q2a3.classList.remove("fade");
  q2a4.classList.remove("fade");
  q3a1.classList.remove("fade");
  q3a2.classList.remove("fade");
  q3a3.classList.remove("fade");
  q3a4.classList.remove("fade");
  q4a1.classList.remove("fade");
  q4a2.classList.remove("fade");
  q4a3.classList.remove("fade");
  q4a4.classList.remove("fade");
  q5a1.classList.remove("fade");
  q5a2.classList.remove("fade");
  q5a3.classList.remove("fade");
  q5a4.classList.remove("fade");
 }

function updateResult() {
  if (oldMoneyCount >= newMoneyCount) {
    console.log("You would be an old money rich person");
  } else {
    console.log("You would be an new money rich person");
  }
}

function displayResult() {
  if (oldMoneyCount >= newMoneyCount) {
    oldTitle.innerHTML = "You would be an OLD MONEY rich person!";
    oldDescription.innerHTML = "These kind of people are part of a family that accured wealth generations beforehand. The name of the family matters, so its reputation must be maintained well. There is no need to be ostentatious with their spendings since these people already know they are well off; they are mainly quiet about their money. In fact, they would be frugal and invest in long-lasting goods, which allows them to stay rich for a long time.";
    oldBox.style.display = "";
  } else {
    newTitle.innerHTML = "You would be a NEW MONEY rich person!";
    newDescription.innerHTML = "These kind of people have managed to gain wealth recently and are more likely to reveal how rich they are with their luxurious lifestyle. They care more about enjoying their hard-earned money instead of passing it down to their family. Gaining attention from others matters for them and they believe they can just earn more to make up for their huge spendings. YOLO!";
    newBox.style.display= "";
  }
}
function resetEverything() {
  newMoneyCount = 0;
  oldMoneyCount = 0;
  questionNum = 0;
  enableBtns();  
  noFade();
  newTitle.innerHTML="";
  oldTitle.innerHTML="";
  newDescription.innerHTML="";
  oldDescription.innerHTML="";
  oldBox.style.display = "None";
  newBox.style.display = "None"; 
}
