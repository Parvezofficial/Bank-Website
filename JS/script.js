// Deposit 
let depositValue = document.getElementById('deposit-value');
let depositeOutput = document.getElementById('deposit-output')

// Balance 
let balanceOutput = document.getElementById('balance-output')

// Withdraw  
let withdrawValue = document.getElementById('withdraw-value');
let withdrawOutput = document.getElementById('withdraw-output');

// function addMoney(currentMoney, NewMoney){
//     const result = Number(currentMoney) + Number(NewMoney);
//     return result;
// }
// Deposit amount 
function deposit(){
 
    depositeOutput.innerText = 
    Number(depositeOutput.innerText) + Number(depositValue.value);
    // const totaloutput = addMoney(depositeOutput.innerText, depositValue.value)
    // totalbalance = depositeOutput.innerText;



    balanceOutput.innerText = 
    Number (balanceOutput.innerText) + Number(depositValue.value);
    // const balanceAmount = addMoney(balanceOutput.innerText, depositValue.value);
    // balanceAmount = balanceOutput.innerText;
    
    depositValue.value = '';
}
 

// withdraw amount
 function withdraw(){

    withdrawOutput.innerText = 
    Number(withdrawOutput.innerText) + Number(withdrawValue.value);

    balanceOutput.innerText = 
    Number (balanceOutput.innerText) - Number(withdrawValue.value);

    
    withdrawValue.value = '';
}