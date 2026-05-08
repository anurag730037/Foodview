import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth.css";
import { useState } from "react";
import { api } from "../../api/axios";

const FoodPartnerRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    contactname: "",
    phone: "",
    email: "",
    address: "",
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

      const response = await api.post("/auth/food-partner/register", {
        name: formData.name.trim(),
        contactname: formData.contactname.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        address: formData.address.trim(),
        password: formData.password,
      });

      console.log(response.data);
      navigate("/create-food");
    } catch (error) {
      console.error("Register Error:", error);
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
            <h2>Food partner registration</h2>
            <p>Add the account details for your food partner profile.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {/* Restaurant Name */}
            <div className="auth-field">
              <label htmlFor="name">Restaurant Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Restaurant or partner name"
                autoComplete="organization"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Contact Person */}
            <div className="auth-field">
              <label htmlFor="contactname">Contact Person</label>
              <input
                id="contactname"
                name="contactname"
                type="text"
                placeholder="Owner / Manager name"
                value={formData.contactname}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="auth-field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

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

            {/* Address */}
            <div className="auth-field">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Restaurant address"
                value={formData.address}
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
                placeholder="Create a password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button className="auth-button" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Create partner account"}
            </button>
          </form>

          <p className="auth-switch">
            Already registered? <Link to="/food-partner/login">Log in</Link>
          </p>
        </section>
      </section>
    </main>
  );
};

export default FoodPartnerRegister;
