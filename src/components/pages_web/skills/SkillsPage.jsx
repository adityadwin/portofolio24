import { useEffect } from "react";
import html from "../../../assets/icons/html.png";
import css from "../../../assets/icons/css.png";
import js from "../../../assets/icons/js.png";
import php from "../../../assets/icons/php.png";
import reactjs from "../../../assets/icons/reactjs.png";
import wp from "../../../assets/icons/wp.png";
import mysql from "../../../assets/icons/mysql.png";
import tw from "../../../assets/icons/tw.png";
import ck from "../../../assets/icons/ck.png";
import ph from "../../../assets/icons/ph.png";
import cr from "../../../assets/icons/cr.png";
import figma from "../../../assets/icons/figma.png";

const SkillsPage = () => {
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

  const icons1 = [html, css, js, php, reactjs, wp];
  const icons2 = [mysql, tw, ck, ph, cr, figma];

  return (
    <div
      id="skills"
      className="container w-full h-auto pt-10 pb-8 lg:px-16 px-4 border-t-8 border-[#1E5775]"
    >
      {/* Title Section */}
      <div className="flex flex-col lg:flex-row gap-x-20 mb-8">
        <div className="box scroll-animate opacity-0 flex justify-center items-center text-center lg:w-[200px] w-[170px] h-[60px] lg:h-[75px] bg-[#42677A] text-white rounded-tl-[50px] rounded-br-[50px] lg:text-3xl text-2xl font-semibold">
          Skills
        </div>
      </div>

      {/* Icons1 Section */}
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 justify-items-center">
        {icons1.map((icon, index) => (
          <div
            key={index}
            className="icon scroll-animate opacity-0 flex justify-center items-center hover:scale-110 transition-transform duration-300 ease-in-out transform"
          >
            <img
              className="lg:w-24 lg:h-24 w-16 h-16"
              src={icon}
              alt={`Icon ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Icons2 Section */}
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 justify-items-center lg:mt-12">
        {icons2.map((icon, index) => (
          <div
            key={index}
            className="icon scroll-animate opacity-0 flex justify-center items-center hover:scale-110 transition-transform duration-300 ease-in-out transform"
          >
            <img
              className="lg:w-24 lg:h-24  w-16 h-16"
              src={icon}
              alt={`Icon ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
