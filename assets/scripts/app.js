let currentResult=0
let logResult =[];
function getDescription(temporal,operator){
    return `${temporal} ${operator} ${getUserInput()}`
}
function calculate(type){
    let temporal = currentResult;
   if (type!="ADD" &&
    type!="SUBTRACTION"&&
     type!="MULTIPLY"&&
      type!="DIVIDE") {  
   return;
}
let operator;

if (type=="ADD") {
    currentResult+=getUserInput();
    operator="+";
}
else if (type=="SUBTRACTION") {
    currentResult-=getUserInput();
    operator="-";
}
else if (type=="multiply") {
    currentResult*=getUserInput();
    operator="*";
}
else if (type=="DIVIDE") {
    currentResult/=getUserInput();
    operator="/";
}
const calDescription = getDescription(temporal,operator);
writelog(currentResult,calDescription);
outputResult(currentResult,calDescription);
}
function getUserInput(){
    return parseInt(userInput.value);
}
function writelog(currentResult,calDescription){
    let resultObj={
        result:currentResult,
        description:calDescription,
    };
    logResult.push(resultObj);
    console.log(logResult);
}
function add(){
    calculate("ADD");
}
addBtn.addEventListener("click" ,add);

function subtraction(){
    calculate("SUBTRACTION")
}
subtractBtn.addEventListener("click",subtraction);

function multiply(){
    calculate("MULTIPLY")
}
multiplyBtn.addEventListener("click",multiply);
function divide(){
    calculate("DIVIDE")
}
divideBtn.addEventListener("click",divide);



