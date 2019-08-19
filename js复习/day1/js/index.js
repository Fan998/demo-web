var Input1 = parseInt(prompt("请输入第一个数字"));
var Input2 = parseInt(prompt("请输入第二是数字"));
var Input3 = parseInt(prompt("请输入第三是数字"));

// if(!isNaN(Input1) && !isNaN(Input2) && !isNaN(Input3)){
//     console.log("前两次相加减去第三个的数是" + (Input1 + Input2 - Input3));
// }else{
//     console.log("不符合条件,要输入数字");
// }

if((isNaN(Input1) && isNaN(Input2) && isNaN(Input3)) === false){
            console.log("前两次相加减去第三个的数是" + (Input1 + Input2 - Input3));
}