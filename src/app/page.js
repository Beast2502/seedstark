"use client";

import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#101010] to-[#0f1c1f] min-h-screen text-white font-sans">

      <Head>
        <title>SeedStark | AI-Powered Startup Studio</title>
        <meta
          name="description"
          content="SeedStark helps early-stage startups build AI-driven MVPs, tools, and web products."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center justify-between px-6 py-6 border-b border-[#1e3a3a] gap-4 md:gap-0">
        <div>
          <Image
            src="/vercel.svg"
            width={200}
            height={100}
            alt="SeedStark"
            className="object-contain"
          />
        </div>

        <nav className="flex flex-wrap gap-4 text-gray-300 justify-center text-sm md:text-base">
          {["Services", "Projects", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="hover:text-teal-300 transition-colors duration-200"
            >
              {section}
            </a>
          ))}
        </nav>
      </header>

      <main className="p-6 md:p-10">
        <section className="w-full text-center mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 relative">
            <motion.div
              className="absolute w-60 h-60 rounded-full border-2 border-purple-600 blur-md opacity-50 animate-spin-slow"
              style={{ zIndex: 0 }}
            />



            <motion.h2
              className="text-3xl md:text-5xl font-black tracking-tight z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="absolute w-60 h-60 rounded-full border-2 border-purple-600 blur-md opacity-50 animate-spin-slow"
                style={{ zIndex: 0 }}
              />

              AI-Driven MVPs for Startups
            </motion.h2>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            At SeedStark, we build intelligent systems, smart assistants, and dynamic digital platforms that learn, adapt, and grow with your startup.
          </p>

          <button className="mt-10 px-7 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-cyan-500 hover:to-purple-500 rounded-xl text-white font-semibold shadow-lg">
            Get Started
          </button>
        </section>

        <section id="services" className="py-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 relative">
            <motion.div
              className="absolute w-60 h-60 rounded-full border-2 border-purple-600 blur-md opacity-50 animate-spin-slow"
              style={{ zIndex: 0 }}
            />



            <motion.h2
              className="text-3xl md:text-5xl font-black tracking-tight z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="absolute w-60 h-60 rounded-full border-2 border-purple-600 blur-md opacity-50 animate-spin-slow"
                style={{ zIndex: 0 }}
              />

              AI-Driven Services
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {["Generative AI Tools", "Smart Dashboards", "Autonomous MVP Builders"].map((title, i) => (
              <div key={title} className="bg-[#1c1c1c] p-6 rounded-2xl border border-teal-800">
                <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
                <p className="text-gray-400">
                  {i === 0 && "Custom GPT agents, chatbots, and LLM apps tailored to your domain."}
                  {i === 1 && "Real-time data insights with AI-enhanced analytics and automation."}
                  {i === 2 && "Build MVPs that evolve using AI logic and adaptive feedback loops."}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 relative">
            <motion.div
              className="absolute w-60 h-60 rounded-full border-2 border-purple-600 blur-md opacity-50 animate-spin-slow"
              style={{ zIndex: 0 }}
            />



            <motion.h2
              className="text-3xl md:text-5xl font-black tracking-tight z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="absolute w-60 h-60 rounded-full border-2 border-purple-600 blur-md opacity-50 animate-spin-slow"
                style={{ zIndex: 0 }}
              />

              AI Projects
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "LegalGPT Assistant",
                desc: "Conversational AI bot trained on legal FAQs to speed up onboarding.",
              },
              {
                title: "VC Insights Bot",
                desc: "A bot that analyzes startup decks and predicts funding readiness.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#1c1c1c] p-6 rounded-2xl border border-teal-800">
                <h4 className="text-white text-xl font-semibold mb-1">{title}</h4>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 relative">
            <motion.div
              className="absolute w-60 h-60 rounded-full border-2 border-purple-600 blur-md opacity-50 animate-spin-slow"
              style={{ zIndex: 0 }}
            />



            <motion.h2
              className="text-3xl md:text-5xl font-black tracking-tight z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="absolute w-60 h-60 rounded-full border-2 border-purple-600 blur-md opacity-50 animate-spin-slow"
                style={{ zIndex: 0 }}
              />

              Work With Us
            </motion.h2>
          </div>
          <p className="text-gray-400 mb-8 text-base max-w-md mx-auto">
            Let's build the future of AI together.
          </p>
          <a
            href="mailto:mehulsaxena45@gmail.com"
            className="mt-10 inline-block px-7 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-cyan-500 hover:to-purple-500 rounded-xl text-white font-semibold shadow-lg"
          >
            mehulsaxena45@gmail.com
          </a>
        </section>
      </main>

      <footer className="border-t border-gray-800 text-center text-gray-500 text-sm py-6 px-4">
        <div className="flex justify-center gap-6 mb-4 flex-wrap">
          {/* <a
            href="https://github.com/Beast2502"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub size={24} />
          </a> */}
          <a
            href="https://www.linkedin.com/in/mehul-saxena-826a1812b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-xs sm:text-sm">©2025 SeedStark. All rights reserved.</p>
      </footer>
    </div>
  );
}
