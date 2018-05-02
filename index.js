const app = "I don't do much."


var kittens=["Milo","Otis","Garfield"]
function destructivelyAppendKitten(Ralph){
  kittens.push(Ralph);
    return (kittens);
}

var kittens=["Milo","Otis","Garfield"]
function destructivelyPrependKitten(Bob){
  kittens.unshift(Bob);
    return (kittens);
}

var kittens=["Milo","Otis","Garfield"]
function destructivelyRemoveLastKitten(kittens){
  kittens=kittens.slice(1);
    return (kittens);
}

var kittens=["Milo","Otis","Garfield"]
function destructivelyRemoveFirstKitten(kittens){
kittens=kittens.slice(1);
  return (kittens);
}

