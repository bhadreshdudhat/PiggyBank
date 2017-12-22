//use of CLOSURE
function PiggyBank(account_holder) 
{
    var account_holder=account_holder;
    var balance = 0;
    var lt = 0;
    var st = [];

    PiggyBank.withdraw(v)=function {
        if(balance>v){
            balance=balance-v;
            lt=-v;
            st.push(new Date().toUTCString()+ " balance= "+balance+"     "+"Transaction Amt= "+(lt));
        }
    }
    function deposit(v) {
        balance=balance+v;
        lt=v;
        st.push(new Date().toUTCString()+ " balance= "+balance+"     "+"Transaction Amt= "+(lt));
    }
    function statement(){
        console.log("----------Statement for Account of " +account_holder+" -----------");
        console.log(st);
        console.log("---------------------------------------");
    }
}

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

//Problem with JS
PiggyBank_2.balance=-1000;
console.log(PiggyBank_2.balance);
console.log("balance can be changed by anyone in the world");