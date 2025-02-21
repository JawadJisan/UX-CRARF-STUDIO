// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect } from "react";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   children: React.ReactNode;
//   header?: React.ReactNode;
//   contentClassName?: string;
// }

// export function CustomModal({
//   isOpen,
//   onClose,
//   title,
//   children,
//   header,
//   contentClassName,
// }: ModalProps) {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <div className="relative mx-4 w-full max-w-3xl rounded-xl p-[1px] overflow-hidden">
//             {/* Animated Border */}
//             <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//             <motion.div
//               initial={{ scale: 0.95, y: 50 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.95, y: 50 }}
//               className="relative mx-4 w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl bg-gray-900 p-5"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header Section */}
//               <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center bg-gray-900">
//                 {header || (
//                   <>
//                     <h2 className="text-2xl font-bold text-white">{title}</h2>
//                     <button
//                       onClick={onClose}
//                       className="p-1 rounded-full hover:bg-gray-800 transition-colors"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-8 w-8 text-gray-400"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M6 18L18 6M6 6l12 12"
//                         />
//                       </svg>
//                     </button>
//                   </>
//                 )}
//               </div>

//               {/* Content Section */}
//               <div
//                 className={`bg-gray-800 max-h-[80vh] overflow-y-auto p-6 ${contentClassName}`}
//               >
//                 {children}
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect } from "react";
// import { Button } from "./MovingBorders";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   children: React.ReactNode;
//   header?: React.ReactNode;
//   contentClassName?: string;
// }

// export function CustomModal({
//   isOpen,
//   onClose,
//   title,
//   children,
//   header,
//   contentClassName,
// }: ModalProps) {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <div className="relative mx-4 w-full max-w-3xl rounded-xl p-[1px] overflow-hidden">
//             {/* Animated Border */}
//             <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

//             <motion.div
//               initial={{ scale: 0.95, y: 50 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.95, y: 50 }}
//               className="relative rounded-xl bg-gray-900 overflow-hidden shadow-2xl p-5"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header Section */}
//               <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center bg-gray-900">
//                 {header || (
//                   <>
//                     <h2 className="text-2xl font-bold text-white">{title}</h2>
//                     <Button
//                       onClick={onClose}
//                       className="p-1 rounded-full hover:bg-gray-800 transition-colors"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-8 w-8 text-gray-400"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M6 18L18 6M6 6l12 12"
//                         />
//                       </svg>
//                     </Button>
//                   </>
//                 )}
//               </div>

//               {/* Content Section */}
//               <div
//                 className={`bg-gray-800 max-h-[80vh] overflow-y-auto p-6 ${contentClassName}`}
//               >
//                 {children}
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Button } from "./MovingBorders";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  header?: React.ReactNode;
  contentClassName?: string;
}

export function CustomModal({
  isOpen,
  onClose,
  title,
  children,
  header,
  contentClassName,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 50, opacity: 0 }}
            className="relative mx-4 w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Border Container - Added z-0 */}
            <div className="absolute inset-0 rounded-xl overflow-hidden p-[1px] z-0">
              <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            </div>

            {/* Main Content - Added margin and higher z-index */}
            <div className="relative rounded-xl bg-gray-900 shadow-2xl overflow-hidden m-[1px] z-[1] p-3">
              {/* Header Section */}
              <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center bg-gray-900">
                {header || (
                  <>
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    <Button
                      onClick={onClose}
                      className="p-1 rounded-full hover:bg-gray-800 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Button>
                  </>
                )}
              </div>

              {/* Content Section */}
              <div
                className={`bg-gray-800 border border-gray-700 max-h-[80vh] overflow-y-auto p-6 rounded-lg shadow-inner ${contentClassName}`}
              >
                {children}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
