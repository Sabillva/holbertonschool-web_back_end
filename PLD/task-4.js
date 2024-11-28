class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Depsoite olunmus amount: $${amount}. New Balance: $${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdraw olunmus amount: $${amount}. New Balance: $${this.#balance}`);
    } else if (amount > this.#balance) {
      console.log("Insufficient balance");
    } else {
      console.log("Withdrawal amount must be positive");
    }
  }

  getBalance() {
    return this.#balance;
  }
  static compareAccounts(account1, account2) {
    if (account1.getBalance() > account2.getBalance()) {
      return "Account 1 has a higher balance";
    } else if (account1.getBalance() < account2.getBalance()) {
      return "Account 2 has a higher balance";
    } else {
      return "Both accounts have the same balance";
    }
  }
}

const account1 = new BankAccount(500);
const account2 = new BankAccount(1000);


console.log(account1.deposit(200));
console.log(account1.withdraw(300));
console.log(account2.withdraw(160));

const comparisonResult = BankAccount.compareAccounts(account1, account2);
console.log(comparisonResult);
