import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Palette,
  Brain,
  Database,
  WrenchIcon,
  CheckCircle2
} from 'lucide-react';

const skillsData = {
  'Web Development': {
    icon: Code2,
    skills: [
      'JavaScript ',
      'TypeScript',
      'React.js',
      'Next.js',
      'HTML5/CSS3',
      'Tailwind CSS',
      'REST APIs',
      'GraphQL'
    ]
  },
  'Frontend & UI/UX': {
    icon: Palette,
    skills: [
      'Responsive Design',
      'UI/UX Best Practices',
      'CSS Animations',
      'Figma',
      'Material-UI',
      'Framer Motion',
      'CSS Grid/Flexbox',
      'Web Accessibility'
    ]
  },
  'Machine Learning': {
    icon: Brain,
    skills: [
      'Python',
      'TensorFlow',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Data Visualization',
      'Jupyter Notebook',
      'Statistical Analysis'
    ]
  },
  'Backend & Database': {
    icon: Database,
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'RESTful APIs',
      'Authentication',
      'WebSockets',
      'Microservices'
    ]
  },
  'Tools & DevOps': {
    icon: WrenchIcon,
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Docker',
      'CI/CD',
      'AWS',
      'Vercel',
      'Postman'
    ]
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const skillVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3
    }
  })
};

const SkillCard = ({ category, Icon, skills, index, inView }) => {
  const { scrollYProgress } = useScroll();
  const yRaw = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -30 : 30]);
  const y = useSpring(yRaw, { stiffness: 80, damping: 20 });

  return (
    <motion.div style={{ y }}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        custom={index}
        animate={inView ? "visible" : "hidden"}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform-gpu"
      >
        <motion.div 
          className="p-6 relative group"
          whileHover="hover"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-6 h-6 text-indigo-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
            </div>
            <div className="space-y-3">
              {skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  variants={skillVariants}
                  initial="hidden"
                  custom={skillIndex}
                  animate={inView ? "visible" : "hidden"}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 group/skill"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 transition-colors group-hover/skill:text-indigo-500" />
                  </motion.div>
                  <span className="text-gray-700 group-hover/skill:text-indigo-600 transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500"
          whileHover={{ scaleX: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="skills" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden" 
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Technical Skills
          </motion.h2>

          <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-xl mb-6">
            <p className="text-gray-600">
              A comprehensive overview of my technical expertise and tools I use to build
              modern, scalable, and user-friendly applications.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, { icon: Icon, skills }], index) => (
            <SkillCard
              key={category}
              category={category}
              Icon={Icon}
              skills={skills}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
