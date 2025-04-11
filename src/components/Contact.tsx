import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-8">
            I'm always open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <Mail className="w-6 h-6" />
              Email
            </a>
            <a
              href="https://github.com/yourusername"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <Github className="w-6 h-6" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <Linkedin className="w-6 h-6" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}