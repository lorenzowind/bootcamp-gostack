import TransactionsRepository from '../repositories/TransactionsRepository';

import Transaction from '../models/Transaction';
import AppError from '../errors/AppError';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    // TODO
    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    if (
      transaction.type === 'outcome' &&
      transaction.value > this.transactionsRepository.getBalance().total
    ) {
      throw new AppError('The outcome value is not valid.', 400);
    }

    return transaction;
  }
}

export default CreateTransactionService;
