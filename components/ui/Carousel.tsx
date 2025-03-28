"use client";

import type React from "react";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import { Modal } from "./Modal";
import { motion } from "framer-motion";
import { CustomModal } from "./CustomModal";

interface SlideData {
  title: string;
  button: string;
  src: string;
  description: string;
  category?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
  openModal: (slide: SlideData) => void;
}

const Slide = ({
  slide,
  index,
  current,
  handleSlideClick,
  openModal,
}: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[60vmin] h-[65vmin] mx-[4vmin] z-10 "
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={src || "/placeholder.svg"}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>

        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold  relative">
            {title}
          </h2>
          <div className="flex justify-center">
            <button
              className="mt-6 px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              onClick={(e) => {
                e.stopPropagation();
                openModal(slide);
              }}
            >
              {button}
            </button>
          </div>
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<SlideData | null>(null);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const openModal = (slide: SlideData) => {
    setSelectedSlide(slide);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <motion.div key={index} layoutId={`card-${slide.title}`}>
            <Slide
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
              openModal={openModal}
            />
          </motion.div>
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>

      {/* {selectedSlide && (
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          title={selectedSlide.title}
          description={selectedSlide.description}
          imageSrc={selectedSlide.src}
          category={selectedSlide.category}
        />
      )} */}

      <CustomModal
        isOpen={modalOpen}
        onClose={closeModal}
        title={selectedSlide?.title || ""}
      >
        <div className="space-y-6">
          {/* Image Section */}
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <img
              src={selectedSlide?.src || ""}
              alt={selectedSlide?.title}
              className="h-full w-full object-cover"
            />
            {selectedSlide?.category && (
              <span className="absolute left-4 top-4 rounded-lg bg-purple-600 px-3 py-1 text-sm font-medium text-white">
                {selectedSlide.category}
              </span>
            )}
          </div>

          {/* Content Section */}
          <div className="text-gray-300 space-y-4">
            <p className="text-lg">{selectedSlide?.description}</p>

            <button className="flex items-center gap-2 px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
              Get Started
              <IconArrowNarrowRight className="w-5 h-5" />
            </button>

            {/* Additional content */}
            {[...Array(5)].map((_, i) => (
              <p key={i} className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            ))}
          </div>
        </div>
      </CustomModal>
    </div>
  );
}
