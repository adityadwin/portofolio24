const Herodua = () => {
  return (
    <div className="container lg:px-14 sm:px-12 lg:flex flex-col lg:flex-row bg-violet-500">
      <div className="left-side lg:w-3/4 py-4 lg:py-12">
        {/* Tambahkan animasi fade-in untuk teks */}
        <h1 className="animate-fade-in text-[60px] lg:text-[120px] font-bold text-[#1E5775] leading-[45px] lg:leading-[90px]">
          Hi, nice to meet you👋
        </h1>
        <h2 className="animate-fade-in text-[45px] lg:text-[100px] font-bold lg:leading-[45px] leading-[45px] lg:mt-8 text-[#1E5775]">
          my name is{" "}
          <h2 className="lg:text-[80px] text-[45px] lg:mt-14">Aditya Dwi</h2>
        </h2>
        {/* Tambahkan animasi fade-in dengan delay */}
        <p className="animate-fade-in-delayed mt-2 lg:mt-10 lg:w-4/5 w-11/12 text-sm lg:text-lg text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, beatae
          neque. Consectetur necessitatibus neque deleniti perferendis provident
          aliquid inventore rem amet, commodi nemo. Possimus, ipsam.
        </p>
        <div className="count flex font-semibold gap-16 lg:gap-52 text-xl lg:text-2xl mt-2">
          <h3 className="animate-fade-in">
            40+
            <p className="text-base lg:text-lg font-normal">Clients</p>
          </h3>
          <h3 className="animate-fade-in">
            50+
            <p className="text-base lg:text-lg font-normal">Projects</p>
          </h3>
          <h3 className="animate-fade-in">
            5000+
            <p className="text-base lg:text-lg font-normal">Work Hours</p>
          </h3>
        </div>
      </div>
      {/* Right-side Box */}
      <div className="right-side lg:w-2/5 h-[60%] w-full lg:h-full mt-2 lg:mt-12 bg-[#42677A] rounded-2xl min-h-[600px] min-w-[100px]"></div>
    </div>
  );
};

export default Herodua;
