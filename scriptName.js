//made an array of 3 topics, they are topics of pro boxers, celebrities and  fighting arenas
const fightNightArr = [
    ["Mike Tyson",
     "Canelo Alvarez",
     "Floyd Mayweather",
     "Joe Calzaghe",
     "Tyson Fury",
     "Deontay Wilder"],
     
     ["Elton John",
      "Stormzy",
      "Tony Hawk",
      "Madonna",
      "Christian Bale",
      "Boris Johnson"],

      ["John Fury's Backyard!!",
       "The Eiffel Tower",
       "Madison Square Garden",
       "York Hall",
       "Plaza Mexico",
       "Megasport Arena" 
      ]
     ]
     
     //Going to make a function that generates a random number 
const randomNumber = (number) => {
    return Math.floor(Math.random()* number)
    }
  
    // below I am going to make a function that gives a random fighter each time by using the randomNumber() 
const generateFighter = () => {
       const fighter = randomNumber(fightNightArr[0].length)
       const proFighter = fightNightArr[0][fighter]
    return proFighter
   }
//Generating a random celebirty 
  function celebrityStar(){
    const superStar = randomNumber(fightNightArr[1].length)
    const celebrity = fightNightArr[1][superStar]
    return celebrity
   } 
//Generating  a random fighting areana
const randomArena = () => {
    const randomPlace = randomNumber(fightNightArr[2].length)
    const arena = fightNightArr[2][randomPlace]
    return arena
   }
// I am going to make the generating functions to variables to be called in another function

var theFighter = generateFighter()
var theCelebrity = celebrityStar()
var theArena = randomArena()   
// Making a function that returns a sentence including a random fighter, random celebrity and random arena

function fightNight(){
       
    return `News just in, we have ${theFighter} fighting ${theCelebrity} at ${theArena} for an intense 12 round bout`
 
   }
  


  
   console.log(fightNight())