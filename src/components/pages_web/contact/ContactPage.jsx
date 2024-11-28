import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with email-sending logic
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "adityadwinandra1@gmail.com",
        subject: "New Message from Contact Form",
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Message: ${formData.message}
        `,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setStatus("Message sent successfully!");
        } else {
          setStatus("Failed to send message.");
        }
      })
      .catch(() => {
        setStatus("Error occurred while sending message.");
      });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8 tracking-tight">
          Contact Me
        </h2>

        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-white shadow-2xl rounded-xl p-8"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700 mb-2 block"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-lg font-medium text-gray-700 mb-2 block"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="text-lg font-medium text-gray-700 mb-2 block"
              >
                Your Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-lg font-medium text-gray-700 mb-2 block"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            {status && (
              <div
                className={`p-3 text-center rounded-lg ${
                  status.includes("successfully")
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {status}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
