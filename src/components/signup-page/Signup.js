import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    gender: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:8085/swagger-ui/index.html#/user-controller/createUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      // if (!res.ok) {
      //   setError(data.message || "Signup failed");
      // } else {
      //   setSuccess("Signup successful");
      // }
      if (!res.ok) {
        setError(data.message || "Signup failed");
      } else {
        navigate("/success");
      }

    } catch {
      setError("Server error");
    }
  };
  // console.log(form)

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />

        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <div className="gender">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
            />
            Other
          </label>
        </div>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
