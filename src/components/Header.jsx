import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { cartCount } = useCart();
  const { user } = useAuth();

  return (
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="brand">Shop<span>Store</span></Link>
        <nav className="desktop-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Shop</NavLink>
          <NavLink to="/orders">Orders</NavLink>
        </nav>
        <div className="nav-actions">
          <Link to="/profile" className="icon-link" title="Profile">👤</Link>
          <Link to="/cart" className="cart-link">
            🛒 <span>Cart</span>
            {cartCount > 0 && <b>{cartCount}</b>}
          </Link>
          {user ? <span className="welcome">Hi, {user.name}</span> : <Link to="/login" className="login-link">Login</Link>}
        </div>
      </div>
    </header>
  );
}