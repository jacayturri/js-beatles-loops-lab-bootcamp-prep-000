function theBeatlesPlay(musicians, instruments) {
var beatlesInstruments = [];

   for (let i = 0; i < musicians.length; i++){
    beatlesInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return beatlesInstruments;
}

function johnLennonFacts(facts){
var shoutedFacts = [];
let i = 0;

  while (i < facts.length) {
  shoutedFacts.push(facts[i] + "!!!"); i++; 
  } 
return shoutedFacts
}

function ilovetheBeatles(number) {
const ilovetheBeatles = [];

do { 
  ilovetheBeatles.push("I love the Beatles!"); n++;
} while (number < 15); 
return ilovetheBeatles 
}

