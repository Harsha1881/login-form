import { Link } from "react-router-dom";
import "./Success.css";

export default function Success() {
  return (
    <div className="success-container">
      <h2>Account Created Successfully 🎉</h2>
      <p>You can now login using your credentials.</p>

      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
}
