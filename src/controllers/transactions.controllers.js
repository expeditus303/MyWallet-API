import transactionsServices from "../services/transactions.services.js"

async function get(req, res, next) {
  const { user } = res.locals;

  const transactions = user.transactions;

  try {
    res.status(200).send(transactions);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
    const { _id } = res.locals.user
    const { type, value, description } = req.body

    const userId = _id

    try {
        await transactionsServices.create(userId, type, value, description)

        return res.sendStatus(201)
    } catch (err) {
        next(err)
    }

}

export default { get, create };
