import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      {showSuccess ? (
        <>
          <h2 className="success-msg">Login Successful ✅</h2>
          <p>You have logged in successfully.</p>
        </>
      ) : (
        <>
          <h2>Welcome 🎉</h2>
          <p>Welcome to the application home page.</p>
        </>
      )}
    </div>
  );
}
