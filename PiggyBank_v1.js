function withdraw(v) {
    if(balance>v){
        balance=balance-v;
        lt=-v;
        st.push(new Date().toUTCString()+ " BALANCE= "+balance+"     "+"Transaction Amt= "+(lt));
        withdraw.count++;
    }
}
function deposit(v) {
    balance=balance+v;
    lt=v;
    st.push(new Date().toUTCString()+ " BALANCE= "+balance+"     "+"Transaction Amt= "+(lt));
    deposit.count++;
}
function statement(){
    console.log(st);
    statement.count++;
}

balance=0;lt=0;s="";st=[];
deposit.count=0;withdraw.count=0;statement.count=0;

deposit(1000);
withdraw(40);
deposit(100);
withdraw(100);

statement();

console.log("Total deposits : "+deposit.count);
console.log("Total withdrawals : "+withdraw.count);
console.log("Total Statement Generated : "+statement.count);