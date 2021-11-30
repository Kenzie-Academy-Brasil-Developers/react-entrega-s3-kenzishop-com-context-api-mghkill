import format from "../../utils";
import "./styles.css";
const Product = ({ item, handle, children }) => {
  const { image, name, price } = item;

  return (
    <div className="conteiner">
      <img src={image} alt={name} />

      <h4>Nome: {name}</h4>

      <p>
        Total: <span>{format(price)}</span>
      </p>

      <button onClick={() => handle(item)}>{children}</button>
    </div>
  );
};
export default Product;
