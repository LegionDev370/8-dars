import categoryRouter from "./category.route.js";
import productRouter from "./product.route.js";
import salesProductsRouter from "./salesProducts.route.js";

const Routes = () => {
  return [productRouter, categoryRouter, salesProductsRouter];
};
export default Routes;
