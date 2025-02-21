// "use client";
// import React, { useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();

//   // set true for the initial state so that nav bar is visible in the hero section
//   const [visible, setVisible] = useState(true);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     // Check if current is not undefined and is a number
//     if (typeof current === "number") {
//       let direction = current! - scrollYProgress.getPrevious()!;

//       if (scrollYProgress.get() < 0.05) {
//         // also set true for the initial state
//         setVisible(true);
//       } else {
//         if (direction < 0) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       }
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           // change rounded-full to rounded-lg
//           // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
//           // change  pr-2 pl-8 py-2 to px-10 py-5
//           "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
//           className
//         )}
//         style={{
//           backdropFilter: "blur(16px) saturate(180%)",
//           backgroundColor: "rgba(17, 25, 40, 0.75)",
//           borderRadius: "12px",
//           border: "1px solid rgba(255, 255, 255, 0.125)",
//         }}
//       >
//         {navItems.map((navItem: any, idx: number) => (
//           <Link
//             key={`link=${idx}`}
//             href={navItem.link}
//             className={cn(
//               "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
//             )}
//           >
//             <span className="block sm:hidden">{navItem.icon}</span>
//             {/* add !cursor-pointer */}
//             {/* remove hidden sm:block for the mobile responsive */}
//             <span className=" text-sm !cursor-pointer">{navItem.name}</span>
//           </Link>
//         ))}
//         {/* remove this login btn */}
//         {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
//           <span>Login</span>
//           <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
//         </button> */}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// --------------------------------------------------------
"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FiMenu, FiX } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { PiCodesandboxLogoBold } from "react-icons/pi";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const middleIndex = Math.ceil(navItems.length / 2);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-[5000] backdrop-blur-sm border-b border-white/10",
          className
        )}
      >
        <div className="container mx-auto px-6 h-24 flex items-center justify-between relative">
          {isSmallScreen ? (
            <>
              <Link href="/" className="text-white text-3xl">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* <FaReact className="h-12 w-12 text-blue-400" /> */}
                  <PiCodesandboxLogoBold className="h-12 w-12 text-blue-400" />
                </motion.div>
              </Link>
              <motion.button
                className="z-50 w-12 h-12 flex items-center justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <FiX className="w-8 h-8 text-white" />
                ) : (
                  <FiMenu className="w-8 h-8 text-white" />
                )}
              </motion.button>
            </>
          ) : (
            <div className="flex items-center justify-center w-full">
              <div className="flex items-center space-x-12">
                {navItems.slice(0, middleIndex).map((item, idx) => (
                  <NavLink key={idx} href={item.link}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <Link href="/" className="flex text-white text-3xl mx-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PiCodesandboxLogoBold className="h-14 w-14 text-blue-400" />
                </motion.div>
              </Link>
              <div className="flex items-center space-x-12">
                {navItems.slice(middleIndex).map((item, idx) => (
                  <NavLink key={idx} href={item.link}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[4999] backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <NavLink
                    href={item.link}
                    isMobile
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({
  href,
  children,
  isMobile = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Link href={href} passHref onClick={onClick}>
      <motion.span
        className={cn(
          "text-xl font-semibold relative cursor-pointer",
          "text-gray-300 hover:text-white uppercase",
          isMobile ? "text-4xl" : "text-xl"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        <motion.span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.span>
    </Link>
  );
};
