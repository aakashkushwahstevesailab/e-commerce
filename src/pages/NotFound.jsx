import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container section empty">
      <h1 className="big-404">404</h1>
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="primary-btn">Back Home</Link>
    </section>
  );
}