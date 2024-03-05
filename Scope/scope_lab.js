//Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
// Block scope 
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

//Global scope 
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);


//Block scope
//console.log(blockVar);
//console.log(blockLet);--  it will give reference error b/c it is block scoped,can't be accessed outside curly brackets
console.log(blockConst);



//scope of variable for function scope
function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped Let";
const functionConst = "I'm a block-scoped const";
}
show();
console.log(funnctionVar); //throws Reference error
console.log(functionLet);  //throws Reference error
console.log(functionConst); //throws Reference error