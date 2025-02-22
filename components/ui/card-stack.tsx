"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { MovingBorder } from "./moving-border";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  icon: React.ElementType;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 20;
  const SCALE_FACTOR = scaleFactor || 0.05;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-[400px] w-full md:h-[500px]">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black-100 h-[400px] w-full md:h-[500px] rounded-3xl p-8 shadow-2xl border border-purple-500/20 flex flex-col justify-between"
            style={{ transformOrigin: "top center" }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            {/* Icon Section */}
            <div className="flex justify-center mt-10 mb-6">
              <Icon className="w-28 h-28 text-purple-500" />
            </div>
            <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-200">
              {card.content}
            </div>
            <div className="mt-4">
              <p className="text-lg md:text-xl font-semibold text-purple-600 dark:text-purple text-center uppercase">
                {card.name}
              </p>
              <p className="text-gray-500 text-center dark:text-gray-400">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  // return (
  //   <div className="relative h-[400px] w-full md:h-[500px]">
  //     {cards.map((card, index) => {
  //       const Icon = card.icon;
  //       return (
  //         <motion.div
  //           key={card.id}
  //           className="absolute dark:bg-black-100 h-[400px] w-full md:h-[500px] rounded-3xl p-[1px] shadow-2xl overflow-hidden"
  //           style={{ transformOrigin: "top center" }}
  //           animate={{
  //             top: index * -CARD_OFFSET,
  //             scale: 1 - index * SCALE_FACTOR,
  //             zIndex: cards.length - index,
  //           }}
  //         >
  //           {/* Moving Border */}
  //           <MovingBorder duration={2000} rx="30%" ry="30%">
  //             <div className="h-20 w-20 bg-[radial-gradient(var(--purple-500)_40%,transparent_60%)] opacity-[0.8]" />
  //           </MovingBorder>

  //           {/* Card Content */}
  //           <div className="absolute inset-0 bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between">
  //             <div className="flex justify-center mt-10 mb-6">
  //               <Icon className="w-28 h-28 text-purple-500" />
  //             </div>
  //             <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-200">
  //               {card.content}
  //             </div>
  //             <div className="mt-4">
  //               <p className="text-lg md:text-xl font-semibold text-purple-600 dark:text-purple text-center uppercase">
  //                 {card.name}
  //               </p>
  //               <p className="text-gray-500 text-center dark:text-gray-400">
  //                 {card.designation}
  //               </p>
  //             </div>
  //           </div>
  //         </motion.div>
  //       );
  //     })}
  //   </div>
  // );
};
