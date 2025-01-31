"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    image: "/members/sarah.jpg",
    text: "Vocavista has been instrumental in my career growth. The AI-powered interview prep gave me the confidence I needed.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    image: "/members/michael.jpg",
    text: "The personalized guidance and career tools helped me land my dream job. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    role: "Designer",
    image: "/members/emily.jpg",
    text: "I love how comprehensive the platform is. From resume building to interview practice, it has everything.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black/10 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="relative w-16 h-16 mb-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-center">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
