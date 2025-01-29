"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const FloatingCard = ({ delay, children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`absolute bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg ${className}`}
  >
    {children}
  </motion.div>
);

const FloatingEvent = ({ direction, index }) => {
  const isIncoming = direction === "incoming";
  const baseDelay = index * 1.2;

  return (
    <motion.div
      initial={{ opacity: 0, x: isIncoming ? -100 : 100 }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: isIncoming ? [100, 0, 0, -100] : [-100, 0, 0, 100],
      }}
      transition={{
        duration: 4,
        delay: baseDelay,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        position: "absolute",
        left: isIncoming ? "30%" : "60%",
        top: `${150 + index * 50}px`,
        zIndex: 1,
      }}
    >
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
          <span className="text-xs text-white/80">
            {isIncoming ? "Incoming" : "Outgoing"} Event
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute w-full h-full" style={{ opacity: 0.1 }}>
          <path
            d="M 35% 200 C 45% 250, 55% 250, 65% 200"
            stroke="white"
            fill="none"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="animate-dash"
          />
          <path
            d="M 35% 300 C 45% 350, 55% 350, 65% 300"
            stroke="white"
            fill="none"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="animate-dash"
          />
        </svg>

        {[0, 1, 2].map((index) => (
          <FloatingEvent
            key={`incoming-${index}`}
            direction="incoming"
            index={index}
          />
        ))}
        {[0, 1, 2].map((index) => (
          <FloatingEvent
            key={`outgoing-${index}`}
            direction="outgoing"
            index={index}
          />
        ))}
      </div>

      <div className="space-y-6 text-center relative z-10">
        <div className="space-y-6 mx-auto">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl silver-text transition-all duration-300 ease-in-out">
            Your Vocavista for
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/watch?v=0LMK5JYkB94">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <motion.div
            ref={imageRef}
            className="hero-image"
            initial={{
              y: 100,
              opacity: 0,
              rotateY: -180,
              scale: 0.5,
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotateY: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.4,
              rotateY: {
                duration: 1.5,
                type: "spring",
                bounce: 0.3,
                times: [0, 0.3, 0.6, 0.8, 1],
                keyframes: [-180, 40, -20, 10, 0],
              },
            }}
          >
            <div className="relative group">
              {/* Natural shadow overlay */}
              <div className="absolute -inset-20 pointer-events-none">
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 400 300">
                    {/* Leaf and branch shadows - more organic paths */}
                    <g className="leaf-shadows" style={{ filter: "blur(3px)" }}>
                      <path
                        d="M 150 50 C 180 40, 200 60, 220 40 S 240 30, 260 50"
                        className="shadow-path"
                      />
                      <path
                        d="M 180 70 C 200 50, 220 80, 240 60 S 260 50, 280 70"
                        className="shadow-path"
                      />
                      <path
                        d="M 140 90 C 160 70, 180 100, 200 80 S 220 70, 240 90"
                        className="shadow-path"
                      />
                      {/* Leaf clusters */}
                      <path
                        d="M 200 30 Q 210 20, 220 30 T 240 20"
                        className="leaf-shadow"
                      />
                      <path
                        d="M 180 50 Q 190 40, 200 50 T 220 40"
                        className="leaf-shadow"
                      />
                      <path
                        d="M 220 60 Q 230 50, 240 60 T 260 50"
                        className="leaf-shadow"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Main image */}
              <div className="relative">
                <Image
                  src="/banner.jpeg"
                  width={960}
                  height={540}
                  alt="Dashboard Preview"
                  className="rounded-xl shadow-2xl relative z-10"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes silverShimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .silver-text {
          background: linear-gradient(
            to right,
            #222 20%,
            #444 40%,
            #ddd 60%,
            #444 80%,
            #222 100%
          );
          background-size: 200% auto;
          color: #000;
          background-clip: text;
          text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: silverShimmer 5s linear infinite;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.1),
            0 0 10px rgba(255, 255, 255, 0.1), 0 0 15px rgba(255, 255, 255, 0.1),
            0 0 20px rgba(255, 255, 255, 0.1);
        }

        .silver-text:hover {
          animation-duration: 1s;
          transform: scale(1.05);
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.2),
            0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.2),
            0 0 40px rgba(255, 255, 255, 0.2);
        }

        .hero-image-wrapper {
          perspective: 2000px;
        }

        .hero-image {
          position: relative;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .shadow-path {
          fill: none;
          stroke: rgba(0, 0, 0, 0.4);
          stroke-width: 1.5;
          opacity: 0.3;
          animation: shadowSway 10s ease-in-out infinite;
        }

        .leaf-shadow {
          fill: none;
          stroke: rgba(0, 0, 0, 0.5);
          stroke-width: 2;
          opacity: 0.25;
          animation: leafSway 8s ease-in-out infinite;
        }

        @keyframes shadowSway {
          0%,
          100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(10px) translateY(-5px);
          }
        }

        @keyframes leafSway {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(5deg) scale(1.05);
          }
        }

        /* Stagger animations */
        .shadow-path:nth-child(2) {
          animation-delay: -2s;
        }
        .shadow-path:nth-child(3) {
          animation-delay: -4s;
        }
        .leaf-shadow:nth-child(4) {
          animation-delay: -1s;
        }
        .leaf-shadow:nth-child(5) {
          animation-delay: -3s;
        }
        .leaf-shadow:nth-child(6) {
          animation-delay: -5s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
