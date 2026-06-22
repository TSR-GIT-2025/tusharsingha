'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const useTypingEffect = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, speed, text]);

  return { displayText, isComplete };
};

const skills = [
  // Core Programming Languages
  { name: 'JavaScript', level: 40 },
  { name: 'TypeScript', level: 10 },
  { name: 'Java', level: 30 },

  // Frontend Technologies
  { name: 'React.js', level: 70 },
  { name: 'Next.js', level: 50 },
  { name: 'Angular.js', level: 30 },
  { name: 'Redux', level: 15 },

  // Backend Technologies
  { name: 'Node.js', level: 25 },
  { name: 'Express.js', level: 10 },
  { name: 'NestJS', level: 5 },

  // Databases & ORM
  { name: 'MongoDB', level: 55 },
  { name: 'PostgreSQL', level: 20 },
  { name: 'MySQL', level: 40 },

  // DevOps & Tools
  { name: 'Git', level: 75 },
  { name: 'Docker', level: 25 },
  { name: 'AWS', level: 11 },
];

const Jouney = [
  { 
    title: 'Founder Journey & Personal Challenges', 
    company: 'Cyber Hub (Concept Stage)', 
    duration: '2026 - Present', 
    description: `2026 became one of the most challenging years of my journey. While pursuing my degree, I shifted much of my focus toward exploring the idea of building Cyber Hub, a startup vision centered around technology and innovation. I spent significant time researching business models, product ideas, and long-term goals instead of focusing solely on academics. 
 
 However, this period also brought several setbacks. Ongoing health issues, financial pressure, debt obligations, and the lack of stable employment affected both my productivity and consistency. Technical limitations, including hardware and storage problems with my laptop, slowed down project development and prevented me from building as actively as I had planned. 
 
 Due to health and financial difficulties, I was unable to appear for my 6th-semester examinations. The year became a period of reflection, resilience, and reassessment rather than rapid growth. While progress was slower than expected, the experience taught me valuable lessons about risk management, personal health, discipline, and balancing ambition with long-term stability. 
 
 Currently, I am focused on improving my health, seeking employment opportunities, strengthening my technical skills, and laying a more sustainable foundation for future projects and entrepreneurial goals.` 
  },
  {
    title: 'Frontend Developer',
    company: 'TSR',
    duration: '2025 - Present',
    description: "In my 4th semester, I focused on developing modern web applications using React, Next.js, and Angular.js. I worked on creating responsive, user-friendly interfaces while strengthening my foundation in Java and Data Structures & Algorithms (DSA). This was also the phase where I actively documented my journey through TSR and started building real-world projects to sharpen my frontend skills.\n\nMoving into my 5th semester, I expanded into full-stack development by learning Node.js, SQL, and backend architecture. I began building enterprise-level and production-ready applications using technologies like React, Next.js, Angular, PostgreSQL, Vercel, and Render. Alongside development, I deepened my understanding of Java, OOP, and advanced DSA, preparing myself for professional software engineering roles and large-scale project development."
  },
  {
    title: "Software Developer",
    company: "Goal",
    duration: "2024",
    description: "I was in my 2nd semester of BCA at Siliguri College, I got my first laptop (MacBook Air M1) on March 15, 2024. This marked the beginning of my serious journey into web development. My coursework included Discrete Mathematics, Programming in C, and Web Technology, where I learned the fundamentals of programming and built my first website using HTML, CSS, and JavaScript. I also completed assignments for the Web Technology subject, which helped me understand frontend development better.\n\nMoving into my 3rd semester, I dived deeper into core computer science concepts. My subjects included Computer Architecture, Fundamentals of Operating Systems, Computer Networks, and Data Structures & Algorithms (DSA). This semester helped me grasp the internal workings of computers, networking, and operating systems while also strengthening my problem-solving skills with DSA. It was during this time that I started focusing on C++ for problem-solving, preparing myself for full-stack development."
  },

  
];

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 mt-4"
          >
            My journey, experience, and the skills that shape my development approach
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="prose prose-invert backdrop-blur-xl bg-gray-900/30 p-6 rounded-2xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
              <p className="text-gray-300 leading-relaxed text-justify tracking-tight mb-3">
                I'm a passionate Full Stack Developer based in Bagdogra, West Bengal, with a keen interest in building
                exceptional digital experiences. My journey in web development started with curiosity and has evolved
                into a professional pursuit of creating innovative solutions.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify tracking-tight">
                I specialize in building modern web applications using cutting-edge technologies. My focus is on
                creating responsive, user-friendly interfaces while ensuring clean, maintainable code.
              </p>
            </div>

            {/* Journey Section */}
            <div className="space-y-6 mt-8 max-h-[800px] overflow-y-auto pr-4 scrollbar-thin scrollbar-track-gray-900/30 scrollbar-thumb-indigo-500/50 hover:scrollbar-thumb-indigo-500/70">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 sticky top-0 bg-black/80 backdrop-blur-sm py-2 z-10">Journey</h3>
              
              <div className="space-y-6">
                {Jouney.map((exp, index) => {
                  const { displayText } = useTypingEffect(exp.description, 10);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="relative pl-8 border-l border-indigo-500/20 backdrop-blur-xl bg-gray-900/30 p-6 rounded-2xl hover:bg-gray-900/40 transition-all duration-300"
                    >
                      <div className="absolute w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full -left-[6.5px] top-8" />
                      <h4 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500">{exp.title}</h4>
                      <p className="text-indigo-400 text-sm">{exp.company} | {exp.duration}</p>
                      <p className="text-gray-400 mt-2 text-sm text-justify leading-normal tracking-normal whitespace-pre-line">
                        {displayText}
                        <span className="animate-blink">|</span>
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Experiences Section */}
<div className="space-y-6 mt-8 max-h-[295px] overflow-y-auto pr-4 scrollbar-thin scrollbar-track-gray-900/30 scrollbar-thumb-indigo-500/50 hover:scrollbar-thumb-indigo-500/70">
  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 sticky top-0 bg-black/80 backdrop-blur-sm py-2 z-10">
    Experiences
  </h3>

  <div className="relative border-l border-indigo-500/20 backdrop-blur-xl bg-gray-900/30 p-6 rounded-2xl hover:bg-gray-900/40 transition-all duration-300 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500/50 shadow-lg hover:shadow-purple-500/10">
    <div className="absolute w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full -left-[6.5px] top-6" />
    
    {(() => {
      const { displayText } = useTypingEffect(
        "Throughout my journey in web development, I've gained hands-on experience with modern technologies and best practices. I've worked on various projects that have helped me develop a strong foundation in both frontend and backend development. My experience includes building responsive web applications, implementing user authentication, managing databases, and deploying applications to production environments.\n\nI have worked with frameworks like React.js, Next.js, and Angular.js for frontend development, while also building backend systems using Node.js, Express.js, and NestJS. My expertise extends to database management, DevOps practices, and cloud services like AWS and Docker.",
        30
      );
      return (
        <>
          <p className="text-gray-300 leading-relaxed text-justify tracking-tight whitespace-pre-line">
            {displayText}
            <span className="animate-blink">|</span>
          </p>
        </>
      );
    })()} 
  </div>
</div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-xl bg-gray-900/30 p-6 rounded-2xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-6">Skills & Technologies</h3>
              <div className="grid gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2 group"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill.name}</span>
                      <span className="text-indigo-400 text-sm group-hover:text-indigo-300 transition-colors duration-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden group-hover:bg-gray-700 transition-colors duration-300">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:from-indigo-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-colors duration-300"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Skills */}
            <div className="backdrop-blur-xl bg-gray-900/30 p-6 rounded-2xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-4">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                'Git',
                'REST APIs',
                'UI/UX Design',
                'Responsive Design',
                'SEO',
                'Performance Optimization',
                'Cloud Services',
                'CI/CD',
                'Testing',
                'Agile Development',
                'System Design',
                'Database Design',
                'API Development',
                'Security Best Practices'
              ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-gray-300 text-sm hover:from-indigo-500/20 hover:to-purple-500/20 hover:border-indigo-500/30 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 3s;
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
    </section>
  );
}
