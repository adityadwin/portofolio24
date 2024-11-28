import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Scroll animation logic
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate");
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top + scrollTop;
        const elementHeight = el.offsetHeight;

        if (
          scrollTop > elementTop - windowHeight &&
          scrollTop < elementTop + elementHeight
        ) {
          el.classList.add("animate-popup");
          el.classList.remove("opacity-0");
        } else {
          el.classList.remove("animate-popup");
          el.classList.add("opacity-0");
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Counting animation logic
    const counters = document.querySelectorAll(".count-up");
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const duration = 500;
        const increment = target / duration;
        let current = 0;

        const countInterval = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.innerText = `${target}+`;
            clearInterval(countInterval);
          } else {
            counter.innerText = Math.floor(current) + "+";
          }
        }, 1);
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateCount();
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(counter);
    });
  }, []);

  return (
    <div
      id="hero"
      className="container lg:px-16 px-1 md:flex-col lg:flex lg:flex-row flex-col pb-2 md:px-10"
    >
      <div className="left-side md:w-screen lg:w-3/4 py-4 md:py-8 lg:py-12">
        {/* Main heading */}
        <h1 className="scroll-animate opacity-0 text-[50px] md:text-[120px] lg:text-[110px] font-bold text-[#1E5775] leading-[40px] md:leading-[90px] lg:leading-[90px] md:w-[100%] lg:w-[90%]">
          Hi, nice to meet you👋
        </h1>

        {/* Sub heading with name */}
        <h2 className="scroll-animate opacity-0 text-[45px] md:text-[110px] lg:text-[85px] font-bold leading-[40px] md:leading-[90px] lg:leading-[35px] mt-4 md:mt-6 lg:mt-8 text-[#1E5775]">
          i&apos;m
          <span className="md:text-[95px] lg:text-[70px] text-[45px] ms-4 text-[#97BDD1] md:mt-20 lg:mt-14">
            Aditya
          </span>
        </h2>

        {/* Description paragraph */}
        <p className="scroll-animate opacity-0 mt-2 md:mt-6 lg:mt-10 lg:w-4/5 md:w-4/5 w-full text-sm md:text-base lg:text-lg text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, beatae
          neque. Consectetur necessitatibus neque deleniti perferendis provident
          aliquid inventore rem amet, commodi nemo. Possimus, ipsam.
        </p>

        {/* Count-up statistics */}
        <div className="count flex font-semibold gap-8 md:gap-32 md:-ms-12 lg:gap-40 text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 lg:mt-10 lg:justify-start lg:ms-1 md:justify-center md:items-center justify-center items-center">
          {["40", "100", "5000"].map((target, index) => (
            <div
              key={index}
              className="scroll-animate opacity-0 text-center text-[#42677A]"
            >
              <h3 className="count-up" data-target={target}>
                0+
              </h3>
              <p className="text-sm md:text-base lg:text-base font-normal">
                {["Clients", "Projects", "Work Hours"][index]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side image section */}
      <div className="right-side md:w-3/4 lg:w-2/5 md:mt-8 lg:mt-12 bg-[#42677A] lg:rounded-2xl rounded-3xl md:p-0 lg:p-0 m-10 lg:-me-2 lg:h-[550px] lg:max-h-[550px] md:h-[450px] lg:min-w-[490px] opacity-0 scroll-animate animate-fade-right mt-6 md:ms-28">
        <img
          src="https://i.ibb.co.com/m4hNPWx/Me.png"
          alt="Hero Image"
          className="w-full h-full object-cover lg:rounded-2xl rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Hero;
