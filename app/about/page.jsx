import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">About Us</h1>
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Md Zahid Hossain
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          Welcome! I am Md Zahid Hossain, passionate about building modern
          technology solutions. I focus on web development, software
          engineering, and exploring the latest tech innovations.
        </p>
        <p className="text-gray-700 text-lg">
          My projects involve using tools like JavaScript, React, Next.js,
          MongoDB, and Cloudinary to create efficient and scalable applications.
          I aim to blend creativity with technology to deliver the best digital
          experiences.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-semibold">
            JavaScript
          </span>
          <span className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full font-semibold">
            React
          </span>
          <span className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full font-semibold">
            Next.js
          </span>
          <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full font-semibold">
            MongoDB
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
