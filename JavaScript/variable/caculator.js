function Add () {
    let n1= Number (document.getElementById("num1").value);
    let n2= Number (document.getElementById("num2").value);
    let Result ; 
    Result = "Result Addition :" + (n1 +n2);
        document.getElementById("Result").innerHTML = Result;
}  
function Sub() {
    let n1= Number (document.getElementById("num1").value);
    let n2 =Number (document.getElementById("num2").value);
    let Result ;

    Result = "Result Subtraction :" + (n1 - n2);
        document.getElementById("Result").innerHTML = Result;
}
function Mul() {
    let n1= Number (document.getElementById("num1").value);
    let n2 =Number (document.getElementById("num2").value);
    let Result ; 
    Result = "Result Addition :" + (n1*n2);
        document.getElementById("Result").innerHTML = Result;
}
function Div() {
    let n1= Number (document.getElementById("num1").value);
    let n2 =Number (document.getElementById("num2").value);
    let Result ; 
    Result = "Result Addition :" + (n1/n2);
        document.getElementById("Result").innerHTML = Result;
}