


// all of these must be able to folllow "who " in a sentence
var charDisability = ["missing left leg", 
"missing right leg",
"missing one eye",
"lost hearing when they were young",
"is mute from an accedent",
"was born with brittle bones",
"sufferes from dislexia",
"has a weak immune system",
"has baaaaad shits(ibs)",
"lost use of both legs",
"has no short term memory"];



document.getElementById("genChar").onclick = function() {generateCharacter()};

function generateCharacter() {
    alert("You are someone who "+ charDisability[Math.floor(Math.random()* charDisability.length)]);
}
