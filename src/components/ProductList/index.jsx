import Product from "../Product";
import { useContext, useState } from "react";
import "./styles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../providers/cart";
import { ProductsContext } from "../../providers/products";
const ProductList = () => {
  const [amount, setAmount] = useState(1);
  const { products } = useContext(ProductsContext);
  const { addCart } = useContext(CartContext);
  const handleAddItem = (item) => {
    if (amount < 1) {
      console.log("Valor mínimo, 1 unidade");
    } else {
      addCart(item, Number(amount));

      setAmount(1);

      toast.success("Item adicionado ao carrinho!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      {products.map((item) => {
        return (
          <div key={item.id} className="conteiner-list">
            <input
              className="input-list"
              placeholder="Quantidade"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
            />
            <Product
              item={item}
              handle={handleAddItem}
              children={"Adicionar"}
              amount={amount}
              setAmount={setAmount}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
