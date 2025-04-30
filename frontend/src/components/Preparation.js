import React from "react";

export default function PreparationOptions() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-black mb-6 text-center">Learning Options</h1>
      <p className="text-lg text-gray-700 mb-12 text-center" style={{ fontFamily: "sans-serif", fontSize: "17px" }}>
        Empower your certification journey with our comprehensive preparation options.
        Choose from expert-led training, and real exam-like mock tests to achieve exam
        success confidently.
      </p>

      {/* Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        
        {/* Card 1: Live Online Training */}
        <div className="bg-purple-100 rounded-2xl shadow-2xl p-8 w-80 text-center flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-black mb-4">Live Online Training</h2>
          <ul className="text-gray-700 text-left text-base list-disc mb-6 space-y-2">
            <li>Live, Online, Zoom (Sat/Fri ME timings)</li>
            <li>7 weeks (5 hrs/week) – 35 hrs (35 contact hours)</li>
            <li>Practical Project Practitioner course (48 hrs recorded)</li>
            <li>Weekly Tests (7 × 60) = 420 questions</li>
            <li>Mock Exam Simulators (5 × 180) = 900 questions</li>
            <li>PMI Licensed Content + 1:1 Discussion Support</li>
          </ul>

          {/* Buttons side by side */}
          <div className="flex justify-center gap-4 mt-auto w-full">
            <a href="https://exams.edzest.org/learn/PMP-training-Apr-25-batch" target="_blank" rel="noopener noreferrer" className="w-1/2">
              <button className="bg-[#4748ac] hover:bg-[#3737ac] text-white font-semibold py-2 rounded w-full">
                Learn More
              </button>
            </a>
            <a href="/training" className="w-1/2">
              <button className="bg-[#4748ac] hover:bg-[#3737ac] text-white font-semibold py-2 rounded w-full">
                Explore More
              </button>
            </a>
          </div>
        </div>

        {/* Card 2: Recorded Videos Training (No Changes) */}
        <div className="bg-purple-100 rounded-2xl shadow-2xl p-8 w-80 text-center flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-black mb-4">Recorded Videos Training</h2>
          <ul className="text-gray-700 text-left text-base list-inside mb-6 space-y-2">
            <li>Learn at your own pace through recorded videos and quizzes.</li>
          </ul>
          <a href="https://exams.edzest.org/learn/PMP-selfstudy" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#4748ac] hover:bg-[#3737ac] text-white font-semibold py-2 px-6 rounded mt-6">
              Learn More
            </button>
          </a>
        </div>

        {/* Card 3: Mock Exams */}
        <div className="bg-purple-100 rounded-2xl shadow-2xl p-8 w-80 text-center flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold text-black mb-4">Mock Exams</h2>
          <ul className="text-gray-700 text-left text-base list-disc mb-6 space-y-2">
            <li>ECO domain-wise mini tests (People, Process, Business Environment)</li>
            <li>Mock Simulators (5 × 180 min) – 900 questions</li>
            <li>Detailed Video Explanations</li>
            <li>Analytics and Reports</li>
            <li>Free Access to Group Revision Seminars</li>
          </ul>

          {/* Buttons side by side */}
          {/* Buttons side by side */}
<div className="flex justify-center gap-4 mt-auto w-full">
  <a href="https://exams.edzest.org/learn/PMP-mock-exams-by-edzest" target="_blank" rel="noopener noreferrer" className="w-1/2">
    <button className="bg-[#4748ac] hover:bg-[#3737ac] text-white font-semibold py-2 rounded w-full">
      Learn More
    </button>
  </a>
  <a href="/mock-exam" className="w-1/2">
    <button className="bg-[#4748ac] hover:bg-[#3737ac] text-white font-semibold py-2 rounded w-full">
      Explore More
    </button>
  </a>
</div>

        </div>

      </div>
    </div>
  );
}
