// const Navbar = () => {
//   return (
//     <div className="flex justify-center text-center px-2 lg:px-16 gap-1">
//       <div className="logo w-full h-10 text-[#42677A] text-xs lg:text-2xl font-bold text-start lg:mt-2 mt-3">
//         PORTOFOLIO
//       </div>
//       <div className="logo bg-[#1E5775] w-[48%] lg:w-1/3 h-16 lg:rounded-b-3xl rounded-b-2xl fixed mt-[-15px] top-0 left-0 right-0 mx-auto z-50">
//         <ul className="flex gap-2 lg:gap-0 p-2 lg:p-0 lg:justify-around text-center text-fuchsia-100 mt-[29px] text-[10px] lg:text-base items-center justify-center">
//           <li className="hover:text-red-300 hover:cursor-pointer">Home</li>
//           <li className="hover:text-red-300 hover:cursor-pointer">Skills</li>
//           <li className="hover:text-red-300 hover:cursor-pointer">
//             Experience
//           </li>
//           <li className="hover:text-red-300 hover:cursor-pointer">Projects</li>
//         </ul>
//       </div>
//       <div className="logo w-full rounded-b-3xl text-end">
//         <button className="bg-[#42677A] text-[#F6F6F6] lg:w-32 w-16 h-7 lg:h-9 mt-1 lg:mt-2 rounded-3xl text-[8px] lg:text-base">
//           Download CV
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Navbar berubah jika scroll lebih dari 50px
      } else {
        setIsScrolled(false); // Navbar kembali ke bentuk semula
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector(".logo").offsetHeight || 0; // Tinggi navbar
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex justify-center text-center px-2 lg:px-16 md:px-10 gap-1">
      <div className="logo w-full h-10 text-[#42677A] text-xs md:text-xl lg:text-2xl font-bold text-start lg:mt-2 mt-3">
        PORTOFOLIO
      </div>
      <div
        className={`logo bg-[#1E5775] ${
          isScrolled ? "w-full" : "w-[48%] md:w-2/6 lg:w-1/3"
        } h-16 lg:rounded-b-3xl rounded-b-2xl fixed mt-[-15px] top-0 left-0 right-0 mx-auto z-50 transition-all duration-300`}
      >
        <ul
          className={`flex items-center justify-center ${
            isScrolled
              ? "gap-6 lg:gap-8 text-sm mt-[20px] md:mt-5 lg:mt-7" // Jarak lebih rapat ketika di-scroll
              : "gap-2 lg:gap-0 lg:justify-around md:mt-5 lg:mt-7" // Default jarak sebelum di-scroll
          } p-2 lg:p-0  text-center text-fuchsia-100 mt-[29px] md:text-base text-[10px] lg:text-base`}
        >
          <li
            onClick={() => handleScrollToSection("hero")}
            className="hover:text-red-300 hover:cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => handleScrollToSection("skills")}
            className="hover:text-red-300 hover:cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => handleScrollToSection("experience")}
            className="hover:text-red-300 hover:cursor-pointer"
          >
            Experience
          </li>
          <li
            onClick={() => handleScrollToSection("projects")}
            className="hover:text-red-300 hover:cursor-pointer"
          >
            Projects
          </li>
        </ul>
      </div>

      <div className="logo w-full rounded-b-3xl text-end">
        <button className="bg-[#42677A] text-[#F6F6F6] md:w-36 md:h-11 md:text-base lg:w-32 w-16 h-7 lg:h-9 mt-1 lg:mt-2 rounded-3xl text-[8px] lg:text-base">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Navbar;
