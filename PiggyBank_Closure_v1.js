//use of CLOSURE
function withdraw(v) {
    if(this.balance>v){
        this.balance=this.balance-v;
        this.lt=-v;
        this.st.push("balance= "+this.balance+"     "+"Transaction Amt= "+(this.lt));
    }
}
function deposit(v) {
    this.balance=this.balance+v;
    this.lt=v;
    this.st.push("balance= "+this.balance+"     "+"Transaction Amt= "+(this.lt));
}
function statement(){
    console.log("----------Statement for Account of " +this.account_holder+" -----------");
    console.log(this.st);
    console.log("---------------------------------------");
}

///// Prototypal Inheritance
var bankOperations= {
    deposit :deposit,
    withdraw : withdraw,
    statement : statement
};


function PiggyBank(account_holder)
{
    var bp={
        account_holder:account_holder,
        balance:0,
        lt:0,
        st : []
    };
    bp.__proto__=bankOperations;

    this.withdraw=function withdraw(v){
        bp.withdraw(v);//internally calling original function which is outside (having this )
    }
    this.deposit=function deposit(v){
        bp.deposit(v);
    }
    this.statement=function statement(){
        bp.statement();
    }
}


var bhadresh_pgb = new PiggyBank("Bhadresh");
var arpan_pgb = new PiggyBank("Arpan");
bhadresh_pgb.deposit(10);
bhadresh_pgb.withdraw(9);
bhadresh_pgb.statement();
arpan_pgb.deposit(100);
arpan_pgb.withdraw(90);
arpan_pgb.statement();

arpan_pgb.balance=-100000000000;//trying to change original balance directly
//but will not happen to arpan_pgb balance
console.log(arpan_pgb.balance);
arpan_pgb.deposit(100);
arpan_pgb.statement();
console.log(arpan_pgb.balance);

// BUG:
//for every customer seperate copies of 3 methods created
//Bug Improve : Size of functions inside Piggybank is reduce to only function call