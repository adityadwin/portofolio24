import { useEffect } from "react";

const Experience = () => {
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

  const icons1 = [
    {
      title: "Kodepedia Matari Studio  | Intership",
      description: "Mentor | August 2023 - September 2023",
      list: [
        "Mendapatkan total 35+ klien desain melalui platform Shopee dengan rating kepuasan 4.9/5.0.",
        "Berhasil menyelesaikan 19 proyek desain yang berbeda dalam waktu 5 hari.",
        "Melakukan instalasi OS Windows, Linux, Debian dan sistem operasi android.",
        "Memberikan solusi teknis sesuai kebutuhan klien secara efektif dan efisien.",
        "Meningkatkan kualitas perangkat klien melalui troubleshooting dan upgrade perangkat keras.",
      ],
    },
    {
      title: "PT Ruang Raya Indonesia  | Studi Independen",
      description: "Frontend Engineering | August 2022 - December 2022",
      list: [
        "Mengimplementasikan desain responsif untuk memastikan website optimal di berbagai perangkat.",
        "Memahami Git version control untuk pengelolaan revisi proyek dan rollback commit.",
        "Memahami sintaks JavaScript serta konsep fundamental ReactJS (JSX, Props, State).",
        "Membuat fitur interaktif menggunakan ReactJS untuk meningkatkan pengalaman pengguna.",
        "Memahami arsitektur RESTful API dan mengintegrasikannya pada pengembangan Frontend.",
      ],
    },
    {
      title: "Self Employed  | Freelancer",
      description: "Graphic Designer & IT Technician| January 2021 - Present",
      list: [
        "Menyampaikan materi CorelDraw kepada peserta kursus untuk memahami konsep desain.",
        "Mendampingi peserta dalam mengerjakan tugas sederhana desain hingga selesai.",
        "Berkolaborasi dalam tim untuk mengembangkan sebuah website e-learning.",
        "Membantu membuat UML diagram untuk memetakan alur sistem dalam proyek.",
      ],
    },
  ];

  return (
    <div
      id="skills"
      className="container w-full h-auto pt-10 pb-8 lg:px-16 px-4 border-t-8 border-[#1E5775]"
    >
      {/* Title Section */}
      <div className="flex flex-col lg:flex-row gap-x-20 mb-8">
        <div className="box scroll-animate opacity-0 flex justify-center items-center text-center lg:w-[200px] w-[170px] h-[60px] lg:h-[75px] bg-[#42677A] text-white rounded-bl-[50px] rounded-tr-[50px] lg:text-2xl text-xl font-semibold">
          Experience
        </div>
      </div>

      {/* Icons1 Section (Card Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {icons1.map((icon, index) => (
          <div
            key={index}
            className="card scroll-animate opacity-0 p-6 bg-[#42677A] rounded-lg shadow-lg w-[100%]md:w-[100%] lg:w-[100%] hover:scale-105 transition-all duration-300"
          >
            <h1 className="text-lg font-bold text-[#fff] mt-4">{icon.title}</h1>
            <h3 className="text-base font-semibold text-[#fff] mt-2">
              {icon.description}
            </h3>
            <ul className="mt-4 text-sm font-normal text-[#fff] list-disc pl-5">
              {icon.list.map((item, idx) => (
                <li key={idx} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
