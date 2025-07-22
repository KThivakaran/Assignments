//var vs let vs const ---- variable scoping 
const browserName="chrome";
function getBrowserName(){
var browserName="firefox";
if(browserName==="Chrome"){
     console.log(browserName);
}else{
    let browserName="ie";
    console.log(browserName);
}
console.log(browserName);
}
getBrowserName();
console.log(browserName);

/* printing  
block Scope 
function scope
global scope  */