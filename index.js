const app = "I don't do much.";


var kittens=["Milo","Otis","Garfield"];
function destructivelyAppendKitten(Ralph){
  kittens.push(Ralph);
    return (kittens);
}

var kittens=["Milo","Otis","Garfield"];
function destructivelyPrependKitten(name){
  kittens.unshift(name);
    return (kittens);
}

var kittens=["Milo","Otis","Garfield"];
function destructivelyRemoveLastKitten(){
  kittens.pop();
    return kittens;
}

var kittens=["Milo","Otis","Garfield"];
function destructivelyRemoveFirstKitten(kittens){
kittens=kittens.slice(1);
  return (kittens);
}

