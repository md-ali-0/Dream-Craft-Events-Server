import productOrders from "../../../../models/productOrders.js";

const postOrders = async (req, res) => {
  const request = req.body;

  try {
    const newOrders = new productOrders(request);
    const result = await newOrders.save();
    res.send(result);
  } catch (error) {
    console.error("Error saving request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export default postOrders;
