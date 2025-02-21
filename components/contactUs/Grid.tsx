// import { gridItemsContact } from "@/data";
// import { BentoGrid, BentoGridItem } from "./BentoGrid";

// const ContactUs = () => {
//   return (
//     <section id="about">
//       <BentoGrid className="w-full py-20">
//         {gridItemsContact.map((item, i) => (
//           <BentoGridItem
//             id={item.id}
//             key={i}
//             title={item.title}
//             description={item.description}
//             className={item.className}
//             img={item.img}
//             imgClassName={item.imgClassName}
//             titleClassName={item.titleClassName}
//             spareImg={item.spareImg}
//           />
//         ))}
//       </BentoGrid>
//     </section>
//   );
// };

// export default ContactUs;

"use client";
import { motion } from "framer-motion";
import GridGlobe from "./GridGlobe";
import MagicButton from "../MagicButton";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden py-20 px-4 lg:px-8"
    >
      {/* Globe Background */}
      <div className="absolute inset-0 z-0">
        <GridGlobe />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-black/50 backdrop-blur-lg rounded-3xl border border-white/20 p-8 lg:p-12"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-[#C1C2D3] text-lg">
                Let&apos;s create something amazing together
              </p>
            </motion.div>

            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <label className="text-white text-sm">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-primary transition-all"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <MagicButton
                  title="Send Message"
                  otherClasses="w-full"
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
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
