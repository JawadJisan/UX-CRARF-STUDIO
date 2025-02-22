"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const cards = [
    {
      id: 0,
      title: "MISSION",
      content: "Establish perfection, make growth, bring success!",
      image: "/mission.png",
    },
    {
      id: 1,
      title: "VISION",
      content: "Ensure perfect solution and establish the growth.",
      image: "/vision.png",
    },
    {
      id: 2,
      title: "GOAL",
      content: "Spread IT support all over the world being perfect companion.",
      image: "/goal.png",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About Us
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Main Card */}
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, x: direction === "right" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 h-96 relative rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src={cards[activeCard].image}
              alt={cards[activeCard].title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-6">
              <h3 className="text-2xl font-bold text-white">
                {cards[activeCard].title}
              </h3>
              <p className="text-gray-200 mt-2">{cards[activeCard].content}</p>
            </div>
          </motion.div>

          {/* Control Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl cursor-pointer transition-all ${
                  activeCard === index
                    ? "bg-purple-600 text-white"
                    : "bg-white dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => {
                  setDirection(index > activeCard ? "right" : "left");
                  setActiveCard(index);
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Triva IT Limited is an IT company working with valuable clients
            throughout the globe. We are driven by our mission of
            &quot;Establishing perfection, making growth, and bringing
            success!&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
