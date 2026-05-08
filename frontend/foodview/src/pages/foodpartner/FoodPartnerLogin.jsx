import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth.css";
import { useState } from "react";
import { api } from "../../api/axios";

const FoodPartnerLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/auth/food-partner/login", {
        email: formData.email.trim(),
        password: formData.password,
      });

      console.log(response.data);

      navigate("/create-FoodPartnerRegister"); // or wherever
    } catch (error) {
      console.error("Login Error:", error);
      alert(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-shell">
        <section className="auth-card">
          <div className="auth-card-header">
            <h2>Food partner login</h2>
            <p>Sign in with your partner email and password.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="auth-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="partner@example.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button className="auth-button" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <p className="auth-switch">
            Need a partner account?{" "}
            <Link to="/food-partner/register">Register</Link>
          </p>
        </section>
      </section>
    </main>
  );
};

export default FoodPartnerLogin;
