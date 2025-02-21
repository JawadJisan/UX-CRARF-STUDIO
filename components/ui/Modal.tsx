"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon as IconX } from "lucide-react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageSrc: string;
  category?: string;
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src={"/placeholder.svg"}
              alt="Macbook mockup"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  imageSrc,
  category = "Category",
}: ModalProps) {
  const [open, setOpen] = useState(isOpen);
  const containerRef = useRef(null);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 h-screen z-50 overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="backdrop-blur-lg h-[50%] w-full fixed inset-0"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={containerRef}
            layoutId={`card-${title}`}
            className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
          >
            <button
              className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
              onClick={handleClose}
            >
              <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
            </button>
            <motion.p
              layoutId={`category-${title}`}
              className="text-base font-medium text-black dark:text-white"
            >
              {category}
            </motion.p>
            <motion.p
              layoutId={`title-${title}`}
              className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
            >
              {title}
            </motion.p>
            <div className="py-10">
              <DummyContent />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
