// add solution here
function theBeatlesPlay (arrMusicians, arrInstruments) {
  var newArray = new Array;
  for (user in arrMusicians) {
    for (inst in arrInstruments){
      newArray.push(`${user} plays ${inst}`);
    }
  }
  return newArray;
}

function johnLennonFacts () {

}

function iLoveTheBeatles () {

}
