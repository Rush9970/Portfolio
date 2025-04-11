import React from 'react';

const experiences = [
  {
    role: 'Web Developer',
    company: 'Shaastra IIT Madras',
    period: 'Jan 2023 - Present',
    responsibilities: [
      'Led frontend development for the official Shaastra website using React and Tailwind CSS',
      'Implemented responsive designs and optimized performance',
      'Collaborated with cross-functional teams to deliver features',
    ],
  },
  {
    role: 'Hackathon Winner',
    company: 'IIT Hackathon 2023',
    period: 'March 2023',
    responsibilities: [
      'Secured 2nd place among 100+ teams',
      'Developed an innovative solution for sustainable energy tracking',
      'Implemented real-time data visualization using D3.js',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.role} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-indigo-600">{exp.company}</p>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}