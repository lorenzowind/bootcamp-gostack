import Transaction from '../models/Transaction';

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Response {
  transactions: Transaction[];
  balance: Balance;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Response {
    // TODO
    const response = {
      transactions: this.transactions,
      balance: this.getBalance(),
    };

    return response;
  }

  public getBalance(): Balance {
    // TODO
    const income = this.transactions.reduce((count, transaction) => {
      if (transaction.type === 'income') {
        return count + transaction.value;
      }
      return count;
    }, 0);

    const outcome = this.transactions.reduce((count, transaction) => {
      if (transaction.type === 'outcome') {
        return count + transaction.value;
      }
      return count;
    }, 0);

    const balance = {
      income,
      outcome,
      total: income - outcome,
    };

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
