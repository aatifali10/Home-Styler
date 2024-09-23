import { useState } from "react";
import SubscribeSection from "../home/SubscribeSection";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }
    setError("");
    console.log({ name, email, message });
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="pt-28">
      <div className=" max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl text-black font-bold text-center mb-4">
          Feedback Form
        </h2>
        {submitted ? (
          <div className="text-center">
            <h3 className="text-lg font-semibold">
              Thank you for your feedback!
            </h3>
            <p>Your response has been recorded.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <label
                className="block text-black text-sm font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-medium mb-2"
                htmlFor="message"
              >
                Feedback
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Your feedback"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
      <SubscribeSection />
    </div>
  );
};

export default FeedbackForm;
