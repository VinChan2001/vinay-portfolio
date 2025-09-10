"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, FileText } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 bg-white/80 dark:bg-gray-900/80 supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-gray-900/50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="group flex items-center gap-3 font-bold text-xl tracking-tight hover-rotate">
          <div className="relative">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg transition-all group-hover:shadow-blue-500/50"></div>
            <div className="absolute inset-0 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-ping opacity-20 group-hover:opacity-40"></div>
          </div>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient group-hover:text-shimmer" style={{ backgroundSize: "200% 200%" }}>
            VC
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a 
            href="#home" 
            className="relative text-base font-medium text-gray-600 transition-all duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group magnetic"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Home
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
          </a>
          <a 
            href="#about" 
            className="relative text-base font-medium text-gray-600 transition-all duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group magnetic"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
          </a>
          <a 
            href="#experience" 
            className="relative text-base font-medium text-gray-600 transition-all duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group magnetic"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Experience
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
          </a>
          <a 
            href="#skills" 
            className="relative text-base font-medium text-gray-600 transition-all duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group magnetic"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Skills
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
          </a>
          <a 
            href="#projects" 
            className="relative text-base font-medium text-gray-600 transition-all duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group magnetic"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Projects
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
          </a>
          <a 
            href="#contact" 
            className="relative text-base font-medium text-gray-600 transition-all duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group magnetic"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
          </a>
          
          <div className="flex items-center gap-3">
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>
            
            <button 
              onClick={toggle} 
              aria-label="Toggle theme" 
              className="rounded-lg p-2 text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white hover-rotate glow-animation"
            >
              {dark ? <Sun className="h-5 w-5 transition-transform hover:rotate-180" /> : <Moon className="h-5 w-5 transition-transform hover:rotate-12" />}
            </button>
            
            <a 
              href="https://drive.google.com/drive/folders/1g4srzUKc5GOEOV1Mu99Sa-XNXtuecsDc?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ripple-effect magnetic inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-blue-600"
            >
              <FileText className="h-4 w-4 transition-transform group-hover:scale-110" />
              Resume
            </a>
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={toggle} 
            aria-label="Toggle theme" 
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button 
            onClick={() => setOpen(true)} 
            aria-label="Open menu" 
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-white/95 backdrop-blur-md dark:bg-gray-900/95 md:hidden">
          <div className="container flex flex-col gap-2 py-4">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              About
            </a>
            <a 
              href="#experience" 
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Experience
            </a>
            <a 
              href="#skills" 
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Contact
            </a>
            
            <div className="my-3 h-px bg-gray-200 dark:bg-gray-700"></div>
            
            <div className="flex items-center justify-between px-4">
              <a 
                href="https://drive.google.com/drive/folders/1g4srzUKc5GOEOV1Mu99Sa-XNXtuecsDc?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
              <button 
                onClick={() => setOpen(false)} 
                aria-label="Close menu" 
                className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}