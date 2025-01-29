"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl silver-text transition-all duration-300 ease-in-out">
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
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
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
      `}</style>
    </section>
  );
};

export default HeroSection;
