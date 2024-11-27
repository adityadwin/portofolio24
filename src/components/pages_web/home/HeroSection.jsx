// const Hero = () => {
//   return (
//     <div className="container lg:px-14 sm:px-12 lg:flex flex-col lg:flex-row pb-10">
//       <div className="left-side lg:w-3/4 py-4 lg:py-12 ">
//         {/* Tambahkan animasi fade-in untuk teks */}
//         <h1 className="animate-fade-in text-[60px] lg:text-[110px] font-bold text-[#1E5775] leading-[45px] lg:leading-[90px] lg:w-[90%]">
//           Hi, nice to meet you👋
//         </h1>
//         <h2 className="animate-fade-in text-[45px] lg:text-[85px] font-bold lg:leading-[35px] leading-[45px] lg:mt-8 text-[#1E5775]">
//           my name is{" "}
//           <h2 className="lg:text-[70px] text-[45px] lg:mt-14">Aditya Dwi</h2>
//         </h2>
//         {/* Tambahkan animasi fade-in dengan delay */}
//         <p className="animate-fade-in-delayed mt-2 lg:mt-10 lg:w-4/5 w-full text-sm lg:text-lg text-justify">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, beatae
//           neque. Consectetur necessitatibus neque deleniti perferendis provident
//           aliquid inventore rem amet, commodi nemo. Possimus, ipsam.
//         </p>
//         <div className="count flex font-semibold gap-20 lg:gap-40 text-xl lg:text-2xl mt-2 lg:justify-start lg:items-start justify-center items-center ">
//           <h3 className="animate-fade-in">
//             40+
//             <p className="text-base lg:text-lg font-normal">Clients</p>
//           </h3>
//           <h3 className="animate-fade-in">
//             50+
//             <p className="text-base lg:text-lg font-normal">Projects</p>
//           </h3>
//           <h3 className="animate-fade-in">
//             5000+
//             <p className="text-base lg:text-lg font-normal">Work Hours</p>
//           </h3>
//         </div>
//       </div>
//       <div className="right-side mt-2 lg:mt-12 bg-[#42677A] rounded-2xl min-h-[200px] lg:max-h-[550px] lg:min-w-[490px] min-w-[100px] "></div>
//     </div>
//   );
// };

// export default Hero;
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate");
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top + scrollTop;
        const elementHeight = el.offsetHeight;

        // Konten akan muncul saat terlihat di viewport
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

    // Jalankan handleScroll untuk memeriksa elemen saat pertama kali load
    handleScroll();

    // Tambahkan event listener scroll
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener pada saat unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll(".count-up");
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const duration = 500; // Durasi dalam milidetik (setengah detik)
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

      // Menambahkan animasi saat angka muncul
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
    <div className="container lg:px-14 sm:px-12 lg:flex flex-col lg:flex-row pb-10">
      <div className="left-side lg:w-3/4 py-4 lg:py-12">
        {/* Animasi langsung aktif saat load */}
        <h1 className="scroll-animate opacity-0 text-[60px] lg:text-[110px] font-bold text-[#1E5775] leading-[45px] lg:leading-[90px] lg:w-[90%]">
          Hi, nice to meet you👋
        </h1>
        <h2 className="scroll-animate opacity-0 text-[45px] lg:text-[85px] font-bold lg:leading-[35px] leading-[45px] lg:mt-8 text-[#1E5775]">
          my name is{" "}
          <h2 className="lg:text-[70px] text-[45px] lg:mt-14">
            Aditya Dwi Nandra
          </h2>
        </h2>
        {/* Animasi fade-in langsung saat load */}
        <p className="scroll-animate opacity-0 mt-2 lg:mt-10 lg:w-4/5 w-full text-sm lg:text-lg text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, beatae
          neque. Consectetur necessitatibus neque deleniti perferendis provident
          aliquid inventore rem amet, commodi nemo. Possimus, ipsam.
        </p>
        <div className="count flex font-semibold gap-20 lg:gap-40 text-xl lg:text-2xl mt-2 lg:justify-start lg:items-start justify-center items-center">
          <div className="scroll-animate opacity-0">
            <h3 className="count-up" data-target="40">
              0+
            </h3>
            <p className="text-base lg:text-lg font-normal">Clients</p>
          </div>
          <div className="scroll-animate opacity-0">
            <h3 className="count-up" data-target="100">
              0+
            </h3>
            <p className="text-base lg:text-lg font-normal">Projects</p>
          </div>
          <div className="scroll-animate opacity-0">
            <h3 className="count-up" data-target="5000">
              0+
            </h3>
            <p className="text-base lg:text-lg font-normal">Work Hours</p>
          </div>
        </div>
      </div>

      {/* Right Side Box with Image and Animation */}
      <div className="right-side lg:w-2/5 mt-2 lg:mt-12 bg-[#42677A] rounded-2xl h-[400px] lg:h-[550px] lg:max-h-[550px] lg:min-w-[490px] min-w-[100px] opacity-0 scroll-animate animate-fade-right">
        <img
          src="https://i.ibb.co.com/m4hNPWx/Me.png"
          alt="Hero Image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
