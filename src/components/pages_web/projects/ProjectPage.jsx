import { useState, useEffect } from "react";

const ProjectPage = () => {
  const [category, setCategory] = useState("Website");
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData = {
    Website: [
      {
        image:
          "https://admin.12grids.com/uploads/blogs/original_cover_images/Webp/Future_Of_Responsive_Web_Design_12Grids.webp",
        title: "Website Project 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        image:
          "https://cdn.dribbble.com/userupload/17109054/file/still-82f9efe541dc1498761c00a3514855bd.png?resize=400x0",
        title: "Website Project 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5Vp8vF7IhdmIiz0PuqY3TEnDPRhzvCMBUw&s",
        title: "Website Project 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5Vp8vF7IhdmIiz0PuqY3TEnDPRhzvCMBUw&s",
        title: "Website Project 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5Vp8vF7IhdmIiz0PuqY3TEnDPRhzvCMBUw&s",
        title: "Website Project 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5Vp8vF7IhdmIiz0PuqY3TEnDPRhzvCMBUw&s",
        title: "Website Project 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
    ],
    Design: [
      {
        image:
          "https://admin.12grids.com/uploads/blogs/original_cover_images/Webp/Future_Of_Responsive_Web_Design_12Grids.webp",
        title: "Website Project 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        image:
          "https://cdn.dribbble.com/userupload/17109054/file/still-82f9efe541dc1498761c00a3514855bd.png?resize=400x0",
        title: "Website Project 6",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5Vp8vF7IhdmIiz0PuqY3TEnDPRhzvCMBUw&s",
        title: "Website Project 7",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5Vp8vF7IhdmIiz0PuqY3TEnDPRhzvCMBUw&s",
        title: "Website Project 8",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5Vp8vF7IhdmIiz0PuqY3TEnDPRhzvCMBUw&s",
        title: "Website Project 9",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5Vp8vF7IhdmIiz0PuqY3TEnDPRhzvCMBUw&s",
        title: "Website Project 10",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
    ],
  };

  const currentCards = cardsData[category];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 4 >= currentCards.length) {
        return 0; // Go back to the first set of cards
      }
      return prevIndex + 4; // Move to the next set of cards
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex - 4 < 0) {
        return Math.floor((currentCards.length - 1) / 4) * 4; // Go to the last set of cards
      }
      return prevIndex - 4; // Move to the previous set of cards
    });
  };

  // Reset currentIndex when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [category]);

  return (
    <div
      id="projects"
      className="container mx-auto py-8 lg:px-16 px-2 border-t-8 border-[#1E5775]"
    >
      {/* Title Section */}
      <div className="flex flex-col lg:flex-row gap-x-20 mb-8">
        <div className="box scroll-animate opacity-0 flex justify-center items-center text-center lg:w-[200px] w-[170px] h-[60px] lg:h-[75px] bg-[#42677A] text-white rounded-bl-[50px] rounded-tr-[50px] lg:text-2xl text-xl font-semibold">
          Projects
        </div>
      </div>

      {/* Buttons for category */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setCategory("Website")}
          className={`px-4 py-2 rounded ${
            category === "Website" ? "bg-[#42677A] text-white" : "bg-gray-200"
          }`}
        >
          Website
        </button>
        <button
          onClick={() => setCategory("Design")}
          className={`px-4 py-2 rounded ${
            category === "Design" ? "bg-[#42677A] text-white" : "bg-gray-200"
          }`}
        >
          Design
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4">
        {currentCards
          .slice(currentIndex, currentIndex + 4) // Show 4 cards per slide
          .map((card, index) => (
            <div
              key={index}
              className="bg-[#42677A] p-4 rounded shadow-md hover:scale-105 transition transform duration-300 flex flex-col"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-2/3 object-cover rounded mb-4"
              />
              <h3 className="lg:text-xl text-sm font-bold text-white">
                {card.title}
              </h3>
              <p className="text-sm text-white">{card.description}</p>
            </div>
          ))}
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-center gap-x-8 items-center mt-6">
        <button
          onClick={prevSlide}
          className="bg-[#42677A] px-4 py-2 rounded hover:bg-gray-300 hover:text-[#42677A] text-white"
        >
          Prev
        </button>
        <div className="flex space-x-1">
          {Array.from({
            length: Math.ceil(currentCards.length / 4), // Adjust for 4 cards per slide
          }).map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex / 4 === index ? "bg-blue-600" : "bg-gray-300 "
              }`}
            ></span>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="bg-[#42677A] px-4 py-2 rounded hover:bg-gray-300 hover:text-[#42677A] text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;
