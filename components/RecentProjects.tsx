// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaLocationArrow } from "react-icons/fa6";
// import { motion, AnimatePresence } from "framer-motion";

// import { projects } from "@/data";
// import { PinContainer } from "./ui/Pin";

// // Animation variants
// const variants = {
//   enter: (direction: number) => ({
//     y: direction % 2 === 0 ? 50 : -50,
//     opacity: 0,
//     scale: 0.8,
//     transition: { duration: 0.4, ease: "easeOut" },
//   }),
//   center: {
//     y: 0,
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.4, ease: "easeOut" },
//   },
//   exit: (direction: number) => ({
//     y: direction % 2 === 0 ? -50 : 50,
//     opacity: 0,
//     scale: 0.8,
//     transition: { duration: 0.3, ease: "easeIn" },
//   }),
// };

// interface VariantsType {
//   enter: any;
//   center: any;
//   exit: any;
// }

// const RecentProjects = () => {
//   const [hoveredProject, setHoveredProject] = useState<number | null>(null);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [animationSeed, setAnimationSeed] = useState(Math.random());

//   const allCategories = [
//     "All",
//     ...Array.from(new Set(projects.map((p) => p.category))),
//   ];

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projects
//       : projects.filter((project) => project.category === selectedCategory);

//   // Update animation seed when category changes
//   useEffect(() => {
//     setAnimationSeed(Math.random());
//   }, [selectedCategory]);

//   const getRandomVariant = (): VariantsType => ({
//     enter:
//       Math.random() < 0.5
//         ? { opacity: 0, scale: 0.8 }
//         : { opacity: 0, x: Math.random() < 0.5 ? 50 : -50 },
//     center: { opacity: 1, scale: 1, x: 0 },
//     exit:
//       Math.random() < 0.5
//         ? { opacity: 0, scale: 0.8 }
//         : { opacity: 0, x: Math.random() < 0.5 ? 50 : -50 },
//   });

//   // Category button component remains the same...

//   return (
//     <div className="py-20">
//       {/* ... other components remain the same ... */}
//       <h1 className="heading">
//         <span className="text-purple">Portfolio</span>{" "}
//       </h1>

//       {/* Categories Filter */}
//       {/* <div className="flex flex-wrap justify-center gap-4 mt-8 px-4">
//         {allCategories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`px-6 py-2 rounded-full transition-colors ${
//               selectedCategory === category
//                 ? "bg-purple text-white"
//                 : "bg-gray-800 hover:bg-gray-700 text-gray-300"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div> */}

//       <div className="flex flex-wrap justify-center gap-4 mt-8 px-4">
//         {allCategories.map((category) => (
//           <CategoryButton
//             key={category}
//             category={category}
//             selectedCategory={selectedCategory}
//             onClick={() => setSelectedCategory(category)}
//           />
//         ))}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 w-full max-w-[1400px] mx-auto">
//         <AnimatePresence initial={false} mode="wait">
//           {filteredProjects.map((item, index) => {
//             const animationKey = `${item.id}-${animationSeed}`;
//             const randomVariants = getRandomVariant();

//             return (
//               <motion.div
//                 key={animationKey}
//                 custom={index}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ type: "spring", stiffness: 100 }}
//               >
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.3 }}
//                   className="w-full h-full flex items-center justify-center my-20 md:my-12"
//                   onMouseEnter={() => setHoveredProject(item.id)}
//                   onMouseLeave={() => setHoveredProject(null)}
//                 >
//                   <PinContainer
//                     title={item.title}
//                     href={item.link}
//                     containerClassName="w-full"
//                     className="w-full"
//                   >
//                     {/* ... rest of the PinContainer content remains the same ... */}
//                     <div className="relative flex items-center justify-center w-full overflow-hidden aspect-video mb-10">
//                       <div
//                         className="relative w-full h-full overflow-hidden lg:rounded-3xl"
//                         style={{ backgroundColor: "#13162D" }}
//                       >
//                         <Image
//                           src="/bg.png"
//                           alt="Background Image"
//                           layout="fill"
//                           objectFit="cover"
//                           priority
//                         />
//                       </div>

//                       {/* Default image (shown when not hovering) */}
//                       <AnimatePresence>
//                         {hoveredProject !== item.id && (
//                           <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="z-10 absolute bottom-0"
//                           >
//                             <Image
//                               src={item.img || "/placeholder.svg"}
//                               alt="Cover Image"
//                               width={400}
//                               height={300}
//                               className="w-full h-auto"
//                             />
//                           </motion.div>
//                         )}
//                       </AnimatePresence>

//                       <AnimatePresence>
//                         {hoveredProject === item.id && (
//                           <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="z-10 absolute inset-0 overflow-hidden lg:rounded-3xl"
//                           >
//                             <motion.div
//                               initial={{ y: "0%" }}
//                               animate={{
//                                 y: ["0%", "-100%"], // Full scroll from top to bottom
//                               }}
//                               transition={{
//                                 duration: 3, // Faster duration (reduced from 5 to 3 seconds)
//                                 ease: "linear",
//                                 repeat: Number.POSITIVE_INFINITY,
//                                 repeatType: "loop",
//                               }}
//                               className="w-full h-[300%]" // Increased height for full scroll
//                             >
//                               <Image
//                                 src={item.fullImg || "/placeholder.svg"}
//                                 alt="Full Project Image"
//                                 layout="fill"
//                                 objectFit="cover"
//                                 className="object-top"
//                               />
//                             </motion.div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
//                       {item.title}
//                     </h1>

//                     <div className="flex items-center justify-between mt-7 mb-3">
//                       {/* <div className="flex items-center">
//                   {item.iconLists.map((icon, index) => (
//                     <div
//                       key={index}
//                       className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
//                       style={{
//                         transform: `translateX(-${5 * index + 2}px)`,
//                       }}
//                     >
//                       <Image
//                         src={icon || "/placeholder.svg"}
//                         alt={`icon-${index}`}
//                         width={32}
//                         height={32}
//                         className="p-2"
//                       />
//                     </div>
//                   ))}
//                 </div> */}

//                       <div className="flex justify-center items-center">
//                         <a
//                           href={item.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center hover:underline"
//                         >
//                           <p className="flex lg:text-xl md:text-xs text-sm text-purple">
//                             Check Live Site
//                           </p>
//                           <FaLocationArrow className="ms-3" color="#CBACF9" />
//                         </a>
//                       </div>
//                     </div>
//                   </PinContainer>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;

// const CategoryButton = ({
//   category,
//   selectedCategory,
//   onClick,
// }: {
//   category: string;
//   selectedCategory: string;
//   onClick: () => void;
// }) => {
//   const isSelected = category === selectedCategory;

//   return (
//     <button
//       key={category}
//       onClick={onClick}
//       className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none ${
//         isSelected ? "w-full md:w-60" : "w-auto"
//       }`}
//     >
//       {isSelected && (
//         <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//       )}

//       <span
//         className={`inline-flex items-center justify-center rounded-lg px-6 py-2 text-sm font-medium transition-all ${
//           isSelected
//             ? "bg-slate-950 text-white backdrop-blur-3xl"
//             : "bg-gray-800 text-gray-300 hover:bg-gray-700"
//         } ${isSelected ? "h-full w-full" : "h-auto"}`}
//       >
//         {category}
//       </span>
//     </button>
//   );
// };
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { CarouselModal } from "./CarouselModal";

// Animation variants
const variants = {
  enter: (direction: number) => ({
    y: direction % 2 === 0 ? 50 : -50,
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.4, ease: "easeOut" },
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    y: direction % 2 === 0 ? -50 : 50,
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3, ease: "easeIn" },
  }),
};

interface VariantsType {
  enter: any;
  center: any;
  exit: any;
}

const RecentProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [animationSeed, setAnimationSeed] = useState(Math.random());

  // Inside RecentProjects component state
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  // Reset subcategory when main category changes
  useEffect(() => {
    setSelectedSubcategory("All");
    setAnimationSeed(Math.random());
  }, [selectedCategory]);

  // Get all main categories
  const allCategories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  // Get subcategories for selected main category
  const subcategories =
    selectedCategory !== "All"
      ? [
          "All",
          ...Array.from(
            new Set(
              projects
                .filter((p) => p.category === selectedCategory)
                .map((p) => p.subcategory)
                .filter(Boolean)
            )
          ),
        ]
      : [];

  // Filter projects based on selections
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSubcategory =
      selectedSubcategory === "All" ||
      project.subcategory === selectedSubcategory;
    return matchesCategory && matchesSubcategory;
  });

  // Update animation seed when category changes
  useEffect(() => {
    setAnimationSeed(Math.random());
  }, [selectedCategory]);

  const getRandomVariant = (): VariantsType => ({
    enter:
      Math.random() < 0.5
        ? { opacity: 0, scale: 0.8 }
        : { opacity: 0, x: Math.random() < 0.5 ? 50 : -50 },
    center: { opacity: 1, scale: 1, x: 0 },
    exit:
      Math.random() < 0.5
        ? { opacity: 0, scale: 0.8 }
        : { opacity: 0, x: Math.random() < 0.5 ? 50 : -50 },
  });

  // Category button component remains the same...

  return (
    <div className="py-20" id="portfolio">
      {/* ... other components remain the same ... */}
      <h1 className="heading">
        <span className="text-purple">Portfolio</span>{" "}
      </h1>
      {/* Categories Filter */}
      {/* <div className="flex flex-wrap justify-center gap-4 mt-8 px-4">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? "bg-purple text-white"
                : "bg-gray-800 hover:bg-gray-700 text-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div> */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 px-4">
        {allCategories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            selectedCategory={selectedCategory}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>
      {/* Subcategories */}
      {selectedCategory !== "All" && subcategories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-4 mt-4 px-4">
          {subcategories.map((subcategory) => (
            <CategoryButton
              key={subcategory}
              category={subcategory}
              selectedCategory={selectedSubcategory}
              onClick={() => setSelectedSubcategory(subcategory)}
              isSubcategory
            />
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 w-full max-w-[1400px] mx-auto">
        <AnimatePresence initial={false} mode="wait">
          {filteredProjects.map((item, index) => {
            const animationKey = `${item.id}-${animationSeed}`;
            const randomVariants = getRandomVariant();

            return (
              <motion.div
                key={animationKey}
                custom={index}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 100 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center my-20 md:my-12"
                  onMouseEnter={() => setHoveredProject(item.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <PinContainer
                    title={item.title}
                    href={item.link}
                    containerClassName="w-full"
                    className="w-full"
                  >
                    {/* ... rest of the PinContainer content remains the same ... */}
                    <div className="relative flex items-center justify-center w-full overflow-hidden aspect-video mb-10">
                      <div
                        className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                        style={{ backgroundColor: "#13162D" }}
                      >
                        <Image
                          src="/bg.png"
                          alt="Background Image"
                          layout="fill"
                          objectFit="cover"
                          priority
                        />
                      </div>

                      {/* Default image (shown when not hovering) */}
                      <AnimatePresence>
                        {hoveredProject !== item.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="z-10 absolute bottom-0"
                          >
                            <Image
                              src={item.img || "/placeholder.svg"}
                              alt="Cover Image"
                              width={400}
                              height={300}
                              className="w-full h-auto"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <AnimatePresence>
                        {hoveredProject === item.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="z-10 absolute inset-0 overflow-hidden lg:rounded-3xl"
                          >
                            <motion.div
                              initial={{ y: "0%" }}
                              animate={{
                                y: ["0%", "-100%"], // Full scroll from top to bottom
                              }}
                              transition={{
                                duration: 3, // Faster duration (reduced from 5 to 3 seconds)
                                ease: "linear",
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                              }}
                              className="w-full h-[300%]" // Increased height for full scroll
                            >
                              <Image
                                src={item.fullImg || "/placeholder.svg"}
                                alt="Full Project Image"
                                layout="fill"
                                objectFit="cover"
                                className="object-top"
                              />
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                      {item.title}
                    </h1>

                    <div className="flex items-center justify-between mt-7 mb-3">
                      <div className="flex justify-center items-center">
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:underline"
                          >
                            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                              Check Live Site
                            </p>
                            <FaLocationArrow
                              className="ms-3 w-7 h-7"
                              color="#CBACF9"
                            />
                          </a>
                        )}
                      </div>
                      <div className="flex justify-center items-center">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center hover:underline"
                        >
                          <FiEye className="ms-3 w-8 h-8" color="#CBACF9" />
                        </a>
                      </div>
                    </div>
                  </PinContainer>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      {/* Add at the bottom of the return statement */}
      {carouselOpen && (
        <CarouselModal
          projects={filteredProjects}
          initialIndex={selectedProjectIndex}
          onClose={() => setCarouselOpen(false)}
        />
      )}
    </div>
  );
};

export default RecentProjects;

const CategoryButton = ({
  category,
  selectedCategory,
  onClick,
  isSubcategory = false,
}: {
  category: string;
  selectedCategory: string;
  onClick: () => void;
  isSubcategory?: boolean;
}) => {
  const isSelected = category === selectedCategory;

  return (
    <button
      onClick={onClick}
      className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none ${
        isSelected ? (isSubcategory ? "w-40" : "w-full md:w-60") : "w-auto"
      }`}
    >
      {isSelected && (
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      )}

      <span
        className={`inline-flex items-center justify-center rounded-lg px-6 py-2 text-sm font-medium transition-all ${
          isSelected
            ? "bg-slate-950 text-white backdrop-blur-3xl"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        } ${isSelected ? "h-full w-full" : "h-auto"} ${
          isSubcategory ? "text-sm px-4" : ""
        }`}
      >
        {category}
      </span>
    </button>
  );
};
