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
const Navbar = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector(".logo").offsetHeight || 0; // Tinggi navbar
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      // Scroll ke target dengan offset
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex justify-center text-center px-2 lg:px-16 gap-1">
      <div className="logo w-full h-10 text-[#42677A] text-xs lg:text-2xl font-bold text-start lg:mt-2 mt-3">
        PORTOFOLIO
      </div>
      <div className="logo bg-[#1E5775] w-[48%] lg:w-1/3 h-16 lg:rounded-b-3xl rounded-b-2xl fixed mt-[-15px] top-0 left-0 right-0 mx-auto z-50">
        <ul className="flex gap-2 lg:gap-0 p-2 lg:p-0 lg:justify-around text-center text-fuchsia-100 mt-[29px] text-[10px] lg:text-base items-center justify-center">
          <li
            onClick={() => handleScroll("hero")}
            className="hover:text-red-300 hover:cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => handleScroll("skills")}
            className="hover:text-red-300 hover:cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => handleScroll("experience")}
            className="hover:text-red-300 hover:cursor-pointer"
          >
            Experience
          </li>
          <li
            onClick={() => handleScroll("projects")}
            className="hover:text-red-300 hover:cursor-pointer"
          >
            Projects
          </li>
        </ul>
      </div>
      <div className="logo w-full rounded-b-3xl text-end">
        <button className="bg-[#42677A] text-[#F6F6F6] lg:w-32 w-16 h-7 lg:h-9 mt-1 lg:mt-2 rounded-3xl text-[8px] lg:text-base">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Navbar;
