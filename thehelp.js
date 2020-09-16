


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

// all of these must be able to follow "You are a " in a sentence
var charRace = ["orc", 
    "human", 
    "moutian dwarf",
    "teifling", 
    "wood elf", 
    "high elf", 
    "dark elf", 
    "hill dwarf",
    "Dragonborn"];


document.getElementById("genChar").onclick = function() {generateCharacter()};

function generateCharacter() {
    alert("You are a " +charRace[Math.floor(Math.random() * charRace.length)]+ " who "+ charDisability[Math.floor(Math.random()* charDisability.length)]);
}
