// can write function inside the function
//  inner functions can access outer function's variable in shared fashion

function f1(){
   var i=0;// only accesible to inner functions (f2 and f3)
    //-----f1.i=0;//accesible to whole world

    //making function as variable so that it can be accessed from outside the function
    f1.f2=function(){
        i++;
        console.log(i);
    };

    f1.f3=function(){
        i--;
        console.log(i);
    };
}



f1();console.log("------Closure 1 ------");
var g1=f1.f2;
var g2=f1.f3;
g1();g1();g2();

f1();console.log("------Closure 2 ------");
g1();g1();g2();

f1();console.log("------Closure 3 ------");
g1();g1();g2();
