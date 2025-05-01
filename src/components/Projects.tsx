import React, { useState, useRef } from 'react';
import { Github, ExternalLink, Shield, Film, Home, ClipboardList } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gift } from "lucide-react";
import img from "./img/image.png"
const projects = [
  
  {
    id: 'movies',
    title: 'Movies Browser',
    description: 'A responsive and interactive platform to explore trending and upcoming movies using TMDb API.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2225&q=80',
    tech: ['React.js', 'TMDb API', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Rush9970/flixsScore',
    demo: 'https://flixscore.netlify.app/',
    icon: Film,
    color: 'bg-blue-100',
    highlights: [
      'Real-time data integration with TMDb API',
      'Dynamic routing and state management',
      'Genre-based filtering system',
      'Responsive design across devices'
    ]
  },

  {
    id: 'birthday-wisher',
    title: 'Birthday Wisher with Countdown',
    description: 'Fun and interactive React app to create personalized birthday countdowns and wishes!',
    image: img, // Replace with actual screenshot URL if available
    tech: ['React', 'React Hooks', 'React Router', 'CSS'],
    github: 'https://github.com/Rush9970/BirthDayCountdown1', // Replace with actual GitHub repo link
    demo: 'https://birthdaycountdwn.netlify.app/',
    icon: Gift, // Replace with an icon import like `import { Gift } from "lucide-react";`
    color: 'bg-pink-100',
    highlights: [
      'Personalized birthday countdown timer ⏲️',
      'Users can generate sharable birthday wish links 🎁',
      'Fully responsive design with customizable styles 💅',
      'Built using React with Hooks and React Router 🛠️'
    ]
  },  
  {
    id: 'cyber',
    title: 'Cyber Attack Predictor',
    description: 'ML-based cybersecurity tool achieving 95% accuracy in detecting and classifying cyber attacks using network traffic data.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    tech: ['React', 'FastAPI', 'Python', 'Scikit-learn', 'XGBoost'],
    github: 'https://github.com/Rush9970/Cyber-Attack-Pretdictor',
    demo: 'https://attackp.netlify.app/',
    icon: Shield,
    color: 'bg-purple-100',
    highlights: [
      'Interactive React frontend for visualization',
      'FastAPI backend for real-time predictions',
      'Fine-tuned XGBoost model with 95% accuracy',
      'Comprehensive data preprocessing pipeline'
    ]
  },
  {
    id: 'house',
    title: 'House Price Predictor',
    description: 'Advanced machine learning model for predicting house prices using the Ames Housing dataset.',
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&auto=format&fit=crop&w=2074&q=80',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'],
    github: '#',
    demo: '#',
    icon: Home,
    color: 'bg-orange-100',
    highlights: [
      'Analysis of 79 housing features',
      'Advanced feature engineering',
      'Multiple ML model comparison',
      'RMSE-based evaluation metrics'
    ]
  },
  {
    id: 'todo',
    title: 'To-Do List Manager',
    description: 'A sleek and minimalistic to-do list app to manage daily tasks efficiently with add, delete, and toggle features.',
    image: 'https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&auto=format&fit=crop&w=2225&q=80',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Rush9970/todoListApp', // Replace if different
    demo: 'https://todolistappdemo.netlify.app/', // Replace if different
    icon: ClipboardList, // You can also use 'List' or 'CheckSquare' from Lucide if available
    color: 'bg-green-100',
    highlights: [
      'Add, delete, and mark tasks as completed',
      'Responsive and user-friendly interface',
      'LocalStorage integration for persistent tasks',
      'Clean and minimalist design using React'
    ]
  }
  
  
  
];

const ProjectCard = ({ project, index, activeIndex, totalProjects }) => {
  const offset = 20;
  const initialY = index * offset;
  const scale = 1 - (index - activeIndex) * 0.05;
  const opacity = 1 - (index - activeIndex) * 0.15;
  const translateY = index < activeIndex ? -200 : initialY;
  
  return (
    <motion.div
      initial={{ y: initialY, scale: scale, opacity: opacity }}
      animate={{ 
        y: translateY,
        scale: index < activeIndex ? 0.8 : scale,
        opacity: index < activeIndex ? 0 : opacity,
      }}
      transition={{ 
        duration: 0.8,  // Increased from 0.5 to 0.8
        ease: [0.32, 0.72, 0, 1]
      }}
      style={{ 
        zIndex: totalProjects - index,
        transformOrigin: 'center top',
        position: 'absolute',
        width: '100%',
        top: 0
      }}
    >
      <div className={`${project.color} rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 overflow-hidden bg-opacity-100`}>
        <div className="grid md:grid-cols-2 gap-8 p-8 bg-white bg-opacity-90">
          <div className="space-y-6">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}  // Increased from 0.3 to 0.5
            >
              <project.icon className="w-8 h-8 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
            </motion.div>
            
            <p className="text-gray-600">{project.description}</p>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Key Features:</h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center gap-2 text-gray-600"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.4 }}  // Increased from 0.2 to 0.4
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}  // Increased from 0.2 to 0.4
                  className="px-3 py-1 bg-white shadow-md hover:shadow-lg text-indigo-600 rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            <div className="flex gap-4 pt-4">
              <motion.a
                href={project.github}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}  // Increased from 0.2 to 0.4
              >
                <Github className="w-5 h-5" />
                View Code
              </motion.a>
              <motion.a
                href={project.demo}
                className="flex items-center gap-2 px-4 py-2 border-2 border-gray-900 rounded-lg hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}  // Increased from 0.2 to 0.4
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </motion.a>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}  // Increased from 0.3 to 0.6
            />
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}  // Increased from 0.5 to 0.8
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const newIndex = Math.floor(scrollPercentage * projects.length);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section 
      ref={ref} 
      id="projects" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}  // Increased from 0.6 to 0.8
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scroll to explore my latest projects and see how I solve complex problems
            with clean, efficient code.
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 rounded-full transition-all shadow-md hover:shadow-lg ${
                  activeIndex === index 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}  // Increased from 0.2 to 0.4
              >
                {project.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div 
          ref={containerRef}
          className="relative h-[800px] overflow-auto scrollbar-hide"
          onScroll={handleScroll}
        >
          <div className="relative h-[200%]">
            <div className="sticky top-20 h-[600px] overflow-hidden">
              <AnimatePresence>
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    activeIndex={activeIndex}
                    totalProjects={projects.length}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}