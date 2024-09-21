import Slider from "react-slick";
import { FaStar } from "react-icons/fa"; // Star rating icon
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSlider = () => {
  const testimonials = [
    {
      id: 1,
      text: "I'm glad I decided to work with you. It's really great how easy your websites are to update and manage. I never have any problem at all.",
      name: "Alex",
      image: "src/assets/3.jpg",
      rating: 5,
    },
    {
      id: 2,
      text: "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you.",
      name: "Emily",
      image: "src/assets/2.jpg",
      rating: 4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="w-[70%] mx-auto py-6 flex flex-col gap-y-10 items-center">
      <div className="flex items-center justify-start gap-x-3">
        <div className="border w-24 border-yellow-500" />
        <p className="text-yellow-500 text-[20px] font-normal text-sm uppercase">
          TESTIMONIALS
        </p>
      </div>
      <h2 className="text-5xl font-bold text-center">What People Say</h2>
      <Slider {...settings} className="w-full">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col justify-center items-center gap-4 bg-white shadow-2xl rounded-lg p-4 text-center w-[70%] mx-auto transition-transform duration-200"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-44 rounded-full shadow-xl mb-4 mx-auto"
            />
            <div className="flex flex-col justify-around items-center">
              <p className="text-base text-gray-600 font-medium leading-7">
                {testimonial.text}
              </p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
              <p className="font-bold text-base">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsSlider;
