import React, { useState } from "react";
import "../styles/subscription.css";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    console.log("New Subscriber:", email);
  };
  return (
    <div className="subscription">
      <h2>Get your monthly boost of wine inspiration</h2>
      <p>Join our newsletter now to receive our free guide on how to plan the perfect wine tour</p>
      {subscribed ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
};

export default Subscription;
