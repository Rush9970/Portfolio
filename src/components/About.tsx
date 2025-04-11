import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tilt } from 'react-tilt';

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Highlight = ({ children }) => (
  <motion.span
    whileHover={{ scale: 1.1, color: "#5A67D8" }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
    className="cursor-pointer font-semibold"
  >
    {children}
  </motion.span>
);

export function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16"
          whileHover={{ scale: 1.05 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tilt options={defaultTiltOptions}>
              <motion.div
                style={{ scale }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Developer workspace"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            </Tilt>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              I'm <Highlight>Rushikesh Kapale</Highlight>, a final-year <Highlight>Chemical Engineering</Highlight> student at <Highlight>IIT Madras</Highlight> with a deep passion for <Highlight>full-stack development</Highlight> and <Highlight>machine learning</Highlight>. My journey bridges <Highlight>efficient backend systems</Highlight> with <Highlight>beautiful, responsive frontends</Highlight>.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              I build apps using the <Highlight>MERN stack</Highlight>, and develop <Highlight>intelligent systems</Highlight> with <Highlight>Python</Highlight>, <Highlight>TensorFlow</Highlight>, and <Highlight>Scikit-learn</Highlight>. Whether it’s a <Highlight>web app</Highlight> or a <Highlight>data-driven model</Highlight>, I focus on innovation, usability, and performance.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}