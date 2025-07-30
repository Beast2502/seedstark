"use client";

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#101010] to-[#0f1c1f] min-h-screen text-white font-sans overflow-x-hidden">
      <Head>
        <title>SeedStark | AI-Powered Startup Studio</title>
        <meta name="description" content="SeedStark helps early-stage startups build AI-driven MVPs, tools, and web products." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col md:flex-row items-center justify-between px-6 py-6 border-b border-[#1e3a3a] gap-4 md:gap-0">
        <motion.h1 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-teal-400 tracking-wide">
          SeedStark
        </motion.h1>
        <nav className="flex flex-wrap gap-4 text-gray-300 justify-center text-sm md:text-base">
          <a href="#services" className="hover:text-teal-300 transition-colors duration-200">Services</a>
          <a href="#projects" className="hover:text-teal-300 transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-teal-300 transition-colors duration-200">Contact</a>
        </nav>
      </header>

      <main className="p-6 md:p-10">
        <motion.section 
          className="text-center py-24"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}>
          <motion.h2 
            className="text-4xl md:text-5xl font-black mb-4 text-white tracking-tight"
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }} 
            transition={{ delay: 0.3 }}>
            AI-Driven MVPs for Startups
          </motion.h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            At SeedStark, we build intelligent systems, smart assistants, and dynamic digital platforms that learn, adapt, and grow with your startup.
          </p>
          <motion.button 
            className="mt-10 px-7 py-3 bg-teal-500 hover:bg-teal-600 rounded-xl text-white font-semibold shadow-md"
            whileHover={{ scale: 1.05 }}>
            Get Started
          </motion.button>
        </motion.section>

        <section id="services" className="py-20">
          <h3 className="text-3xl font-bold mb-12 text-teal-400 text-center">AI-Driven Services</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div 
              className="bg-[#1c1c1c] p-6 rounded-2xl shadow-lg border border-teal-900"
              whileHover={{ scale: 1.03 }}>
              <h4 className="text-xl font-semibold text-white mb-2">Generative AI Tools</h4>
              <p className="text-gray-400">Custom GPT agents, chatbots, and LLM apps tailored to your domain.</p>
            </motion.div>
            <motion.div 
              className="bg-[#1c1c1c] p-6 rounded-2xl shadow-lg border border-teal-900"
              whileHover={{ scale: 1.03 }}>
              <h4 className="text-xl font-semibold text-white mb-2">Smart Dashboards</h4>
              <p className="text-gray-400">Real-time data insights with AI-enhanced analytics and automation.</p>
            </motion.div>
            <motion.div 
              className="bg-[#1c1c1c] p-6 rounded-2xl shadow-lg border border-teal-900"
              whileHover={{ scale: 1.03 }}>
              <h4 className="text-xl font-semibold text-white mb-2">Autonomous MVP Builders</h4>
              <p className="text-gray-400">Build MVPs that evolve using AI logic and adaptive feedback loops.</p>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <h3 className="text-3xl font-bold mb-12 text-teal-400 text-center">AI Projects</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div className="bg-[#1c1c1c] p-6 rounded-2xl border border-teal-800" whileHover={{ scale: 1.02 }}>
              <h4 className="text-white text-xl font-semibold mb-1">LegalGPT Assistant</h4>
              <p className="text-gray-400">Conversational AI bot trained on legal FAQs to speed up onboarding.</p>
            </motion.div>
            <motion.div className="bg-[#1c1c1c] p-6 rounded-2xl border border-teal-800" whileHover={{ scale: 1.02 }}>
              <h4 className="text-white text-xl font-semibold mb-1">VC Insights Bot</h4>
              <p className="text-gray-400">A bot that analyzes startup decks and predicts funding readiness.</p>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20 text-center">
          <motion.h3 className="text-3xl font-bold mb-4 text-teal-400" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Work With Us</motion.h3>
          <p className="text-gray-400 mb-8 text-base max-w-md mx-auto">Let's build the future of AI together.</p>
          <motion.a 
            href="mailto:mehulsaxena45@gmail.com" 
            className="inline-block px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-xl text-white font-semibold shadow-md"
            whileHover={{ scale: 1.1 }}>
            mehulsaxena45@gmail.com
          </motion.a>
        </section>
      </main>

      <footer className="border-t border-gray-800 text-center text-gray-500 text-sm py-6 px-4">
        <div className="flex justify-center gap-6 mb-4 flex-wrap">
          <a href="https://github.com/Beast2502" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/mehul-saxena-826a1812b/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-xs sm:text-sm">© 2025s SeedStark. All rights reserved.</p>
      </footer>
    </div>
  );
}
