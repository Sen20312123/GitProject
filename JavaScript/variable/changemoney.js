function ChangeMoney(){
    let a = document.getElementById('Amount').value;
    let b = document.getElementById('select_1').value;
    let c = document.getElementById('select_2').value;
    let result;

    if( b == "VND" && c == "USA"){
       result = "Result:" + (a /23000) + "$";
    }else if (b=="USA" && c=="VND") {
       result = "Result:" + (a*23000) + "Đ";
    }else if (b=="VND") {
        result = "Result:" + a + "Đ"
    }else{
       result = "Result:" + a + "$"
    }
     document.getElementById("result").innerHTML= result;
}
