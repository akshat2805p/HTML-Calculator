const acbtn = document.getElementById("ac")
const debtn = document.getElementById("de")
const numbtn = document.getElementsByClassName("numbers")
const opbtn = document.getElementsByClassName("operator")
const display = document.getElementsByClassName("display")[0]
const equalsign = document.getElementById("equal")

let beforeoperator;
let afteroperator;
let displaystring = "";
let operation;

function addText(inputstring){
    if (inputstring === '.' &&  displaystring.includes("."))return;

    displaystring += inputstring;
    display.innerHTML=displaystring;
}

function Operation(){
    let result;
    let before = parseFloat(beforeoperator);
    pre_operation();
    let after  = parseFloat(afteroperator);
     
    switch(operation){
        case "+":
            result = before + after;
            break;

            case "-":
            result = before - after;
            break;

            case "x":
            result = before * after;
            break;

            case "/":
            result = before / after;
            break;
  
    }
    beforeoperator = "";
    operation = undefined;
    afteroperator = "";
    displaystring = "";
    return result;
}

for( let i=0 ; i<(numbtn.length) ; i++ ){
    numbtn[i].addEventListener('click', () =>{
        addText(numbtn[i].value);
    })

}

for(let j=0 ; j<(opbtn.length); j++){
    opbtn[j].addEventListener('click' ,()  =>{
        beforeoperator = display.innerHTML;
        addText(opbtn[j].value);
        operation = opbtn[j].value;
    })
};

debtn.addEventListener('click', () => {
    if(operation === undefined){
        beforeoperator = beforeoperator.slice(0,-1);
    }
    displaystring = displaystring.slice(0, -1);
    addText("");
})

acbtn.addEventListener('click', () =>{
    operation = undefined;
    beforeoperator ="";
    afteroperator ="";
    displaystring = "";
    addText("");
})

equalsign.addEventListener('click', () =>{
    if(operation !== undefined){
        addText(Operation().toString());
    }
})

function pre_operation(){
    let next;
    let operators = ['+','-','x','/']
    
    for (let a=0 ; a<4 ; a++) {
        if(displaystring.includes(operators[a])){
            next = displaystring.toString().split(operators[a]);
          
            afteroperator = next[1];
            
            break;
        }
    } 
}

  
