import React from 'react';
import mockphotoImg from "../Assets/mockphoto.png"; 
import fulllengthImg from "../Assets/fulllength.png"; 
import minimockImg from "../Assets/minimock.png"; 
import PersonalizedImg from "../Assets/personalized.png"; 
import Contact from "./Contact"; 
import Footer from "./Footer"; 

const PMPPracticeMockExams = () => {
  return (
    <div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between h-[70vh] px-6 md:px-16" style={{fontFamily:"sans-serif", fontSize:"17px"}}>
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-black-600">
            PMP® Practice <br />
            Mock Exams by <span className="text-[#4748ac]">Edzest</span>
          </h1>
          <p className="text-gray-500 mt-4">
            Get Real Exam-Like Questions and Expert Insight
          </p>
          <a href="https://exams.edzest.org/learn/PMP-mock-exams-by-edzest" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#4748ac] text-white px-6 py-3 rounded-lg mt-4 hover:bg-[#3737ac] transition">
              Buy Now
            </button>
          </a>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src={mockphotoImg}
            alt="PMP Training"
            className="rounded-lg max-h-96"
          />
        </div>
      </div>

      {/* What's Included Section */}
      <div className="bg-purple-100 py-12" style={{fontFamily:"sans-serif", fontSize:"17px"}}>
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
            What's Included:
          </h1>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img src={minimockImg} alt="Mini Mock Exams" className="max-w-[120px] mb-4" />
              <h2 className="text-xl font-bold text-[#4748ac] mb-2">ECO Domain-wise Mini Tests</h2>
              <p className="text-gray-600 text-center">
                Practice mini tests focused on People, Process, and Business Environment domains.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img src={fulllengthImg} alt="Full Mock Exams" className="max-w-[120px] mb-4" />
              <h2 className="text-xl font-bold text-[#4748ac] mb-2">Full-Length Mock Simulators</h2>
              <p className="text-gray-600 text-center">
                5 complete full-length simulations with 180 questions each — total 900 real exam-like questions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img src={PersonalizedImg} alt="Video Explanation" className="max-w-[120px] mb-4" />
              <h2 className="text-xl font-bold text-[#4748ac] mb-2">Detailed Video Explanations</h2>
              <p className="text-gray-600 text-center">
                Every answer explained clearly via recorded expert video solutions.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img src={mockphotoImg} alt="Analytics" className="max-w-[120px] mb-4" />
              <h2 className="text-xl font-bold text-[#4748ac] mb-2">Analytics & Reports</h2>
              <p className="text-gray-600 text-center">
                Track your performance with detailed analytics and personalized reports after each test.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img src={mockphotoImg} alt="Group Sessions" className="max-w-[120px] mb-4" />
              <h2 className="text-xl font-bold text-[#4748ac] mb-2">Group Revision Seminars</h2>
              <p className="text-gray-600 text-center">
                Free access to group-based doubt clearing and live revision webinars.
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            {/* <a href="https://exams.edzest.org/learn/PMP-mock-exams-by-edzest" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#4748ac] hover:bg-[#3737ac] text-white font-semibold py-3 px-8 rounded-lg text-lg">
                Learn More
              </button>
            </a> */}
            <a href="https://exams.edzest.org/learn/PMP-mock-exams-by-edzest" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#4748ac] hover:bg-[#3737ac] text-white font-semibold py-3 px-8 rounded-lg text-lg">
                Enroll Now
              </button>
            </a>
          </div>

        </div>
      </div>

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
      
    </div>
  );
};

export default PMPPracticeMockExams;
