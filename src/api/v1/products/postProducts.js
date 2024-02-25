import ShopProducts from "../../../models/ShopProducts.js";

const postProducts = async (req, res) => {
  const request = req.body;

  try {
    const newProducts = new ShopProducts(request);
    const result = await newProducts.save();
    res.send(result);
  } catch (error) {
    console.error("Error saving request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export default postProducts;
