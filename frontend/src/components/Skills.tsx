'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SiRabbitmq, SiTerraform, SiElasticsearch, SiRedis, SiJenkins, SiPhp, SiLaravel, SiCodeigniter, SiSymfony, SiKotlin, SiAndroid, SiGradle, SiSqlite } from 'react-icons/si'
import { FaClock, FaExchangeAlt, FaGraduationCap, FaLightbulb, FaPalette } from 'react-icons/fa'

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaComments,
  FaBrain,
  FaTasks,
  FaUsers,
  FaCloud,
  FaShieldAlt,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiAngular,
  SiMysql,
  SiBootstrap,
  SiJest,
  SiCypress,
  SiPostman,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiAxios,
  SiGraphql,
  SiCss3,
  SiHtml5,
  SiMicrosoftazure,
  SiGooglecloud,
  SiKubernetes,
  SiNestjs,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiSocketdotio,
} from 'react-icons/si'

const techSkills = [
  // -------------------- Core Programming Languages --------------------
  { name: 'JavaScript', icon: FaNodeJs, color: 'text-yellow-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Java', icon: FaJava, color: 'text-orange-500' },
  { name: 'Kotlin', icon: SiKotlin, color: 'text-purple-500' },

  // -------------------- Frontend Technologies --------------------
  { name: 'React', icon: FaReact, color: 'text-blue-500' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Angular', icon: SiAngular, color: 'text-red-600' },
  { name: 'Redux', icon: SiRedux, color: 'text-cyan-400' },
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600' },

  // -------------------- Backend Technologies --------------------
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'NestJS', icon: SiNestjs, color: 'text-red-500' },
  { name: 'WebSockets', icon: FaExchangeAlt, color: 'text-green-500' },
  { name: 'Socket.IO', icon: SiSocketdotio, color: 'text-gray-400' },
  { name: 'GraphQL API', icon: SiGraphql, color: 'text-pink-600' },
  { name: 'REST API', icon: SiAxios, color: 'text-indigo-500' },

  // -------------------- Databases & ORM --------------------
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
  { name: 'Prisma', icon: SiPrisma, color: 'text-cyan-500' },

  // -------------------- Cloud & Infrastructure --------------------
  { name: 'AWS', icon: FaAws, color: 'text-blue-400' },
  { name: 'Azure', icon: SiMicrosoftazure, color: 'text-blue-500' },
  { name: 'Cloud', icon: SiGooglecloud, color: 'text-blue-500' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
  { name: 'Supabase', icon: SiSupabase, color: 'text-green-500' },

  // -------------------- DevOps & Tools --------------------
  { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-700' },
  { name: 'Jenkins', icon: SiJenkins, color: 'text-blue-500' },
  { name: 'Terraform', icon: SiTerraform, color: 'text-purple-500' },
  { name: 'RabbitMQ', icon: SiRabbitmq, color: 'text-orange-500' },
  { name: 'ElasticSearch', icon: SiElasticsearch, color: 'text-yellow-600' },
  { name: 'Apache Kafka', icon: FaExchangeAlt, color: 'text-green-600' },
  { name: 'AWS Lambda', icon: FaCloud, color: 'text-orange-400' },
  { name: 'System Design', icon: FaBrain, color: 'text-purple-400' },

  // -------------------- Version Control --------------------
  { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
  { name: 'GitHub', icon: SiGithub, color: 'text-black-500' },
  { name: 'GitLab', icon: SiGitlab, color: 'text-orange-600' },
  { name: 'Bitbucket', icon: SiBitbucket, color: 'text-blue-400' },

  // -------------------- Testing & Development --------------------
  { name: 'Jest', icon: SiJest, color: 'text-red-600' },
  { name: 'Cypress', icon: SiCypress, color: 'text-cyan-500' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-600' },
  { name: 'JUnit', icon: SiJest, color: 'text-green-600' },

  // -------------------- Mobile Development --------------------
  { name: 'Android Studio', icon: SiAndroid, color: 'text-green-500' },
  { name: 'Jetpack Compose', icon: SiAndroid, color: 'text-blue-500' },
  { name: 'Room DB', icon: SiSqlite, color: 'text-blue-400' },
  { name: 'Retrofit', icon: SiAndroid, color: 'text-orange-500' },
  { name: 'Glide', icon: SiAndroid, color: 'text-cyan-500' },
  { name: 'SQLite', icon: SiSqlite, color: 'text-blue-600' },
  { name: 'Gradle', icon: SiGradle, color: 'text-green-600' },
  { name: 'Dagger/Hilt', icon: SiAndroid, color: 'text-purple-500' },
  { name: 'RxJava/Coroutines', icon: SiKotlin, color: 'text-yellow-500' },
  { name: 'WorkManager', icon: SiAndroid, color: 'text-indigo-500' },
  { name: 'VM & LiveData', icon: SiAndroid, color: 'text-blue-500' },
  { name: 'Nav Component', icon: SiAndroid, color: 'text-green-600' },
  { name: 'MVVM Architecture', icon: SiAndroid, color: 'text-purple-600' },

  // -------------------- Security & PWA --------------------
  { name: 'OAuth & Security', icon: FaShieldAlt, color: 'text-blue-700' },
  { name: 'Service Workers', icon: FaCloud, color: 'text-teal-600' },
]

const softSkills = [
  // Row 1: Analytical Skills
  { name: 'Problem Solving', icon: FaBrain, color: 'text-purple-600' },
  { name: 'Critical Thinking', icon: FaLightbulb, color: 'text-teal-500' },

  // Row 2: Communication & Leadership
  { name: 'Effective Communication', icon: FaComments, color: 'text-blue-400' },
  { name: 'Leadership & Teamwork', icon: FaUsers, color: 'text-green-500' },

  // Row 3: Management Skills
  { name: 'Time Management', icon: FaClock, color: 'text-pink-500' },
  { name: 'Project Management', icon: FaTasks, color: 'text-orange-500' },

  // Row 4: Growth & Innovation
  { name: 'Adaptability & Learning', icon: FaGraduationCap, color: 'text-indigo-500' },
  { name: 'Innovation & Creativity', icon: FaPalette, color: 'text-rose-500' },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4"
            >
              Tech Stack
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-lg text-gray-400"
            >
              Technologies I work with to build modern websites and applications
            </motion.p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-16">
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col items-center p-4 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                <skill.icon className={`text-3xl sm:text-4xl mb-3 ${skill.color}`} />
                <h3 className="text-sm font-medium text-gray-300 text-center">{skill.name}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4"
            >
              Soft Skills
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-400"
            >
              Professional qualities that enhance technical expertise
            </motion.p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-900/50 backdrop-blur-xl shadow-lg hover:shadow-purple-500/10 transition-all duration-300 border border-gray-800/50 hover:border-purple-500/50 group"
              >
                <skill.icon className={`text-4xl mb-4 ${skill.color} transform group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-base font-medium text-gray-200 group-hover:text-white transition-colors duration-300">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}