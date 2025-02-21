// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import dynamic from "next/dynamic";

// const World = dynamic(() => import("./Globe").then((m) => m.World), {
//   ssr: false,
// });

// export function GlobeDemo() {
//   const globeConfig = {
//     pointSize: 4,
//     globeColor: "#062056",
//     showAtmosphere: true,
//     atmosphereColor: "#FFFFFF",
//     atmosphereAltitude: 0.1,
//     emissive: "#062056",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     polygonColor: "rgba(255,255,255,0.7)",
//     ambientLight: "#38bdf8",
//     directionalLeftLight: "#ffffff",
//     directionalTopLight: "#ffffff",
//     pointLight: "#ffffff",
//     arcTime: 1000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     initialPosition: { lat: 22.3193, lng: 114.1694 },
//     autoRotate: true,
//     autoRotateSpeed: 0.5,
//   };
//   const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
//   const sampleArcs = [
//     {
//       order: 14,
//       startLat: -33.936138,
//       startLng: 18.436529,
//       endLat: 21.395643,
//       endLng: 39.883798,
//       arcAlt: 0.3,
//       color: colors[Math.floor(Math.random() * (colors.length - 1))],
//     },
//   ];

//   return (
//     <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
//       <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//           }}
//           className="div"
//         >
//           <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
//             We sell soap worldwide
//           </h2>
//           <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
//             This globe is interactive and customizable. Have fun with it, and
//             don&apos;t forget to share it. :)
//           </p>
//         </motion.div>
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//           }}
//           className="div"
//         >
//           <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
//             We sell soap worldwide
//           </h2>
//           <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
//             This globe is interactive and customizable. Have fun with it, and
//             don&apos;t forget to share it. :)
//           </p>
//         </motion.div>
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//           }}
//           className="div"
//         >
//           <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
//             We sell soap worldwide
//           </h2>
//           <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
//             This globe is interactive and customizable. Have fun with it, and
//             don&apos;t forget to share it. :)
//           </p>
//         </motion.div>
//         <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
//         <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
//           <World data={sampleArcs} globeConfig={globeConfig} />
//         </div>
//       </div>
//     </div>
//   );
// }

// ----------

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import dynamic from "next/dynamic";
// import MagicButton from "../MagicButton";
// import { globeConfig, sampleArcs } from "@/data";

// const World = dynamic(() => import("./Globe").then((m) => m.World), {
//   ssr: false,
// });

// export function GlobeDemo() {
//   return (
//     <div
//       id="contact_us"
//       className="flex flex-col items-center justify-center min-h-screen w-full relative overflow-hidden"
//     >
//       {/* Globe Container */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <World data={sampleArcs} globeConfig={globeConfig} />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent " />
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-8"
//         >
//           <h1 className="heading">
//             Contact
//             <span className="text-purple"> Us</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300">
//             Get in touch with us from anywhere in the world
//           </p>
//         </motion.div>

//         {/* Contact Form */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg rounded-xl border border-white/20 p-6 md:p-8 shadow-xl"
//         >
//           <form className="space-y-6">
//             <div>
//               <label className="block text-white text-sm mb-2">Name</label>
//               <input
//                 type="text"
//                 className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-400"
//                 placeholder="Your name"
//               />
//             </div>

//             <div>
//               <label className="block text-white text-sm mb-2">Email</label>
//               <input
//                 type="email"
//                 className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-400"
//                 placeholder="your@email.com"
//               />
//             </div>

//             <div>
//               <label className="block text-white text-sm mb-2">Message</label>
//               <textarea
//                 rows={4}
//                 className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-400"
//                 placeholder="Your message..."
//               />
//             </div>

//             <div className="flex justify-center">
//               <MagicButton
//                 title="Send Message"
//                 icon={
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z"
//                     />
//                   </svg>
//                 }
//                 position="right"
//                 handleClick={() => console.log("Sending message...")}
//               />
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// -------
"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import MagicButton from "../MagicButton";
import { globeConfig, sampleArcs } from "@/data";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      id="contact_us"
      className="flex flex-col items-center justify-start py-10 min-h-screen w-full relative bg-gradient-to-b overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl z-10 px-4 sm:px-6 lg:px-8 mx-auto"
      >
        <h1 className="heading">
          Contact <span className="text-purple"> Us</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 text-center mt-5">
          Get in touch with us from anywhere in the world
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-xl shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
            >
              Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 dark:bg-black/50 dark:border-gray-600 dark:text-white text-base"
                placeholder="Your name"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 dark:bg-black/50 dark:border-gray-600 dark:text-white text-base"
                placeholder="your@email.com"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
            >
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 dark:bg-black/50 dark:border-gray-600 dark:text-white text-base"
                placeholder="Your message..."
              ></textarea>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-end"
          >
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            >
              Send Message
              <Send className="ml-2 -mr-1 h-5 w-5" />
            </motion.button> */}
            <div className="flex justify-center">
              <MagicButton
                title="Send Message"
                icon={
                  <svg
                    xmlns="http:www.w3.org/2000/svg"
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
          </motion.div>
        </form>
      </motion.div>
      <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent z-20" />
      <div className="absolute w-full -bottom-20 h-full z-0">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
}
