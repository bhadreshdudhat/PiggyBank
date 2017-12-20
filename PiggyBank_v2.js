var piggyBank={};

piggyBank.balance=0;
piggyBank.lt=0;
piggyBank.s="";
piggyBank.st=[];

piggyBank.deposit=function (v) {
    piggyBank.balance=piggyBank.balance+v;
    piggyBank.lt=v;
    piggyBank.st.push(new Date().toUTCString()+ " BALANCE= "+piggyBank.balance+"     "+"Transaction Amt= "+(piggyBank.lt));
    piggyBank.deposit.count++;
};
piggyBank.withdraw=function (v) {
    if(piggyBank.balance>v){
        piggyBank.balance=piggyBank.balance-v;
        piggyBank.lt=-v;
        piggyBank.withdraw.count++;
    }
};
piggyBank.statement=function () {
    console.log(piggyBank.st);
    piggyBank.statement.count++;
}

piggyBank.deposit.count=0;piggyBank.withdraw.count=0;piggyBank.statement.count=0;//table variable of functions


piggyBank.deposit(2000);
piggyBank.withdraw(40);
piggyBank.deposit(100);
piggyBank.withdraw(100);

piggyBank.statement();

console.log("Total deposits : "+piggyBank.deposit.count);
console.log("Total withdrawals : "+piggyBank.withdraw.count);
console.log("Total Statement Generated : "+piggyBank.statement.count);
