"use client";
import { motion } from "framer-motion";
import { FaFlag, FaBinoculars, FaChartLine } from "react-icons/fa";
import { CardStack } from "./ui/card-stack";
import { Highlight } from "./ui/Highlight";

const AboutSectionNew = () => {
  const cards = [
    {
      id: 1,
      name: "Mission",
      designation: "Core Principle",
      icon: FaFlag,
      content: (
        <div className="space-y-4">
          {/* <FaFlag className="w-16 h-16 text-purple-500 mb-4" /> */}
          <p className="text-xl">
            <Highlight>Establish perfection</Highlight> through meticulous
            attention to detail, <Highlight>drive growth</Highlight> with
            innovative solutions, and <Highlight>deliver success</Highlight>
            through measurable results.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      name: "Vision",
      icon: FaBinoculars,
      designation: "Future Direction",
      content: (
        <div className="space-y-4">
          {/* <FaBinoculars className="w-16 h-16 text-purple-500 mb-4" /> */}
          <p className="text-xl">
            To become the <Highlight>global benchmark</Highlight> in IT
            solutions by continuously pushing the boundaries of technology while
            maintaining
            <Highlight>ethical business practices</Highlight>.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      name: "Goal",
      icon: FaChartLine,
      designation: "Primary Objective",
      content: (
        <div className="space-y-4">
          {/* <FaChartLine className="w-16 h-16 text-purple-500 mb-4" /> */}
          <p className="text-xl">
            <Highlight>Expand our reach</Highlight> to every corner of the
            digital world while maintaining{" "}
            <Highlight>100% client satisfaction</Highlight>
            and <Highlight>sustainable growth</Highlight>.
          </p>
        </div>
      ),
    },
  ];

  const features = [
    {
      title: "15+ Years Experience",
      icon: "🏆",
      description: "Trusted industry expertise",
    },
    {
      title: "500+ Projects",
      icon: "🚀",
      description: "Successfully delivered",
    },
    {
      title: "98% Satisfaction",
      icon: "❤️",
      description: "Client happiness rate",
    },
  ];

  return (
    <section className="relative min-h-[80vh] w-full py-12 overflow-hidden flex items-center">
      {/* Background with gradient */}
      <div className="absolute" />

      <div className="container mx-auto px-4 relative z-10 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ABOUT US
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-purple">UX CRARF STUDIO</span> is a global IT
            solutions provider dedicated to delivering{" "}
            <Highlight>perfection-driven results</Highlight>. Through continuous
            innovation and strategic growth initiatives, we empower businesses
            worldwide to achieve digital excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
          {/* Card Stack - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 h-full flex items-center justify-center"
          >
            <CardStack items={cards} offset={15} scaleFactor={0.08} />
          </motion.div>

          {/* Features Grid - Takes 1 column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 gap-6 h-full"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative p-6 rounded-2xl border border-purple-400/30 bg-purple-900/20 backdrop-blur-sm hover:border-purple-400/60 transition-colors h-full flex flex-col justify-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionNew;
