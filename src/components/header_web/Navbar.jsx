const Navbar = () => {
  return (
    <div className="flex justify-center text-center px-1 lg:px-16 gap-1">
      <div className="logo w-full h-10 text-[#42677A] text-xs lg:text-2xl font-bold text-start lg:mt-2 mt-3">
        PORTOFOLIO
      </div>
      <div className="logo bg-[#1E5775] w-2/5 lg:w-1/3 h-14 lg:rounded-b-3xl rounded-b-2xl fixed mt-[-15px] top-0 left-0 right-0 mx-auto z-50">
        <ul className="flex gap-2 lg:gap-0 p-2 lg:p-0 lg:justify-around text-center text-fuchsia-100 mt-6 text-[11px] lg:text-base">
          <li className="hover:text-slate-300">Home</li>
          <li>Experience</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="logo w-full rounded-b-3xl text-end">
        <button className="bg-[#42677A] text-[#F6F6F6] lg:w-32 w-20 h-8 lg:h-9 mt-1 lg:mt-2 rounded-3xl text-[10px] lg:text-base">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Navbar;
