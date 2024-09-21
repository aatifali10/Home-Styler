import BestSeller from "./BestSeller";
import Hero from "./Hero";
import NewCollection from "./NewCollection";
import SubscribeSection from "./SubscribeSection";
import TestimonialsSection from "./TestimonialsSection";
import WhyChooseUsSection from "./WhyChooseUsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <NewCollection/>
      <BestSeller/>
      <TestimonialsSection/>
      <WhyChooseUsSection/>
      <SubscribeSection/>
    </>
  );
};

export default Home;
