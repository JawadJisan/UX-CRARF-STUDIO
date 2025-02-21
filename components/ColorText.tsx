// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// export function ColourfulTextDemo() {
//   return (
//     <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
//       <motion.img
//         src="https://assets.aceternity.com/linear-demo.webp"
//         className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         transition={{ duration: 1 }}
//       />
//       <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
//         The best you will ever find
//       </h1>
//       <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
//         The best you will ever find
//       </h1>
//       <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
//         The best you will ever find
//       </h1>
//       <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
//         The best you will ever find
//       </h1>
//     </div>
//   );
// }

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { globeConfig, sampleArcs } from "@/data";
// import dynamic from "next/dynamic";

// const World = dynamic(() => import("./ui/Globe").then((m) => m.World), {
//   ssr: false,
// });

// export function ColourfulTextDemo() {
//   return (
//     <div className="h-screen w-full flex items-center justify-center relative overflow-hidden">
//       {/* <motion.img
//         src="https://assets.aceternity.com/linear-demo.webp"
//         className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         transition={{ duration: 1 }}
//       /> */}

//       <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
//         <World data={sampleArcs} globeConfig={globeConfig} />
//       </div>

//       <div className="z-20">
//         <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
//           The best you will ever find
//         </h1>
//         <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
//           The best you will ever find
//         </h1>
//         <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
//           The best you will ever find
//         </h1>
//         <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
//           The best you will ever find
//         </h1>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";
import { globeConfig, sampleArcs } from "@/data";
import dynamic from "next/dynamic";
import MagicButton from "./MagicButton";

const World = dynamic(() => import("./ui/Globe").then((m) => m.World), {
  ssr: false,
});

export function ColourfulTextDemo() {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center relative overflow-hidden px-4 py-12 md:py-24">
      {/* Contact Form Container */}
      <motion.div
        className="w-full md:w-1/2 lg:w-2/3 z-20 p-6 md:p-8 bg-black/30 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl mb-8 md:mb-0 md:mr-[-10%] lg:mr-[-15%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Get in touch with us from anywhere in the world
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg rounded-xl border border-white/20 p-6 md:p-8 shadow-xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-white text-sm mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-400"
                  placeholder="Your message..."
                />
              </div>

              <div className="flex justify-center">
                <MagicButton
                  title="Read More"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z"
                      />
                    </svg>
                  }
                  position="right"
                  handleClick={() => console.log("Sending message...")}
                />
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Globe Container */}
      <div className="w-full md:w-2/3 lg:w-3/5 h-[50vh] md:h-[70vh] relative z-40 overflow-hidden">
        <div className="absolute inset-0 md:-left-10 lg:-left-20 xl:-left-40 w-[120%] h-full">
          <World data={sampleArcs} globeConfig={globeConfig} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent md:bg-none" />
        </div>
      </div>

      {/* Mobile Background Overlay */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0" />
    </section>
  );
}
