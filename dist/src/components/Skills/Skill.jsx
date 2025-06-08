





import React from "react";

const skills = [
  { name: "CSS", level: 10 },
  { name: "Tailwind", level: 6 },
  { name: "Javascript", level: 5 },
  { name: "HTML", level: 10 },
  { name: "C++", level: 7 },
  { name: "React", level: 7 },
  { name: "Node.js", level: 4 },
];

const SkillsSection = () => {
  return (
    <section className="bg-black text-white py-12 w-full h-[100vh]" id="skill">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-[4rem] font-bold mb-10 flex items-center justify-center gap-2 mt-[3rem]">
          My skills
          <span className="text-purple-500 text-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-18 h-18">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17H7m10 0V7m0 10L7 7" />
            </svg>

          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div key={skill.name} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">{skill.name}</span>
                <div className="flex gap-1">
                  {[...Array(10)].map((_, dotIdx) => (
                    <span
                      key={dotIdx}
                      className={`w-3 h-3 rounded-full ${
                        dotIdx < skill.level
                          ? "bg-gradient-to-r from-pink-500 to-purple-700"
                          : "border border-purple-700"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
              {/* Horizontal line below each row */}
              <div className="border-b border-purple-700/40"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
