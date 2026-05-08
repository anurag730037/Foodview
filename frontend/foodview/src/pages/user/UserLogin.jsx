import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth.css";
import { useState } from "react";
import { api } from "../../api/axios";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/auth/user/login", {
        email: formData.email.trim(),
        password: formData.password,
      });

      console.log(response);

      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);

      alert(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="auth-page">
      <section className="auth-shell" aria-labelledby="user-login-heading">
        <section className="auth-card" aria-label="User login">
          <div className="auth-card-header">
            <h2>User login</h2>
            <p>Use your email and password to access your account.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>

            <button className="auth-button" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <p className="auth-switch">
            New to FoodView? <Link to="/user/register">Create an account</Link>
          </p>
        </section>
      </section>
    </main>
  );
};

export default UserLogin;
