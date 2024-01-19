/*Create a business name generator b combining 
Adjectives:Crazy,Amazing,Fire
Shop Name: Engine,Foods,Garments
Another Word: Bros,Limited,Hub*/

let obj1 = {
        1:'Crazy',
        2:'Amazing',
        3:'Fire',
    }

let obj2 = {
    1:'Engine',
    2:'Foods',
    3:'Garments',
}

let obj3 = {
    1: 'Bros',
    2: 'Limited',
    3: 'Hub',
}

let first = Math.floor(Math.random()*3)+1;
let second = Math.floor(Math.random()*3)+1;
let third = Math.floor(Math.random()*3)+1;

console.log(obj1[first] + ' ' + obj2[second] + ' ' + obj3[third]);