'use client'

import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useCallback } from 'react';

const projects = [
  
  {
    title: 'Modern Portfolio',
    description: 'A modern portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, and dynamic project showcasing.',
    video: 'https://player.vimeo.com/video/1064672530?h=2fc0648894&autoplay=0&loop=1&background=1',
    poster: '/projects/portfolio-poster.jpg',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/tusharsingha/tusharsingha.in',
    live: 'https://tusharsingha.in',
  },

  {
    title: 'Blog Website',
    description: 'A dynamic personal blogging website with features like video uploading, user interaction through comments and likes, and responsive design.',
    video: '/projects/project2.mp4',
    poster: '/project2.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/yourusername/personal-vlog-website',
    live: 'https://personalvlogsite.com',
  },

{
  title: 'E-commerce',
  description: 'Full-stack e-commerce platform with features like user authentication, product management, and secure payment integration.',
  video: '/projects/project2.mp4',
  poster: '/project2.jpg',
  technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  github: 'https://github.com/yourusername/project2',
  live: 'https://project2.com',
},

{
  title: 'Fitness Tracker',
  description: 'A fitness website that allows users to log their workouts, track calories, water intake, and monitor progress with detailed analytics and charts.',
  video: '/projects/health-tracker.mp4',
  poster: '/health-tracker.jpg',
  technologies: ['React Native', 'Node.js', 'MongoDB', 'Chart.js'],
  github: 'https://github.com/yourusername/health-tracker',
  live: 'https://fitnesstrackerapp.com',
},

{
  title: 'Goal Tracker',
  description: 'A productivity website that helps users set, manage, and track personal or professional goals with streak counters, reminders, and progress visualization.',
  video: '/projects/goal-tracker.mp4',
  poster: '/goal-tracker.jpg',
  technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Tailwind CSS'],
  github: 'https://github.com/yourusername/goal-tracker',
  live: 'https://goaltrackerapp.com',
},

{
  title: 'Finance Tracker',
  description: 'A finance tracking website that helps users manage expenses, set budgets, and analyze spending patterns through interactive graphs.',
  video: '/projects/finance-tracker.mp4',
  poster: '/finance-tracker.jpg',
  technologies: ['React', 'Firebase', 'Chart.js', 'Redux'],
  github: 'https://github.com/yourusername/finance-tracker',
  live: 'https://financetrackerapp.com',
},

{
  title: 'Task Management',
  description: 'A collaborative task management website with real-time updates and team collaboration features.',
  video: '/projects/project3.mp4',
  poster: '/project3.jpg',
  technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
  github: 'https://github.com/yourusername/project3',
  live: 'https://project3.com',
},

{
  title: 'Habit Tracker',
  description: 'A habit tracking website to help users build positive routines, maintain streaks, and improve productivity through gamified experiences.',
  video: '/projects/habit-tracker.mp4',
  poster: '/habit-tracker.jpg',
  technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
  github: 'https://github.com/yourusername/habit-tracker',
  live: 'https://habittrackerapp.com',
},

{
  title: 'Investment Tracker',
  description: 'A portfolio management website that helps users track their stock and crypto investments, analyze portfolio growth, and get live market updates.',
  video: '/projects/portfolio-tracker.mp4',
  poster: '/portfolio-tracker.jpg',
  technologies: ['React', 'Node.js', 'MongoDB', 'Alpha Vantage API'],
  github: 'https://github.com/yourusername/portfolio-tracker',
  live: 'https://portfoliotrackerapp.com',
},

{
  title: 'Learning Dashboard',
  description: 'A personal learning management system (LMS) to track your progress in online courses, tutorials, and skill acquisition. Helps organize study schedules and track achievements.',
  video: '/projects/learning-dashboard.mp4',
  poster: '/learning-dashboard.jpg',
  technologies: ['React', 'Next.js', 'Tailwind CSS', 'Firebase'],
  github: 'https://github.com/yourusername/learning-dashboard',
  live: 'https://learningdashboardapp.com',
},

{
  title: 'Productivity Tracker',
  description: 'A productivity website designed to improve daily habits, manage tasks with a to-do list, and analyze productivity using visual analytics and Pomodoro timers.',
  video: '/projects/productivity-tracker.mp4',
  poster: '/productivity-tracker.jpg',
  technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
  github: 'https://github.com/yourusername/productivity-tracker',
  live: 'https://productivitytrackerapp.com',
},

{
  title: 'Networking Platform',
  description: 'A professional networking website to connect with like-minded individuals, build communities, and share ideas on topics like entrepreneurship, finance, and coding.',
  video: '/projects/networking-platform.mp4',
  poster: '/networking-platform.jpg',
  technologies: ['Next.js', 'Firebase', 'WebSockets'],
  github: 'https://github.com/yourusername/networking-platform',
  live: 'https://networkingplatformapp.com',
},

{
  title: 'Books Tracker',
  description: 'An website to track books you’ve read, manage learning resources, write notes, and create mind maps to consolidate knowledge and inspire continuous learning.',
  video: '/projects/book-tracker.mp4',
  poster: '/book-tracker.jpg',
  technologies: ['MERN Stack', 'MongoDB', 'Tailwind CSS'],
  github: 'https://github.com/yourusername/book-tracker',
  live: 'https://booktrackerapp.com',
},

{
  title: 'Apps Space',
  description: 'A platform that showcases all your apps and projects, allowing users to explore your coding journey, track your app developments, and access innovative project showcases.',
  video: '/projects/apps-space.mp4',
  poster: '/apps-space.jpg',
  technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
  github: 'https://github.com/yourusername/apps-space',
  live: 'https://appsspace.com',
},

{
  title: 'Future Planner',
  description: 'A comprehensive future planning website that helps users set long-term goals, create actionable plans, and track progress across career, finance, health, and personal growth areas. Includes reminders, goal visualization, and progress analytics.',
  video: '/projects/future-planner.mp4',
  poster: '/future-planner.jpg',
  technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
  github: 'https://github.com/yourusername/future-planner',
  live: 'https://futureplannerapp.com',
},

{
  title: 'Skills Mastery',
  description: 'A comprehensive platform to track and improve your soft skills, including communication, leadership, time management, and more. Features progress analytics, skill-based challenges, and personalized learning suggestions.',
  video: '/projects/skills-mastery.mp4',
  poster: '/skills-mastery.jpg',
  technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
  github: 'https://github.com/yourusername/skills-mastery',
  live: 'https://skillsmastery.com',
},

{
  title: 'Entrepreneur Map',
  description: 'A strategic life planner that helps entrepreneurs map their goals, plan milestones, and organize their life according to different age phases and business stages.',
  video: '/projects/entrepreneur-map.mp4',
  poster: '/entrepreneur-map.jpg',
  technologies: ['Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB'],
  github: 'https://github.com/yourusername/entrepreneur-map',
  live: 'https://entrepreneurmap.com',
},

{
  title: 'Life Roadmap',
  description: 'A unique platform designed to help users plan and track their life goals across different age phases. From personal development to career milestones, users can visualize their progress, set future goals, and stay motivated through interactive timelines and life-stage planning tools.',
  video: '/projects/life-roadmap.mp4',
  poster: '/life-roadmap.jpg',
  technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
  github: 'https://github.com/yourusername/life-roadmap',
  live: 'https://liferoadmap.com',
},

{
  title: 'Jobs Gateway',
  description: 'A comprehensive platform providing access to government and private job listings, eligibility criteria, application deadlines, and detailed job descriptions—all in one place to streamline your job search.',
  video: '/projects/jobs-gateway.mp4',
  poster: '/jobs-gateway.jpg',
  technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Node.js'],
  github: 'https://github.com/yourusername/jobs-gateway',
  live: 'https://jobsgateway.com',
},

{
  title: 'Global Talks',
  description: 'Global Talks is a real-time chatting platform that connects users across the world. It facilitates seamless global communication, allowing people to exchange ideas, share experiences, and build meaningful connections without borders.',
  video: '/projects/global-talks.mp4',
  poster: '/global-talks.jpg',
  technologies: ['Next.js', 'Socket.IO', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  github: 'https://github.com/yourusername/global-talks',
  live: 'https://globaltalks.com',
},

{
  title: 'Dream Lifestyle',
  description: 'An innovative platform designed to help users plan, organize, and achieve their dream lifestyle by setting goals, tracking milestones, and managing different phases of their life effectively.',
  video: '/projects/dream-lifestyle.mp4',
  poster: '/dream-lifestyle.jpg',
  technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  github: 'https://github.com/yourusername/dream-lifestyle',
  live: 'https://dreamlifestyle.com',
},

{
  title: 'Subjects Roadmap',
  description: 'A comprehensive roadmap guide for various academic subjects, providing step-by-step learning paths, important topics, recommended resources, and practical projects to master each subject effectively.',
  video: '/projects/subjects-roadmap.mp4',
  poster: '/subjects-roadmap.jpg',
  technologies: ['React', 'Next.js', 'Firebase', 'Tailwind CSS'],
  github: 'https://github.com/yourusername/subjects-roadmap',
  live: 'https://subjectsroadmapapp.com',
},

{
  "title": "UI/UX Showcase",
  "description": "A platform where designers can upload, share, and collaborate on UI/UX designs and prototypes. Users can showcase their portfolios, get feedback, and explore design inspirations from the community.",
  "video": "/projects/ui-ux-showcase.mp4",
  "poster": "/ui-ux-showcase.jpg",
  "technologies": ["React", "Next.js", "Firebase", "Tailwind CSS", "Node.js"],
  "github": "https://github.com/yourusername/ui-ux-showcase",
  "live": "https://uiuxshowcase.com"
},


];

interface Project {
  title: string;
  description: string;
  video: string;
  poster: string;
  technologies: string[];
  github: string;
  live: string;
}

export default function Projects() {
  const handleProjectHover = useCallback((index: number, isHovering: boolean) => {
    const iframe = document.getElementById(`project-iframe-${index}`) as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({
        method: isHovering ? 'play' : 'pause',
        value: true
      }, '*');
    }
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const PROJECTS_PER_PAGE = 9;

  // Filter all projects first based on search term
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 4;
    let startPage = Math.max(1, Math.min(currentPage - Math.floor(maxVisibleButtons / 2), totalPages - maxVisibleButtons + 1));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    if (endPage - startPage + 1 < maxVisibleButtons && startPage > 1) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    buttons.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-lg ${currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-400 hover:text-purple-400 hover:bg-gray-800/50'} transition-all duration-300`}
      >
        <FaChevronLeft className="w-4 h-4" />
      </button>
    );

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${i === currentPage ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'text-gray-400 hover:text-purple-400 hover:bg-gray-800/50'}`}
        >
          {i}
        </button>
      );
    }

    buttons.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-lg ${currentPage === totalPages ? 'text-gray-500 cursor-not-allowed' : 'text-gray-400 hover:text-purple-400 hover:bg-gray-800/50'} transition-all duration-300`}
      >
        <FaChevronRight className="w-4 h-4" />
      </button>
    );

    return buttons;
  };

  return (
    <section id="projects" className="relative bg-black py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-blue-900/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-xl mx-auto mb-12"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-xl text-white rounded-full border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 pl-12"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </motion.div>

          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-1 w-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-4"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Showcasing innovative projects built with the latest web technologies
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <AnimatePresence mode="wait">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gray-900/40 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-800/50 hover:border-purple-500/50 hover:bg-gray-900/60"
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    const videoElement = document.querySelector(`#project-video-${index}`) as HTMLVideoElement;
                    if (videoElement) videoElement.play();
                    const iframeElement = document.querySelector(`#project-iframe-${index}`) as HTMLIFrameElement;
                    if (iframeElement && project.video.includes('vimeo.com')) {
                      iframeElement.contentWindow?.postMessage('{"method":"play"}', '*');
                    } else if (iframeElement && project.video.includes('youtube.com')) {
                      iframeElement.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    const videoElement = document.querySelector(`#project-video-${index}`) as HTMLVideoElement;
                    if (videoElement) {
                      videoElement.pause();
                      videoElement.currentTime = 0;
                    }
                    const iframeElement = document.querySelector(`#project-iframe-${index}`) as HTMLIFrameElement;
                    if (iframeElement && project.video.includes('vimeo.com')) {
                      iframeElement.contentWindow?.postMessage('{"method":"pause"}', '*');
                    } else if (iframeElement && project.video.includes('youtube.com')) {
                      iframeElement.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                    }
                  }}
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  {/* Project Video */}
                  <div 
                    className="relative h-48 sm:h-56 overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out"
                    onMouseEnter={() => handleProjectHover(index, true)}
                    onMouseLeave={() => handleProjectHover(index, false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:opacity-0 transition-opacity duration-500" />
                    <motion.div
                      className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 0.3 : 0 }}
                    />
                    {project.video.includes('vimeo.com') ? (
                      <iframe
                        id={`project-iframe-${index}`}
                        src={`${project.video}&background=1&loop=1&transparent=1&responsive=1&api=1&player_id=vimeo-${index}&autopause=1&autoplay=0#t=1s`}
                        className="absolute inset-0 w-full h-full object-cover"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <video
                          id={`project-video-${index}`}
                          src={project.video}
                          poster={project.poster}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out brightness-110 contrast-105"
                        />
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-3 group-hover:from-purple-500 group-hover:to-pink-700 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-full text-xs sm:text-sm font-medium border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleProjectClick(project.github)}
                        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-105"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span className="text-sm sm:text-base">Code</span>
                      </button>
                      <button
                        onClick={() => handleProjectClick(project.live)}
                        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-105"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span className="text-sm sm:text-base">Live Demo</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center items-center gap-2 mt-12"
          >
            {renderPaginationButtons()}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
