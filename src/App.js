import "./App.css";
import ProductList from "./components/ProductList";
import CartItems from "./components/CartItems";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FiShoppingCart } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import { CartContext } from "./providers/cart";

function App() {
  const { cart } = React.useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <div className="App-box">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <div className="App-conteiner">
          <header className="App-cart">
            <Button onClick={handleOpen}>
              <div>{cart.length}</div>
              <FiShoppingCart />
            </Button>
          </header>

          <ProductList />

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="modal">
              <Typography className="modal-right" id="modal-modal-description">
                CHECKOUT
              </Typography>
              <Typography className="modal-left" id="modal-modal-title">
                {cart.length !== 0 ? (
                  <CartItems />
                ) : (
                  <h1>Carrinho está vazio</h1>
                )}
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
