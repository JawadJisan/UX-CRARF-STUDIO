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
