document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney)
    const pinNumber = document.getElementById('innput-pin-number').value;
    // console.log(addMoney , pinNumber);

    // wrong way to verify in 
    if (pinNumber === '1234') {
        const blance = document.getElementById('account-blance').innerText;
        const blanceNumber = parseFloat(blance)

        const newBlance = addMoneyNumber + blanceNumber ;
        document.getElementById('account-blance').innerText = newBlance ;
        console.log(newBlance);
        
    }
    else{
        alert('Wrong Pin Number, Try Again')
    }
    
    
})
