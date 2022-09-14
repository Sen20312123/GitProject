function kiem_tra(){
    let weight = document.getElementById("can_nang").value;
    let height = document.getElementById("chieu_cao").value;
    let bmi = weight / ( Math.pow(height, 2) )
    let result ;
       if (bmi < 18)
           result ="Underweight" + "<img src = 'https://i.pinimg.com/originals/3b/97/63/3b97635b6bd4a5bfc436fbd3908f05e0.gif' width='100' height= '100'>";
       else if ( bmi < 25.0)
            result ="Normal" + "<img src ='https://anhdepfree.com/wp-content/uploads/2020/06/hinh-anh-dong-de-thuong.gif' width='100' height='100'>";
            else if ( bmi < 30.0)
                result ="Overweight" + " <img src = 'https://i.pinimg.com/originals/4d/e4/6a/4de46a3463511b953dfcdef5184c669d.gif'width='100' height='100' >";
                 else if( 30.0 < bmi )
                     result ="Obese" + "<img src = 'https://i.pinimg.com/originals/90/04/53/900453ff38c8a88ee55db9b0e08f9f3d.gif' width='100' height='100'>";
                   else
                      result ="Too fat" + "<img src = 'https://i.pinimg.com/originals/73/4d/11/734d11cc677595ce3c3e5e3bba02721f.gif' width='100' height= '100'>";
        document.getElementById("result").innerHTML = "Chỉ số BMI là: " + bmi + ". Bạn " + "<b>"+ result + "</b>";
}