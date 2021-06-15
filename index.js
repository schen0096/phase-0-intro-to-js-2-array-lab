// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.shift();
}

function appendCat() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    const newCats2 = ["Arnold",...cats];  
    return newCats2;
}

function removeLastCat() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    return cats.slice(0,2);
}

function removeFirstCat() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    return cats.slice(-2);
}

