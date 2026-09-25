import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <section className="container section">
      <span className="eyebrow">ACCOUNT</span>
      <h1>My Profile</h1>
      {user ? (
        <div className="profile-card">
          <div className="avatar">👤</div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button className="outline-btn" onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="order-placeholder">
          <h2>You are not logged in</h2>
          <p>Sign in to see your profile.</p>
          <Link to="/login" className="primary-btn">Login</Link>
        </div>
      )}
    </section>
  );
}