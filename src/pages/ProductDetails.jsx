import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="container section empty"><h1>Product not found</h1><Link to="/products" className="primary-btn">Back to Shop</Link></div>;

  const add = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
  };

  return (
    <section className="container section">
      <Link to="/products" className="back-link">← Back to products</Link>
      <div className="details">
        <div className="details-image"><img src={product.image} alt={product.title} /></div>
        <div className="details-content">
          <span className="eyebrow">{product.category}</span>
          <h1>{product.title}</h1>
          <div className="rating large">★ {product.rating} / 5</div>
          <div className="details-price">₹{product.price.toLocaleString("en-IN")} <del>₹{product.oldPrice.toLocaleString("en-IN")}</del></div>
          <p>{product.description}</p>
          <div className="quantity">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="primary-btn" onClick={add}>Add {quantity} to Cart</button>
        </div>
      </div>
    </section>
  );
}