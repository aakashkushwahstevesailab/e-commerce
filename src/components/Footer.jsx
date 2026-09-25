import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">Shop<span>Store</span></div>
          <p>Simple, modern shopping for everyday products.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <Link to="/products">All Products</Link>
          <Link to="/products">Electronics</Link>
          <Link to="/products">Fashion</Link>
        </div>
        <div>
          <h4>Account</h4>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/orders">My Orders</Link>
        </div>
      </div>
      <div className="footer-bottom">© 2026 ShopStore. All rights reserved.</div>
    </footer>
  );
}