function withdraw(v) {
    if(this.balance>v){
        this.balance=this.balance-v;
        this.lt=-v;
        this.st.push(" balance= "+this.balance+"     "+"Transaction Amt= "+(this.lt));
    }
}
function deposit(v) {
    this.balance=this.balance+v;
    this.lt=v;
    this.st.push(" balance= "+this.balance+"     "+"Transaction Amt= "+(this.lt));
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
    this.account_holder=account_holder;
    this.balance = 0;
    this.lt = 0;
    this.st = [];
}

//__proto__ field of newly created object is loaded with prototype field of function
PiggyBank.prototype=bankOperations;

//Creating objects
var PiggyBank_1=new PiggyBank("Bhadresh");
var PiggyBank_2=new PiggyBank("Arpan");

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

PiggyBank_2.balance=-1000000000000;//will change original balance directly
console.log(PiggyBank_2.balance);
PiggyBank_2.deposit(100);
PiggyBank_2.statement();
console.log(PiggyBank_2.balance);