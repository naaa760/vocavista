"use client";

import { useEffect, useState } from "react";
import { getIndustryInsights } from "@/actions/dashboard";
import DashboardView from "./_component/dashboard-view";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, LineChart, Sparkles } from "lucide-react";

export default function DashboardPage() {
  const [insights, setInsights] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const { isOnboarded } = await getUserOnboardingStatus();
        if (!isOnboarded) {
          redirect("/onboarding");
        }
        const data = await getIndustryInsights();
        setInsights(data);
      } catch (error) {
        console.error("Dashboard initialization error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, []);

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

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto py-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Header Section */}
        <motion.div variants={item} className="mb-12">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent flex items-center gap-4">
                    <LayoutDashboard className="h-12 w-12 text-gray-400" />
                    Industry Insights
                  </h1>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="h-8 w-8 text-yellow-500/50" />
                  </motion.div>
                </div>
                <p className="text-gray-400 text-xl max-w-2xl">
                  Stay ahead with real-time industry trends and AI-powered
                  analytics for your career growth.
                </p>
              </div>
              <motion.div
                className="p-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LineChart className="h-12 w-12 text-gray-400" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Content */}
        <motion.div variants={item}>
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-xl rounded-xl p-6 border-2 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.1)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
            {insights && <DashboardView insights={insights} />}
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
