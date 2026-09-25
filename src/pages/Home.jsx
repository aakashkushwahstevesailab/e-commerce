import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="hero-kicker">NEW COLLECTION 2027 🛍️</span>
            <h1>Everything you need.<br /><em>All in one place.</em></h1>
            <p>Discover products made for modern everyday life, from tech essentials to fashion and home.</p>
            <Link to="/products" className="primary-btn">Shop Collection →</Link>
          </div>
          <div className="hero-card">
            <img src={products[0].image} alt="Featured headphones" />
            <div>
              <span>Trending now</span>
              <strong>AirFlex Headphones</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <SectionTitle eyebrow="SHOP BY CATEGORY" title="Find what you need" text="Browse our popular categories." />
        <div className="category-grid">
          {["Electronics", "Fashion", "Shoes", "Home", "Accessories"].map((category) => (
            <Link className="category-card" to="/products" key={category}>
              <div>{category === "Electronics" ? "⚡" : category === "Fashion" ? "👕" : category === "Shoes" ? "👟" : category === "Home" ? "🏠" : "🎒"}</div>
              <strong>{category}</strong>
              <span>Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionTitle eyebrow="FEATURED" title="Popular products" text="Our most-loved products, ready to order." />
        <div className="product-grid">
          {products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <div className="center"><Link to="/products" className="outline-btn">View All Products</Link></div>
      </section>

      <section className="promo">
        <div className="container promo-inner">
          <div>
            <span>LIMITED OFFER</span>
            <h2>Free shipping on orders over ₹2,000</h2>
            <p>Shop more and save on delivery.</p>
          </div>
          <Link to="/products" className="primary-btn light">Start Shopping →</Link>
        </div>
      </section>
    </>
  );
}