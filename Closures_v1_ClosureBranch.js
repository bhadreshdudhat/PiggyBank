// can write function inside the function
//  inner functions can access outer function's variable in shared fashion

function f1(){
    var i=0;// only accesible to inner functions (f2 and f3)
    //var i=0   and not just   i=0;
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

f1();console.log("------Closure 2 ------");
var h1=f1.f2;
var h2=f1.f3;

f1();console.log("------Closure 3 ------");
var j1=f1.f2;
var j2=f1.f3;


g1();g1();g1();console.log("------");
h1();h1();h1();console.log("------");
j1();j1();j1();console.log("------");

g1();g1();g2();console.log("------");
h1();h1();h2();console.log("------");
j1();j1();j2();console.log("------");
