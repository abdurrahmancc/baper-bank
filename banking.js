//Diposit section
const depositAdd = document.getElementById("deposit-add");
const depositAmount = document.querySelector("#deposit-amount");
const depositButton = document.querySelector("#deposit-button");
const balanceUpdate = document.querySelector("#balance-update")
depositButton.addEventListener("click", function(){
      const  currentDeposit = parseFloat(depositAdd.innerText);
      const  newDepositAmount = parseFloat(depositAmount.value);
         depositAdd.innerText = newDepositAmount + currentDeposit;
         depositAmount.value="";

      //Balance added
      const currentBalance = parseFloat(balanceUpdate.innerText);
     const  updateDiposit = parseFloat(depositAdd.innerText)
      balanceUpdate.innerText = parseFloat(updateDiposit + currentBalance);
});

//withdraw balance 
const totalWithdraw = document.getElementById('total-withdraw');
const withdrawAmount = document.getElementById("withdraw-amount");
const withdrawButton = document.getElementById("withdraw-button");
withdrawButton.addEventListener("click", function(){
    //withdraw Amount 
  const  newWithdrawAmount = parseFloat(withdrawAmount.value);
//   console.log( typeof newWithdrawAmount);
   const newTotalWithdraw = parseFloat(totalWithdraw.innerText);
//    console.log( typeof newTotalWithdraw);
    const updateTotalWithdraw = newWithdrawAmount + newTotalWithdraw;
    totalWithdraw.innerText = updateTotalWithdraw;
    withdrawAmount.value = "";

    //clear balance
   const clearBalance = parseFloat(balanceUpdate.innerText);
   balanceUpdate.innerText = clearBalance - newWithdrawAmount;
})