import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-wrap">
        <img src={product.image} alt={product.title} />
        <span className="badge">Sale</span>
      </Link>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <Link to={`/products/${product.id}`}><h3>{product.title}</h3></Link>
        <div className="rating">★ {product.rating}</div>
        <div className="price-row">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>
          <del>₹{product.oldPrice.toLocaleString("en-IN")}</del>
        </div>
        <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </article>
  );
}