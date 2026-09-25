import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, subtotal, shipping, total, clearCart } = useCart();
  const navigate = useNavigate();

  if (!cart.length) return <div className="container section empty"><h1>Your cart is empty</h1><Link to="/products" className="primary-btn">Shop Products</Link></div>;

  const placeOrder = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/orders");
  };

  return (
    <section className="container section">
      <span className="eyebrow">CHECKOUT</span>
      <h1>Complete your order</h1>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={placeOrder}>
          <h2>Shipping Address</h2>
          <div className="two-col">
            <label>First Name<input required placeholder="First name" /></label>
            <label>Last Name<input required placeholder="Last name" /></label>
          </div>
          <label>Address<input required placeholder="Street address" /></label>
          <div className="two-col">
            <label>City<input required placeholder="City" /></label>
            <label>PIN Code<input required pattern="[0-9]{6}" placeholder="452001" /></label>
          </div>
          <h2>Payment</h2>
          <div className="payment-note">Demo checkout — payment gateway will be connected later through FastAPI.</div>
          <button className="primary-btn full">Place Order</button>
        </form>
        <aside className="summary">
          <h2>Your Order</h2>
          {cart.map((item) => <div className="mini-item" key={item.id}><span>{item.title} × {item.quantity}</span><strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong></div>)}
          <hr />
          <div><span>Subtotal</span><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div>
          <div><span>Shipping</span><strong>{shipping ? `₹${shipping}` : "FREE"}</strong></div>
          <div className="total"><span>Total</span><strong>₹{total.toLocaleString("en-IN")}</strong></div>
        </aside>
      </div>
    </section>
  );
}