"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function LandingPage() {
  useEffect(() => {
    const colors = [
      "#808080", // silver
      "#A8A8A8", // lighter silver
      "#666666", // darker silver
      "#000000", // black
      "#1A1A1A", // soft black
    ];

    const duration = 3 * 1000; // duration in milliseconds
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        ticks: 200,
        gravity: 0.8,
        scalar: 2,
        drift: -0.5,
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        ticks: 200,
        gravity: 0.8,
        scalar: 2,
        drift: 0.5,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background/50 backdrop-blur-lg relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-background z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source
              src="https://cdn.prod.website-files.com/6716e38f10f081a3bccd5097/67262ec99867ab4014e35328_Hero_White_mp4-transcode.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Floating Illustration */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -z-5 opacity-70 pointer-events-none">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              y: [0, -20, 0],
              rotateY: [0, 360, 0, 360, 0, 360, 0, 360, 0, 360, 0],
            }}
            transition={{
              duration: 3,
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotateY: {
                duration: 2.5,
                times: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
                ease: "easeOut",
              },
            }}
            className="hover:scale-105 transition-transform duration-300 perspective-[1000px]"
          >
            <Image
              src="/feature-illustration.png"
              alt="Decorative illustration"
              width={500}
              height={500}
              className="w-auto h-auto max-w-[500px] drop-shadow-2xl backface-visible"
              priority
            />
          </motion.div>
        </div>

        {/* Add decorative elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 cloud-flow" />
        </motion.div>

        <div className="relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Features that set us apart
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the tools and features that will help you achieve your
              career goals
            </p>
          </motion.div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="feature-card-glow shine-effect"
                >
                  <Card className="group backdrop-blur-md bg-white/20 border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <CardContent className="pt-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-3 rounded-full bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-md inline-block mb-4"
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-200/90">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-muted/30 backdrop-blur-lg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "70+", label: "Industries Covered" },
              { value: "500+", label: "Interview Questions" },
              { value: "91%", label: "Success Rate" },
              { value: "24/7", label: "AI Support" },
            ].map((stat, index) => (
              <div key={index} className="group perspective">
                <div className="flex flex-col items-center justify-center space-y-2 p-6 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-t from-background/50 to-muted/30 backdrop-blur-lg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-900 to-black">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="group">
                <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-primary/20"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-background/50 to-muted/30 backdrop-blur-lg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-900 to-black">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/10 backdrop-blur-md rounded-xl border-none shadow-sm hover:bg-white/20 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left px-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="mx-auto container px-4">
          <div className="rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 md:p-16 backdrop-blur-lg shadow-2xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Ready to Accelerate Your Career?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                Join thousands of professionals who are advancing their careers
                with AI-powered guidance.
              </p>
              <Link href="/dashboard" passHref>
                <Button
                  size="lg"
                  className="h-11 mt-5 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey Today{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
