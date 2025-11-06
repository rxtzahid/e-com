import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-yellow-200 to-orange-200 flex items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Contact Me</h1>
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
          Md Zahid Hossain
        </h2>
        <p className="text-gray-700 text-lg mb-2">📞 Phone: +880 1234 567890</p>
        <p className="text-gray-700 text-lg mb-6">
          ✉️ Email: zahid@example.com
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
