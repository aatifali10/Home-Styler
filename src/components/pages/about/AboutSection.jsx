
import CountUp from 'react-countup';

const AboutSection = () => {
  return (
    <section className="about-section-1 w-full relative flex justify-center">
      <div className="w-full lg:w-4/5 h-auto py-4 lg:py-0 lg:h-44 bg-white absolute bottom-0 grid grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <CountUp start={0} end={1982} delay={1} >
            {({ countUpRef }) => (
              <p ref={countUpRef} className="text-gray-500 text-4xl lg:text-6xl font-bold" />
            )}
          </CountUp>
          <p className="text-gray-500 text-base uppercase font-normal">founded</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <CountUp start={0} end={400} delay={1}>
            {({ countUpRef }) => (
              <p ref={countUpRef} className="text-gray-500 text-4xl lg:text-6xl font-bold" />
            )}
          </CountUp>
          <p className="text-gray-500 text-base uppercase font-normal">EMPLOYEES</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <CountUp start={0} end={1000} delay={1} separator=",">
            {({ countUpRef }) => (
              <p ref={countUpRef} className="text-gray-500 text-4xl lg:text-6xl font-bold" />
            )}
          </CountUp>
          <p className="text-gray-500 text-base uppercase font-normal">PRODUCTS</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <CountUp start={0} end={5} delay={1}>
            {({ countUpRef }) => (
              <p ref={countUpRef} className="text-gray-500 text-4xl lg:text-6xl font-bold" />
            )}
          </CountUp>
          <p className="text-gray-500 text-base uppercase font-normal">stores</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
