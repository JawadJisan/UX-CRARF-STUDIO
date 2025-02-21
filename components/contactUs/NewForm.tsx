// import { cn } from "@/lib/utils";
// import React from "react";
// import { globeConfig, sampleArcs } from "@/data"; // Import your globe config
// import dynamic from "next/dynamic";

// const World = dynamic(() => import("./Globe").then((m) => m.World), {
//   ssr: false,
// });

// export function BentoGridSecondDemo() {
//   const items = [
//     // Contact Form Item
//     {
//       title: "Contact Us",
//       description: "Get in touch with our team",
//       header: (
//         <div className="h-full p-4">
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800"
//             />
//             <textarea
//               placeholder="Message"
//               rows={4}
//               className="w-full p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800"
//             />
//           </form>
//         </div>
//       ),
//       className: "md:col-span-2",
//       //   icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//     },
//     // Globe Item
//     {
//       title: "Our Global Reach",
//       description: "Interactive 3D visualization of our network",
//       header: (
//         <div className="h-48 md:h-full w-full relative -ml-4">
//           <World data={sampleArcs} globeConfig={globeConfig} />
//         </div>
//       ),
//       className: "md:col-span-1 md:-ml-8 lg:-ml-12", // Negative margin for overlap
//       //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//     },
//     // ... keep other items as needed
//   ];

//   return (
//     <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[24rem]">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           description={item.description}
//           header={item.header}
//           className={item.className}
//           //   icon={item.icon}
//         />
//       ))}
//     </BentoGrid>
//   );
// }

// // Updated BentoGrid component with responsive adjustments
// export const BentoGrid = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "grid md:auto-rows-[24rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// // Updated BentoGridItem with overflow handling
// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   header,
//   icon,
// }: {
//   className?: string;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   header?: React.ReactNode;
//   icon?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 overflow-hidden",
//         className
//       )}
//     >
//       {header}
//       <div className="group-hover/bento:translate-x-2 transition duration-200">
//         {icon}
//         <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
//           {title}
//         </div>
//         <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
//           {description}
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { globeConfig, sampleArcs } from "@/data";
import dynamic from "next/dynamic";
import MagicButton from "../MagicButton";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

export function BentoGridSecondDemo() {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center relative overflow-hidden px-4 py-12 md:py-24">
      {/* Transparent Contact Form */}
      <div className="w-full md:w-1/2 lg:w-1/3 z-20 p-6 md:p-8 bg-transparent backdrop-blur-lg">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-transparent border-b-2 border-white/30 focus:border-cyan-400 outline-none text-white placeholder-gray-400/80 transition-all"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-transparent border-b-2 border-white/30 focus:border-cyan-400 outline-none text-white placeholder-gray-400/80 transition-all"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 bg-transparent border-b-2 border-white/30 focus:border-cyan-400 outline-none text-white placeholder-gray-400/80 resize-none transition-all"
          />

          <div className="flex justify-center">
            <MagicButton
              title="Send Message"
              position="right"
              otherClasses="bg-transparent border border-white/30 hover:border-cyan-400"
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
            />
          </div>
        </form>
      </div>

      {/* Globe Container */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto absolute md:relative z-10">
        <div className="w-full h-full md:-ml-20 lg:-ml-32 transform">
          <World data={sampleArcs} globeConfig={globeConfig} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent md:bg-none" />
        </div>
      </div>

      {/* Mobile Overlay */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0" />
    </section>
  );
}
