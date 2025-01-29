"use client";

import { useState, useEffect } from "react";
import { getResume } from "@/actions/resume";
import ResumeBuilder from "./_components/resume-builder";
import { motion } from "framer-motion";
import { Cloud, Server, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ResumePage() {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      const data = await getResume();
      setResume(data);
    };

    fetchResume();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cloudMotion = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: [0.4, 0.8, 0.4],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto py-12 relative min-h-screen"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Dynamic Background Layer */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />

      {/* Flowing Cloud Effects */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute bg-gradient-to-br from-gray-300/10 via-white/5 to-gray-500/10 rounded-full blur-3xl
              ${i % 2 === 0 ? "mix-blend-overlay" : "mix-blend-soft-light"}`}
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${i * 20 + Math.random() * 20}%`,
              top: `${i * 15 + Math.random() * 15}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Silver Metallic Overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/10 mix-blend-overlay pointer-events-none" />

      {/* Animated Grid Pattern */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            mask: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        />
      </div>

      {/* Content Container with Glassmorphism */}
      <div className="relative z-10">
        {/* Header Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div variants={item}>
            <Card className="relative overflow-hidden p-6 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-xl border-2 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.1)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quick Resume</h3>
                  <p className="text-muted-foreground mb-4">
                    Get started in seconds with our cloud-based resume builder.
                    Everything you need without the hassle.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Easy to use",
                      "Always available",
                      "No setup required",
                    ].map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="relative overflow-hidden p-6 bg-gradient-to-bl from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-xl border-2 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.1)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Server className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Professional Control
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built for professionals who need complete control over their
                    resume presentation.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Full customization",
                      "Advanced features",
                      "Local storage",
                    ].map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Main Content Sections */}
        <motion.div className="space-y-8 relative" variants={container}>
          {/* Experience Section */}
          <motion.div className="space-y-4" variants={item}>
            <motion.h2
              className="text-3xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Experience
              <ArrowRight className="h-5 w-5 ml-2 text-gray-400" />
            </motion.h2>
            <motion.div className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-xl rounded-xl p-6 border-2 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.1)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
              <ResumeBuilder
                type="Experience"
                initialContent={resume?.content?.experience}
              />
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div className="space-y-4" variants={item}>
            <motion.h2
              className="text-3xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Education
              <ArrowRight className="h-5 w-5 ml-2 text-gray-400" />
            </motion.h2>
            <motion.div className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-xl rounded-xl p-6 border-2 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.1)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
              <ResumeBuilder
                type="Education"
                initialContent={resume?.content?.education}
              />
            </motion.div>
          </motion.div>

          {/* Projects Section */}
          <motion.div className="space-y-4" variants={item}>
            <motion.h2
              className="text-3xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Projects
              <ArrowRight className="h-5 w-5 ml-2 text-gray-400" />
            </motion.h2>
            <motion.div className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-xl rounded-xl p-6 border-2 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.1)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
              <ResumeBuilder
                type="Project"
                initialContent={resume?.content?.projects}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Decorative Elements */}
      <motion.div
        className="fixed top-20 right-10 w-[500px] h-[500px] bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-200/30 via-gray-100/30 to-white/30 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="fixed bottom-20 left-10 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300/30 via-gray-200/30 to-white/30 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}
