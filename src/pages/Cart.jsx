import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, subtotal, shipping, total } = useCart();

  if (!cart.length) {
    return (
      <section className="container section empty">
        <div className="empty-icon">🛒</div>
        <h1>Your cart is empty</h1>
        <p>Add some products and they will appear here.</p>
        <Link to="/products" className="primary-btn">Start Shopping</Link>
      </section>
    );
  }

  return (
    <section className="container section">
      <span className="eyebrow">YOUR BAG</span>
      <h1>Shopping Cart</h1>
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                <div className="cart-controls">
                  <div className="quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <aside className="summary">
          <h2>Order Summary</h2>
          <div><span>Subtotal</span><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div>
          <div><span>Shipping</span><strong>{shipping ? `₹${shipping}` : "FREE"}</strong></div>
          <hr />
          <div className="total"><span>Total</span><strong>₹{total.toLocaleString("en-IN")}</strong></div>
          <Link to="/checkout" className="primary-btn full">Proceed to Checkout</Link>
        </aside>
      </div>
    </section>
  );
}