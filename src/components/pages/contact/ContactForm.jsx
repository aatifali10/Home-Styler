import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { MapImage } from "../../../assets/export"; // Adjust the path to your assets folder
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("All fields are required.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs.sendForm("service id", "template_id", form.current, "user id").then(
      (result) => {
        console.log(result.text);
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.log(error.text);
        toast.error("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <div className="py-6 lg:py-20">
      <ToastContainer />
      <div className="w-full grid grid-cols-1 lg:grid-cols-5">
        {/* Left section with map image */}
        <div className="col-span-3 flex items-center justify-center">
          <img src={MapImage} alt="Map" className="lg:h-[86%]" />
        </div>

        {/* Right section with form */}
        <div className="col-span-2">
          <div className="bg-white w-full md:w-[400px] lg:w-[460px] drop-shadow-2xl relative overflow-hidden p-6 md:p-8 lg:py-10 lg:px-14">
            <div className="bg-yellow-500 w-20 h-10 absolute top-[-15px] left-[-30px] rotate-[-40deg]" />

            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full flex flex-col items-start justify-center gap-y-4"
            >
              <h1 className="font-bold text-3xl text-black">
                Send Us A Message
              </h1>

              {/* Name field */}
              <div className="w-full">
                <label htmlFor="name" className="font-bold text-gray-600">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 py-2 px-3 rounded outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Email field */}
              <div className="w-full">
                <label htmlFor="email" className="font-bold text-gray-600">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 py-2 px-3 rounded outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Message field */}
              <div className="w-full">
                <label htmlFor="message" className="font-bold text-gray-600">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  id="message"
                  cols="30"
                  rows="5"
                  className="w-full border border-gray-300 py-2 px-3 rounded outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white transition-all duration-200 py-3 px-8 uppercase text-xs font-medium rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
