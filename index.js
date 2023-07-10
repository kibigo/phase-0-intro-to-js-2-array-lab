const cats = ["Milo", "Otis", "Garfield"]

function  destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const newarray = [...cats,name]
    return newarray
}

function prependCat(name){
    const newarrayy =[name,...cats]
    return newarrayy
}
function removeLastCat(){
    const newarrayy = cats.slice(0, cats.length -1)
    return newarrayy
}
function removeFirstCat(){
    const newarrayy = cats.slice(1)
    return newarrayy
}