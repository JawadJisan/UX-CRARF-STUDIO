"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };
  const staggerChildren = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  return (
    <>
      <footer className="w-full pt-20 pb-10" id="contact">
        {/* background grid */}
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <Image
            src="/footer-grid.svg"
            alt="grid"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>

        {/* <div className="flex flex-col items-center">
          <a href="mailto:contact@jsmastery.pro">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div> */}

        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* About Section */}
            <motion.div
              {...fadeInUp}
              className="space-y-6 text-center md:text-left"
            >
              <h3 className="text-2xl font-bold text-purple">
                UX CRARF STUDIO
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Crafting exceptional digital experiences through innovative
                design and cutting-edge development. Transforming ideas into
                reality since 2020.
              </p>
            </motion.div>

            {/* Services Section */}
            <motion.div
              {...fadeInUp}
              className="space-y-6 text-center md:text-left"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    <Link href={service.link}>{service.name}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Useful Links */}
            <motion.div
              {...fadeInUp}
              className="space-y-6 text-center md:text-left"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {usefulLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    <Link href={link.url}>{link.name}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              {...fadeInUp}
              className="space-y-6 text-center md:text-left"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300 gap-4 justify-center md:justify-start">
                  <div className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple-400 transition-colors">
                    <FaEnvelope className="w-5 h-5 text-purple-400" />
                  </div>
                  <a
                    href="mailto:uxcraftstudio936@gmail.com"
                    className="text-sm hover:text-purple-400 transition-colors"
                  >
                    uxcraftstudio936@gmail.com
                  </a>
                </li>
                <li className="flex items-center text-gray-300 gap-4 justify-center md:justify-start">
                  <div className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple-400 transition-colors">
                    <FaPhone className="w-5 h-5 text-purple-400" />
                  </div>
                  <a
                    href="tel:+1234567890"
                    className="text-sm hover:text-purple-400 transition-colors"
                  >
                    +8801986483724
                  </a>
                </li>
                <li className="flex items-center text-gray-300 gap-4 justify-center md:justify-start">
                  <div className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple-400 transition-colors">
                    <FaMapMarkerAlt className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-sm">
                    House: 117/2 West Dhanmondi, Shankar, Dhanmondi, Dhaka,
                    Bangladesh.
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
        {/* Bottom Section */}
        <motion.div
          {...fadeInUp}
          className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} UX CRARF STUDIO. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialMedia.map((info) => (
              <motion.div
                key={info.id}
                whileHover={{ y: -2 }}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple-400 transition-colors"
              >
                <Image
                  src={info.img}
                  alt={"info.id"}
                  width={20}
                  height={20}
                  className="filter brightness-0 invert-[40%] hover:invert-[60%] transition-all"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;

const services = [
  { name: "UX Design", link: "/" },
  { name: "UI Design", link: "/" },
  { name: "Web Development", link: "/" },
  { name: "Mobile App Design", link: "/" },
];

export const usefulLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/" },
  { name: "Portfolio", url: "/" },
  { name: "Blog", url: "/" },
  { name: "Contact", url: "/" },
];

// export const socialMedia = [
//   { id: "twitter", link: "https://twitter.com/uxcraftstudio" },
//   { id: "facebook", link: "https://facebook.com/uxcraftstudio" },
//   { id: "linkedin", link: "https://linkedin.com/company/uxcraftstudio" },
//   { id: "instagram", link: "https://instagram.com/uxcraftstudio" },
// ];
