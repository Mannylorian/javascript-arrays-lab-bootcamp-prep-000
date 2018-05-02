const app = "I don't do much."

var kittens=["Milo","Otis","Garfield"]
function destructivelyAppendKitten(kittens, Ralph){
  kittens.unshift('Ralph');
    return (kittens);
}

var kittens=["Milo","Otis","Garfield"]
function destructivelyPrependKitten(kittens, Bob){
  kittens.unshift('Bob');
    return (kittens);
}

var kittens=["Milo","Otis","Garfield"]
function destructivelyRemoveLastKitten(kittens){
  kittens.pop(kittens);
    return (kittens);
}

var kittens=["Milo","Otis","Garfield"]
function destructivelyRemoveFirstKitten(kittens){
kittens.shift(kittens);
  return (kittens);
}