const app = "I don't do much."

var kittens=["Milo","Otis","Garfield"]
function destructivelyAppendKitten(kittens, Ralph){
  kittens.push('Ralph');
  return (kittens);
}

var kittens=["Milo","Otis","Garfield"]
function destructivelyAppendKitten(kittens, Ralph){
  kittens.unshift('Ralph');
  return (kittens);
}

var kittens=["Milo","Otis","Garfield"]
function destructivelyRemoveLastKitten(kittens){
  kittens.pop();
  return (kittens);
}

var kittens=["Milo","Otis","Garfield"]
function destructivelyRemoveFirstKitten(kittens){
  
}