"use client";

import ContactForm from "@/components/ContactForm";
import IntroReveal from "@/components/IntroReveal";
import HeroContent from "@/components/HeroContent";
import AboutCard from "@/components/AboutCard";
import Reveal from "@/components/Reveal";
import TechSection from "@/components/TechSection";
import ProjectsSection from "@/components/ProjectsSection";
import SmoothAnchor from "@/components/SmoothAnchor";
import { motion } from "framer-motion";


//

export default function Page() {
  return (
    <main className="relative">
      {/* Global Background Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, #06b6d4 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 60% 30%, #ec4899 0%, transparent 40%)",
              "radial-gradient(circle at 30% 70%, #10b981 0%, transparent 40%)",
              "radial-gradient(circle at 70% 70%, #f59e0b 0%, transparent 40%)",
              "radial-gradient(circle at 30% 30%, #ec4899 0%, transparent 40%)",
              "radial-gradient(circle at 60% 30%, #ec4899 0%, transparent 40%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
      </div>
      <section id="home" className="relative overflow-hidden full-bleed min-h-[85vh] md:min-h-[92vh] flex items-center">
        <HeroContent />
      </section>
      {/* About Me section */}
      <section id="about" className="relative overflow-hidden full-bleed py-16 sm:py-20">
        
        <div className="relative mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/20 mb-6 magnetic">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
              About Me
            </div>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300">
                Turning Data Into
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Intelligent Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transforming complex data challenges into scalable, production-ready machine learning solutions.
            </p>
          </Reveal>

          <div className="grid gap-16 lg:grid-cols-2 items-center max-w-7xl mx-auto">
            {/* Left - Profile Image */}
            <Reveal className="flex justify-center" delay={0.1}>
              <div className="relative">
                {/* Gradient glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                
                {/* Image container */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl magnetic hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                    <AboutCard src="/vinay.jpeg" alt="Vinay Chanamallu" />
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2 shadow-xl border border-gray-100 dark:border-gray-700 magnetic">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Available</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-xl border border-gray-100 dark:border-gray-700 magnetic">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">3+</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Years Exp</div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right - Content */}
            <Reveal className="lg:pr-8 xl:pr-16" delay={0.2}>
              <div className="space-y-6">
                <div className="space-y-4 text-justify">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    I'm <span className="font-bold text-blue-600 dark:text-blue-400">Venkata Chandrasekhar Vinay Chanamallu</span>, 
                    a passionate data scientist and ML engineer who finds pure joy in transforming raw, chaotic data into elegant, intelligent solutions that make a real difference in people's lives.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    There's something magical about the moment when a machine learning model finally clicks - when months of feature engineering, hyperparameter tuning, 
                    and validation converge into something that not only predicts accurately but tells a compelling story about the patterns hidden in data. 
                    My journey at EPAM Systems taught me that the most beautiful models are those that seamlessly blend statistical rigor with production reliability, 
                    handling millions of transactions while maintaining the elegance of well-crafted algorithms.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    I'm particularly fascinated by <span className="font-semibold text-purple-600 dark:text-purple-400">time-series forecasting and the art of making data infrastructure sing</span>. 
                    Whether I'm crafting seasonal models that capture the subtle rhythms in business data, optimizing SQL queries until they run like poetry, 
                    or building propensity models that genuinely understand customer behavior, I'm driven by the pursuit of solutions that are both intellectually satisfying 
                    and practically transformative. The thrill of seeing conversion rates climb or ETL pipelines run faster never gets old.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    What truly excites me is the entire ecosystem of modern ML engineering - from the initial spark of discovery in exploratory data analysis 
                    to the satisfaction of watching automated systems hum along in production. I love architecting data pipelines that don't just work today 
                    but evolve gracefully, creating dashboards that empower teams to make better decisions, and mentoring others to find their own passion 
                    in the intersection of mathematics, engineering, and human insight.
                  </p>

                  {/* CTA Button to Experience */}
                  <div className="mt-8 flex justify-center">
                    <SmoothAnchor
                      href="#experience"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl magnetic ripple-effect animate-gradient glow-animation"
                    >
                      <span className="relative z-10">Explore My Journey</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </SmoothAnchor>
                  </div>
                  
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="relative overflow-hidden full-bleed py-16 sm:py-20 scroll-mt-24">
        
        <div className="relative mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 ring-1 ring-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:ring-purple-500/20 mb-6 magnetic">
              <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></div>
              Experience
            </div>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300">
                Professional
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              My evolution from computer science student to ML engineer and business analyst.
            </p>
          </Reveal>

          <div className="max-w-5xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"></div>
              
              {/* Experience Items */}
              <div className="space-y-8">
                {/* Current - MS Business Analytics */}
                <Reveal delay={0.1}>
                  <div className="relative flex items-center">
                    <div className="flex-1 text-right pr-8">
                      <div className="inline-block">
                        <div className="rounded-2xl bg-white/80 dark:bg-gray-800/80 p-6 shadow-xl backdrop-blur-sm border border-gray-100 dark:border-gray-700 magnetic hover:shadow-2xl transition-all duration-500">
                          <span className="inline-block text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
                            Aug 2024 - Present
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            MS Business Analytics
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            University of Maryland
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                      <span className="text-xl">🎓</span>
                    </div>
                    <div className="flex-1 pl-8"></div>
                  </div>
                </Reveal>

                {/* EPAM Systems Full-time */}
                <Reveal delay={0.2}>
                  <div className="relative flex items-center">
                    <div className="flex-1 pr-8"></div>
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-blue-600 shadow-lg">
                      <span className="text-xl">💼</span>
                    </div>
                    <div className="flex-1 text-left pl-8">
                      <div className="inline-block">
                        <div className="rounded-2xl bg-white/80 dark:bg-gray-800/80 p-6 shadow-xl backdrop-blur-sm border border-gray-100 dark:border-gray-700 magnetic hover:shadow-2xl transition-all duration-500">
                          <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full mb-3">
                            Jul 2022 - Jul 2024
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            Junior Systems Engineer
                          </h3>
                          <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                            EPAM Systems
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* IIT Madras Certificate */}
                <Reveal delay={0.3}>
                  <div className="relative flex items-center">
                    <div className="flex-1 text-right pr-8">
                      <div className="inline-block">
                        <div className="rounded-2xl bg-white/80 dark:bg-gray-800/80 p-6 shadow-xl backdrop-blur-sm border border-gray-100 dark:border-gray-700 magnetic hover:shadow-2xl transition-all duration-500">
                          <span className="inline-block text-sm font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 px-3 py-1 rounded-full mb-3">
                            May 2022 - Sep 2023
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            Data Science Program
                          </h3>
                          <p className="text-orange-600 dark:text-orange-400 font-semibold">
                            IIT Madras
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-lg">
                      <span className="text-xl">📜</span>
                    </div>
                    <div className="flex-1 pl-8"></div>
                  </div>
                </Reveal>

                {/* EPAM Internship */}
                <Reveal delay={0.4}>
                  <div className="relative flex items-center">
                    <div className="flex-1 pr-8"></div>
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
                      <span className="text-xl">🚀</span>
                    </div>
                    <div className="flex-1 text-left pl-8">
                      <div className="inline-block">
                        <div className="rounded-2xl bg-white/80 dark:bg-gray-800/80 p-6 shadow-xl backdrop-blur-sm border border-gray-100 dark:border-gray-700 magnetic hover:shadow-2xl transition-all duration-500">
                          <span className="inline-block text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 px-3 py-1 rounded-full mb-3">
                            Feb 2022 - Jun 2022
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            Systems Engineer Intern
                          </h3>
                          <p className="text-purple-600 dark:text-purple-400 font-semibold">
                            EPAM Systems
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Bachelor's Degree */}
                <Reveal delay={0.5}>
                  <div className="relative flex items-center">
                    <div className="flex-1 text-right pr-8">
                      <div className="inline-block">
                        <div className="rounded-2xl bg-white/80 dark:bg-gray-800/80 p-6 shadow-xl backdrop-blur-sm border border-gray-100 dark:border-gray-700 magnetic hover:shadow-2xl transition-all duration-500">
                          <span className="inline-block text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
                            2018 - 2022
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            BTech Computer Science
                          </h3>
                          <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                            JNTUK
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                      <span className="text-xl">🎓</span>
                    </div>
                    <div className="flex-1 pl-8"></div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
          
          {/* CTA Button to Skills */}
          <Reveal delay={0.6}>
            <div className="mt-12 flex justify-center">
              <SmoothAnchor
                href="#skills"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl magnetic ripple-effect animate-gradient glow-animation"
              >
                <span className="relative z-10">Explore Technical Skills</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </SmoothAnchor>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Technology */}
      <section id="skills" className="relative overflow-hidden full-bleed py-16 sm:py-20 scroll-mt-24">
        <div className="relative container">
          <TechSection />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative overflow-hidden full-bleed py-16 sm:py-20 scroll-mt-24">
        <div className="relative container">
          <ProjectsSection />
        </div>
      </section>

      {/* One-time page intro overlay */}
      <IntroReveal />
      {/* Contact section */}
      <section id="contact" className="relative py-20 overflow-hidden full-bleed">
        {/* Animated Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </motion.div>

        <div className="relative container max-w-4xl mx-auto px-6 sm:px-8">
          {/* Header */}
          <Reveal className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                GET IN TOUCH
              </motion.span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on your next data science project? Let's build something impactful together.
            </p>
          </Reveal>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {/* Email Card */}
            <Reveal delay={0.1}>
              <motion.a
                href="mailto:chvcvinay@gmail.com"
                className="group block p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                      <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15C0 3.649.649 3 1.5 3H3l9 6.463L21 3h1.5c.85 0 1.5.649 1.5 1.5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Me</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Quick and direct</p>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200 font-medium">
                    chvcvinay@gmail.com
                  </p>
                </div>
              </motion.a>
            </Reveal>

            {/* LinkedIn Card */}
            <Reveal delay={0.2}>
              <motion.a
                href="https://linkedin.com/in/vinay-chanamallu"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Professional network</p>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 font-medium">
                    Connect with me professionally
                  </p>
                </div>
              </motion.a>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal delay={0.3}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send a Message</h3>
                <p className="text-gray-600 dark:text-gray-300">I typically respond within 24 hours</p>
              </div>
              <ContactForm />
            </div>
          </Reveal>

        </div>
      </section>
    </main>
  );
}
