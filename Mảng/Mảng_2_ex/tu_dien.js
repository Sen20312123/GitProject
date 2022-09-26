// function transcript() {
//     let English = ["apple", "banana", "orange"]
//     let Vietnamses = ["táo", "chuối", "cam"]
//     let string = document.getElementById("string").value;
//     let string_value = string.toLowerCase()
//     let index_eng = 0;
//     let cond = true;
//     let result = "";
//     for (let i = 0; i < English.length; i++) {
//         if (string_value == English[i]) {
//             index_eng = i;
//             for (let j = 0; j < Vietnamses.length; j++) {
//                 if (index_eng == j) {
//                     result = "Result :" + Vietnamses[j];
//                     cond = true;
//                     }
//                 }
//             }
//     if(cond == false){
//         result =  "không tìm ra"
//         }
//     document.getElementById("result").innerHTML = result;
// }
    
// }
function transcript() {
    let English = ["apple", "banana", "orange"]
    let Vietnamses = ["táo", "chuối", "cam"]
    let string = document.getElementById("string").value;
    let string_value = string.toLowerCase()
    let index_eng = 0;
    let result = "";
    for (let i = 0; i < English.length; i++) {
        if (string_value == English[i]) {
            index_eng = i;
            for (let j = 0; j < Vietnamses.length; j++) {
                if (index_eng == j) {
                    result = "Result :" + Vietnamses[j];
                    }
                }
            }
    if(!result){
        result =  "không tìm ra"
        }
    document.getElementById("result").innerHTML = result;
}
    
}