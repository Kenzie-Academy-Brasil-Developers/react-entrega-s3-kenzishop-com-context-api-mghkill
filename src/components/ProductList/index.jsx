import Product from "../Product";
import { useContext, useState } from "react";
import "./styles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../providers/cart";
const ProductList = () => {
  const [amount, setAmount] = useState(1);
  //chamar o produto do products dentro do context
  const products = [
    {
      id: 1,
      name: "CURREN",
      image:
        "//ae01.alicdn.com/kf/Hb02b38ca42f44a23b6faa8987c1233c6R/CURREN-Casual-Sport-Watches-for-Men-Blue-Top-Brand-Luxury-Military-Leather-Wrist-Watch-Man-Clock.jpg_220x220xz.jpg",
      price: 1499.0,
    },
    {
      id: 2,
      name: "CURREN",
      image:
        "//ae01.alicdn.com/kf/He91711fc79ac4f18afc0142529b78e45A/LIGE-Brand-Foxbox-Carbon-Fiber-Case-Sport-Mens-Watches-Top-Luxury-Quartz-Wristwatch-For-Men-Military.jpg_220x220xz.jpg",
      price: 1899.0,
    },
    {
      id: 3,
      name: "CURREN",
      image:
        "//ae01.alicdn.com/kf/H926e7c8ecbd7402a9270b263718e49253/LIGE-Top-Brand-Luxury-Fashion-Diver-Watch-Men-30ATM-Waterproof-Date-Clock-Sport-Watches-Mens-Quartz.jpg_220x220xz.jpg",
      price: 2200.0,
    },
    {
      id: 4,
      name: "CURREN",
      image:
        "//ae01.alicdn.com/kf/H0ab9a28453b94aa2950cbde8c0b821a6V/2020-New-PAGANI-DESIGN-Luxury-Men-GMT-Automatic-Machinery-Watch-40MM-Ceramic-Bezel-Jubilee-Strap-Sapphire.jpg_220x220xz.jpg",
      price: 1799.0,
    },
    {
      id: 5,
      name: "CURREN",
      image:
        "//ae01.alicdn.com/kf/H1ea6f20474584f40a46730e7fee93b0a8/DIVEST-Mens-Watches-Original-Top-Brand-Luxury-Fashion-Waterproof-Quartz-Watch-Men-Military-Male-Clock-Relogio.jpg_220x220xz.jpg",
      price: 1199.0,
    },
    {
      id: 6,
      name: "CURREN",
      image:
        "//ae01.alicdn.com/kf/H31024fbe6a7a46459cde780ffc56d15bS/2021-LIGE-Men-s-Watches-Top-Brand-Luxury-Men-Wrist-Watch-Leather-Quartz-Watch-Sports-Waterproof.jpg_220x220xz.jpg",
      price: 2900.0,
    },
    {
      id: 7,
      name: "CURREN",
      image:
        "//ae01.alicdn.com/kf/H25413b3de34c4dd9adfa9c26c3c9978f2/Screen-Protector-Hydrogel-Film-For-Apple-Watch-45MM-44MM-41MM-38MM-40MM-42MM-Screen-Protector-For.jpg_220x220xz.jpg_.webp",
      price: 1399.0,
    },
    {
      id: 8,
      name: "CURREN",
      image:
        "//ae01.alicdn.com/kf/H466b420b180c4d9b9abef1a4fbae0d3cR/Reloj-Hombre-2021-Hot-Fashion-Wrist-Watches-Men-Gold-Stainless-Steel-Men-s-Quartz-Watch-Man.jpg_220x220xz.jpg_.webp",
      price: 1499.0,
    },
    {
      id: 9,
      name: "CURREN",
      image:
        "//ae01.alicdn.com/kf/Hb889292adfe440b89b316f21724009c7R/Soft-TPU-Protective-Case-for-Xiaomi-Redmi-Watch-2-Cover-Bumper-Protector-Shell-for-Mi-Watch.jpg_220x220xz.jpg_.webp",
      price: 2699.0,
    },
    {
      id: 10,
      name: "CURREN",
      image:
        "//ae01.alicdn.com/kf/H82d7f45d435646a58abef0082b9d2455L/Cover-For-Apple-Watch-case-45mm-41mm-44mm-40mm-42mm-38mm-Screen-Protector-Tempered-Glass-cover.jpg_220x220xz.jpg_.webp",
      price: 2399.0,
    },
    {
      id: 11,
      name: "CURREN",
      image:
        "//ae01.alicdn.com/kf/Hbe261bdc447042f0a235e825b86ea479d/Soft-Glass-For-Apple-Watch-7-45mm-41mm-iWatch-series-6-5-4-3-se-44mm.jpg_220x220xz.jpg_.webp",
      price: 2899.0,
    },
    {
      id: 12,
      name: "CURREN",
      image:
        "//ae01.alicdn.com/kf/H2e86e54ff43a4a4699b0e9fd15119506Y/Fashion-Mens-Car-Wheel-Watches-Luxury-Stainless-Steel-Waterproof-Watch-for-Men-Quartz-Wrist-Watches-Male.jpg_220x220xz.jpg_.webp",
      price: 1799.0,
    },
  ];
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
