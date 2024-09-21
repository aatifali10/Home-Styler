import SubscribeSection from "../home/SubscribeSection";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="pt-28">
      <Contact />
      <ContactForm />
      <SubscribeSection/>
    </div>
  );
};

export default ContactUs;
