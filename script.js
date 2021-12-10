

const account = {
    accountName: "Therese",
    balance: 100,
    getBalance: function(){
        alert("Your balance is " + this.balance);
        atm();
    },
    deposit: function(){
        let depositAmount = parseFloat(prompt("How much would you like to deposit?"), 10);
        if (depositAmount === "" || depositAmount <= 0 || isNaN(depositAmount)) {
            alert("This is not a valid amount to deposit")
            this.deposit();
        }
        else {
            this.balance += depositAmount;
            this.getBalance();
        }
        atm();
    },
    withdrawal: function(){
        let withdrawalAmount = parseFloat(prompt("How much would you like to withdraw?"), 10);
        if (withdrawalAmount === "" || withdrawalAmount <= 0 || isNaN(withdrawalAmount)) {
            alert("This is not a valid amount for withdrawal")
            this.withdrawal();
        }
        else {
            this.balance -= withdrawalAmount;
            this.getBalance();
        }
        atm();
    },
    getAccountName: function(){
        alert("Your account name is " + this.accountName);
        atm();
    },
    accountError: function(){
        alert("Please enter a number between 1 and 5 to make your choice");
            atm();
    },
    exitAccount: function(){
        const exit = confirm("Are you sure you want to exit?");
        if (exit) {
            window.close();
        }
        else {
            atm();
        }
    },
};



function atm() {
  let choice = parseInt(prompt("Please select what you would like to do: 1) See balance. 2) Make a deposit. 3) Make a withdrawal. 4) Get account name. 5) Exit."));

  switch (choice){
    case 1:
        account.getBalance();
        break;
    case 2:
        account.deposit();
        break;
    case 3:
        account.withdrawal();
        break;
    case 4:
        account.getAccountName();
        break;
    case 5:        
        account.exitAccount();
        break;
        default:
            account.accountError();
  }
}


atm();



//Comments

//parseFloat is used because it will return a number from the string,
//and a number is needed for the calculation in the account after deposit/withdrawal
//I added radix 10 so that it will be base 10, decimal (and not binary etc.)

//I started using if/else but then opted for switch
//with 5 cases/choices it was easier to read the individual cases in switch than searching through if/else

// this is how the if/else would look like in my code

// function atm() {
//     let choice = parseInt(prompt("Please select what you would like to do: 1) See balance. 2) Make a deposit. 3) Make a withdrawal. 4) Get account name. 5) Exit."));
  
//     if (choice === 1) {
//         account.getBalance();
//     }
//     else if (choice === 2) {
//         account.deposit();
//         }
//     else if (choice === 3) {
//         account.withdrawal();
//         }
//     else if (choice === 4) {
//         account.getAccountName();
//     }
//     else if (choice === 5) {
//         account.exitAccount();
//     }
//     else {
//         account.accountError();
//     }
// }
