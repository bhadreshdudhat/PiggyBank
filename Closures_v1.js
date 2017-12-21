// can write function inside the function
//  inner functions can access outer function's variable in shared fashion
function f1(){
    var i=0;

    function f2(){
        i++;
        console.log(i);
    }

    function f3(){
        i--;
        console.log(i);
    }

    f2();f2();f2();
    f3(); f3(); f2();
}

f1();