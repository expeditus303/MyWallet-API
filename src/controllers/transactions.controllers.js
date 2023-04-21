import transactionsServices from "../services/transactions.services.js";

async function get(req, res, next) {
  const { transactions } = res.locals.user;

  try {
    res.status(200).send(transactions);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  const { _id } = res.locals.user;
  const { type, value, description } = req.body;

  const userId = _id;

  try {
    const transactionsUpdated = await transactionsServices.create(userId, type, value, description);

    return res.status(201).send(transactionsUpdated)
  } catch (err) {
    next(err);
  }
}

async function del(req, res, next) {
  const { _id: userId } = res.locals.user;
  const { transactionId } = req.params;

  try {
    const transactionsUpdated = await transactionsServices.del(userId, transactionId);

    res.status(200).send(transactionsUpdated);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const { _id: userId } = res.locals.user;
  const { transactionId } = req.params;
  const { value: transactionValue, description: transactionDescription } = req.body;

  try {
    const transactionsUpdated = await transactionsServices.update(
      userId,
      transactionId,
      transactionValue,
      transactionDescription
    );

    res.status(200).send(transactionsUpdated);
  } catch (err) {
    next(err);
  }
}

export default { get, create, del, update };
