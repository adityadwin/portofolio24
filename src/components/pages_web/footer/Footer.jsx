const Footer = () => {
  return (
    <footer className="bg-[#7297AB] text-[#122934] py-4">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        {/* Left - Portofolio */}
        <div className="text-xl font-bold mb-4 lg:mb-0">PORTOFOLIO</div>

        {/* Center - Copyright */}
        <div className="text-center mb-4 lg:mb-0 font-semibold">
          &copy;{new Date().getFullYear()} aditya-dwi. All rights reserved.
        </div>

        {/* Right - Social Media Icons */}
        <div className="flex space-x-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:scale-110 transform transition duration-200"
          >
            <img
              src="https://img.icons8.com/?size=100&id=DpOQ6G5p47f0&format=png&color=000000"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:scale-110 transform transition duration-200"
          >
            <img
              src="https://img.icons8.com/?size=100&id=fmFqQmR0UdsR&format=png&color=000000"
              alt="GitHub"
              className="w-8 h-8"
            />
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:scale-110 transform transition duration-200"
          >
            <img
              src="https://img.icons8.com/?size=100&id=A4uyUh8LBg90&format=png&color=000000"
              alt="Telegram"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
