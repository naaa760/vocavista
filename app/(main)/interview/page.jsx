"use client";

import { useState, useEffect } from "react";
import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-cards";
import PerformanceChart from "./_components/performace-chart";
import QuizList from "./_components/quiz-list";
import { motion } from "framer-motion";
import { Brain, Target, Trophy } from "lucide-react";

export default function InterviewPrepPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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

  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    const loadAssessments = async () => {
      const data = await getAssessments();
      setAssessments(data);
    };
    loadAssessments();
  }, []);

  return (
    <div className="relative min-h-screen">
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

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto py-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-12"
          variants={item}
        >
          <div className="space-y-2">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent flex items-center gap-4">
              <Brain className="h-12 w-12 text-gray-400" />
              Interview Preparation
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl">
              Master your interview skills with AI-powered practice sessions and
              real-time feedback.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={item} className="mb-12">
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-xl rounded-xl p-6 border-2 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.1)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
            <StatsCards assessments={assessments} />
          </div>
        </motion.div>

        {/* Performance Chart */}
        <motion.div variants={item} className="mb-12">
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-xl rounded-xl p-6 border-2 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.1)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
            <PerformanceChart assessments={assessments} />
          </div>
        </motion.div>

        {/* Quiz List */}
        <motion.div variants={item}>
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-xl rounded-xl p-6 border-2 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.1)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
            <QuizList assessments={assessments} />
          </div>
        </motion.div>
      </motion.div>

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
    </div>
  );
}
