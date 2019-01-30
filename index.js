// add solution here
function theBeatlesPlay(musicians,instruments){
 var variable = []
  for (var i= 0; i< musicians.length; i++) {
    variable.push( musicians[i] + " plays " + instruments[i] )
 }
 return variable
}
function johnLennonFacts(facts) {
  var i = 0
  var lennon = []
   while (i < facts.length) { 
     lennon.push( facts[i] + "!!!")
     i++
     

   }
   return lennon
}
function iLoveTheBeatles(n){
   var beatles = []
  
  do {
    beatles.push('I love the Beatles!')
    n++
  }
    while (n < 15 )
    return beatles
}