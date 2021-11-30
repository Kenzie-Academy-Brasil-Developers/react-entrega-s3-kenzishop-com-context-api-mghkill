import Product from "../Product";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import "./styles.css";
import { toast } from "react-toastify";
const CartItems = () => {
  const { cart, removeCart } = useContext(CartContext);
  const handleRemoveItem = (item) => {
    removeCart(item);
    toast.success("Item removido do carrinho!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      {cart.map((item, index) => (
        <div className="cart-list" key={index}>
          <div className="amount"> Quantidade: {item.amout} </div>
          <Product item={item} handle={handleRemoveItem} children={"Remover"} />
        </div>
      ))}
    </>
  );
};
export default CartItems;
