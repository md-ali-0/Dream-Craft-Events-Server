import findAllOrders from "../../../../lib/productOrders/findAllOrders.js";

const findAll = async (req, res) => {
  try {
    const result = await findAllOrders();
    res.send(result);
  } catch (error) {
    return res.send(error);
  }
};

export default findAll;
