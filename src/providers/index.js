import { CartProvider } from "./cart";
import { ProductsProvider } from "./products";

export const Providers = ({ children }) => {
  return (
    <CartProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </CartProvider>
  );
};
