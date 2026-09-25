import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    login(email);
    navigate("/");
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <span className="eyebrow">WELCOME BACK</span>
        <h1>Sign in</h1>
        <p>Enter your details to continue shopping.</p>
        <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
        <label>Password<input name="password" type="password" required placeholder="••••••••" /></label>
        <button className="primary-btn full">Sign In</button>
        <p className="auth-footer">Don't have an account? <Link to="/register">Create one</Link></p>
      </form>
    </section>
  );
}