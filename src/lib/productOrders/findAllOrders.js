import productOrders from "../../models/productOrders.js";

const findAllOrders = async () => {
  const cursor = await productOrders.find();

  return cursor;
};

export default findAllOrders;
