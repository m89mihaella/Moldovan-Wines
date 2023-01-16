import React, { useState } from "react";
import "../styles/subscription.css";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email to server for subscription
    setSubscribed(true);
  };
  return (
    <div className="subscription">
      <h2>Get your monthly boost of wine inspiration</h2>
      <p>Join our newsletter now to receive our free guide on how to plan the perfect wine tour</p>
      {subscribed ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
};

export default Subscription;

//This component uses React hooks useState to keep track of the email and subscription state. The component renders a form for the user to enter their email and subscribe, and when the form is submitted, it sends the email to the server (in a real-world scenario) and the state is updated to show that the user is subscribed.
