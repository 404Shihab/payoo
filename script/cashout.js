document.getElementById('btn-cashout').addEventListener('click',function(){
    // console.log('Cash Out');
    //1- get the agent number & validate
    const cashoutNumberInput = document.getElementById('cashout-number');
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    //2- get the amount, validate, convert to number
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);
    //3- get the current balance validate convert to number
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;;
    console.log(balance);
    //4- Calculate new balance
    const newBalance = Number(balance)-Number(cashoutAmount);
    if(newBalance<0){
        alert('Invalid Balance');
        return;
    }
    console.log(newBalance);

    //5- get the pin and verify
    const cashoutPinInput = document.getElementById('cashout-pin');
    const pin = cashoutPinInput.value;
    if(pin==='5798')
    {
        alert('Cash Out Successful')
        console.log(newBalance);
    }
    else
    {
        alert('Invalid pin');
        return;
    }
    //5-1 true: show alert > set new balance
    //5-2 false: show an error alert > return
})