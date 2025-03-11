"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const CarouselModal = ({
  projects,
  initialIndex,
  onClose,
}: {
  projects: any[];
  initialIndex: number;
  onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const loadStatus = await Promise.all(
          projects.map(
            (project) =>
              new Promise<boolean>((resolve) => {
                const img = document.createElement("img");
                // Handle both absolute URLs and relative paths
                const imgSrc = project.img.startsWith("http")
                  ? project.img
                  : `${window.location.origin}${project.img}`;
                img.src = imgSrc;
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
              })
          )
        );
        setImagesLoaded(loadStatus);
      } catch (err) {
        console.error("Image loading error:", err);
        setError(true);
      }
    };

    loadImages();
  }, [projects]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const currentProject = projects[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div className="max-w-[90vw] max-h-[90vh] relative w-full h-full">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-8 right-0 text-white hover:text-purple-300 transition-colors z-50"
          >
            <FiX size={32} />
          </button>

          {/* Centered Project Title */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center z-50 w-full max-w-[90vw]">
            <h2 className="text-white text-xl font-bold truncate mx-auto px-4">
              {currentProject.title}
            </h2>
          </div>

          {/* Navigation Arrows with Enhanced Styling */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-purple-300 transition-all z-50 group p-2"
          >
            <div className="bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all group-hover:scale-110">
              <FiChevronLeft size={40} />
              <span className="sr-only">Previous</span>
            </div>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-purple-300 transition-all z-50 group p-2"
          >
            <div className="bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all group-hover:scale-110">
              <FiChevronRight size={40} />
              <span className="sr-only">Next</span>
            </div>
          </button>

          {/* Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {error ? (
              <div className="text-white text-center p-8">
                Failed to load images
              </div>
            ) : imagesLoaded[currentIndex] ? (
              <div className="w-full h-full overflow-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800/50">
                <Image
                  src={currentProject.img}
                  alt={currentProject.title}
                  width={1920}
                  height={1080}
                  className="object-contain"
                  style={{ minWidth: "100%", minHeight: "100%" }}
                  onLoadingComplete={() => setLoading(false)}
                  onError={() => setError(true)}
                  unoptimized={currentProject.img.startsWith("http")} // For external images
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent" />
                <span className="text-white">Loading image...</span>
              </div>
            )}
          </motion.div>

          {/* Index Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-1 rounded-full">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
