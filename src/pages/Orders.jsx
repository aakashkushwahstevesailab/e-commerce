export default function Orders() {
  return (
    <section className="container section">
      <span className="eyebrow">ACCOUNT</span>
      <h1>My Orders</h1>
      <div className="order-placeholder">
        <div className="empty-icon">📦</div>
        <h2>No orders yet</h2>
        <p>Your FastAPI order history will appear here after backend integration.</p>
      </div>
    </section>
  );
}