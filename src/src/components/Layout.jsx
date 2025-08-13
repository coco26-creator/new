import { useState } from 'react';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black bg-opacity-80 text-white fixed w-full z-40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-yellow-400">Sunny Hocha</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#products" className="hover:text-yellow-400 transition">Products</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </nav>
          <button
            className="md:hidden text-yellow-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black p-6 space-y-4 text-center">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block">About</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block">Products</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block">Contact</a>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-black text-center py-6 text-sm text-gray-400">
        <p>&copy; 2024 Sunny Hocha. All rights reserved.</p>
      </footer>
    </div>
  );
}
