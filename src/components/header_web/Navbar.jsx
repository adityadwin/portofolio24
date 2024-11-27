const Navbar = () => {
  return (
    <div className="flex justify-center text-center px-1 lg:px-16 gap-1">
      <div className="logo w-full h-10 text-[#42677A] text-xs lg:text-2xl font-bold text-start lg:mt-2 mt-3">
        PORTOFOLIO
      </div>
      <div className="logo bg-[#1E5775] w-[45%] lg:w-1/3 h-16 lg:rounded-b-3xl rounded-b-2xl fixed mt-[-15px] top-0 left-0 right-0 mx-auto z-50">
        <ul className="flex gap-2 lg:gap-0 p-2 lg:p-0 lg:justify-around text-center text-fuchsia-100 mt-[28px] text-[11px] lg:text-base items-center justify-center">
          <li className="hover:text-slate-300">Home</li>
          <li>Experience</li>
          <li>Projects</li>
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
