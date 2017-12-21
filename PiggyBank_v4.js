function withdraw(v) {
    if(this.balance>v){
        this.balance=this.balance-v;
        this.lt=-v;
        this.st.push(new Date().toUTCString()+ " this.balance= "+this.balance+"     "+"Transaction Amt= "+(this.lt));
    }
}
function deposit(v) {
    this.balance=this.balance+v;
    this.lt=v;
    this.st.push(new Date().toUTCString()+ " this.balance= "+this.balance+"     "+"Transaction Amt= "+(this.lt));
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


function PiggyBank(account_holder) {
    var p = {};
    p.account_holder=account_holder;
    p.balance = 0;
    p.lt = 0;
    p.st = [];
    p.__proto__=bankOperations;//assigning the parent
    return p;
}



//Creating objects
var PiggyBank_1=PiggyBank("Bhadresh");
var PiggyBank_2=PiggyBank("Arpan");

////////
PiggyBank_1.deposit(1000);
PiggyBank_1.withdraw(40);
PiggyBank_1.deposit(100);
PiggyBank_1.withdraw(100);

PiggyBank_2.deposit(1000);
PiggyBank_2.withdraw(40);
PiggyBank_2.deposit(100);
PiggyBank_2.withdraw(100);
PiggyBank_2.deposit(1000);
PiggyBank_2.withdraw(80);
PiggyBank_2.deposit(100);

//different way of working with objects and this variable
withdraw.apply(PiggyBank_2,[900]);
deposit.apply(PiggyBank_1,[800]);

PiggyBank_1.statement();
PiggyBank_2.statement();