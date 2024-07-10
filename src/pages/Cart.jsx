import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Redux/Createslice";

function Cart() {
  const dispose = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const removeProducts = (id) => {
    dispose(remove(id));
  };

  return (
    <div className="cart">
      {cartItems &&
        cartItems.map((item, index) => (
          <div key={index} className="cartCard">
            <img src={item.image} alt="item" />
            <h4>{item.title}</h4>
            <h5>{item.price}</h5>

            <button className="btn" onClick={() => removeProducts(item.id)}>
           
              Delete Product
            </button>
          </div>
        ))}
    </div>
  );
}

export default Cart;
