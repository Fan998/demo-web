// 第一题
// var a = parseInt(prompt("请输入一个数"));

// if(a % 5 == 0 && a % 6 != 0){
//     alert("这个数能让5整除，但不能让6整除");
// }else if(a % 5 != 0 && a % 6 == 0){
//     alert("这个数能让6整除，不能让5整除");
// }else if(a % 5 == 0 && a % 6 == 0){
//     alert("这个数既可以5整除也可以6整除");
// }else if(a % 5 != 0 && a % 6 != 0){
//     alert("这个数既不能让5整除也不能让6整除");
// }else{
//     alert("不规范");
// }


// 第二题
// var a = parseInt(prompt("请输入一个数"));
// var b = parseInt(prompt("请输入另一个数"));

// if(a % 2 == 0 && b % 2 == 0){
//     alert("两个数奇偶性相同");
// }else if(a % 2 != 0 && b % 2 != 0){
//     alert("两个数奇偶性相同");
// }else{
//     alert("两个数奇偶性不同")
// }

// 第三题
// var a = parseInt(prompt("请输入一个年份"));
// if(a % 100 == 0 && a % 400 ==0){
//     alert(a + "是闰年");
// }else if(a % 100 != 0 && a % 4 !=0){
//     alert(a + "不是闰年");
// }else if(a % 100 != 0 && a % 4 == 0){
//     alert(a + "是闰年");
// }else if(a % 100 == 0 && a % 400 != 0){
//     alert(a + "不是闰年");
// }


//第四题
var a = parseInt(prompt("请输入你工作的时间"))
var b = parseInt(prompt("请输入你的月薪"))

if(a >= 0 && a < 1){
    if(b > 8000){
        alert("年终奖" + (b*1.2));
    }else if(b < 8000){
        alert("年终奖" + (b*1));
    }
}else{
    if(a >= 1 && a < 2){
        if(b < 10000){
            alert("年终奖" + (b*1.5));
        }else if(b > 10000){
            alert("年终奖" + (b*1.7));
        }
    }else{
     if(a >= 2){
         if(b < 12000){
             alert("年终奖" + (b*3));
         }else if(b > 12000){
            alert("年终奖"+ (b*3.2));
         }
     }
    }
}