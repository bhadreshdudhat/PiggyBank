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
function statement(acc_no){
    console.log("----------Statement for Account " +acc_no+" -----------");
    console.log(this.st);
    console.log("---------------------------------------");
}

/////
var piggyBank_1={};
piggyBank_1.balance=0;
piggyBank_1.lt=0;
piggyBank_1.st=[];
piggyBank_1.deposit=deposit;
piggyBank_1.withdraw=withdraw;
piggyBank_1.statement=statement;

var piggyBank_2={};
piggyBank_2.balance=0;
piggyBank_2.lt=0;
piggyBank_2.st=[];
piggyBank_2.deposit=deposit;
piggyBank_2.withdraw=withdraw;
piggyBank_2.statement=statement;


piggyBank_1.deposit(1000);
piggyBank_1.withdraw(40);
piggyBank_1.deposit(100);
piggyBank_1.withdraw(100);

piggyBank_2.deposit(1000);
piggyBank_2.withdraw(40);
piggyBank_2.deposit(100);
piggyBank_2.withdraw(100);
piggyBank_2.deposit(1000);
piggyBank_2.withdraw(40);
piggyBank_2.deposit(100);
piggyBank_2.withdraw(100);

piggyBank_1.statement("1654958 Bhadresh Dudhat");
piggyBank_2.statement("1000957 Vimal Nakrani");