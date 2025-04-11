import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Rushikesh Kapale. All rights reserved.
        </p>
      </div>
    </footer>
  );
}