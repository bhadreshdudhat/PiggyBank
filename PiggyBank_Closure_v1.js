//use of CLOSURE
function PiggyBank(account_holder)
{
    var account_holder=account_holder;
    var balance = 0;
    var lt = 0;
    var st = [];

    this.withdraw=function (v){
        if(balance>v){
            balance=balance-v;
            lt=-v;
            st.push( " balance= "+balance+"     "+"Transaction Amt= "+(lt));
        }
    }
    this.deposit=function (v) {
        balance=balance+v;
        lt=v;
        st.push(" balance= "+balance+"     "+"Transaction Amt= "+(lt));
    }
    this.statement=function (){
        console.log("----------Statement for Account of " +account_holder+" -----------");
        console.log(st);
        console.log("---------------------------------------");
    }

    // this.deposit=deposit;
    // this.withdraw=withdraw;
    // this.statement=statement;

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

