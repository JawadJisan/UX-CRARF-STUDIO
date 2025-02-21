import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { SpotlightNew } from "./ui/spotlight-new";

const Hero = () => {
  return (
    // <div className="pb-20 pt-36">
    //   {/**
    //    *  UI: Spotlights
    //    *  Link: https://ui.aceternity.com/components/spotlight
    //    */}
    //   <div>
    //     <Spotlight
    //       className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
    //       fill="white"
    //     />
    //     <Spotlight
    //       className="h-[80vh] w-[50vw] top-10 left-full"
    //       fill="purple"
    //     />
    //     <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
    //   </div>

    //   {/**
    //    *  UI: grid
    //    *  change bg color to bg-black-100 and reduce grid color from
    //    *  0.2 to 0.03
    //    */}
    //   <div
    //     className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
    //    absolute top-0 left-0 flex items-center justify-center"
    //   >
    //     {/* Radial gradient for the container to give a faded look */}
    //     <div
    //       // chnage the bg to bg-black-100, so it matches the bg color and will blend in
    //       className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
    //      bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
    //     />
    //   </div>

    //   <div className="flex justify-center relative my-20 z-10">
    //     <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
    //       <TextGenerateEffect
    //         words="Providing full Graphic, Web, Social Media & Promotional services throughout the world!"
    //         className="text-center text-[22px] md:text-5xl lg:text-5xl"
    //       />
    //       <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
    //         Creating Business Solutions for the Future
    //       </p>

    //       {/**
    //        *  Link: https://ui.aceternity.com/components/text-generate-effect
    //        *
    //        *  change md:text-6xl, add more responsive code
    //        */}

    //       <a href="#about">
    //         <MagicButton
    //           title="Read More"
    //           icon={<FaLocationArrow />}
    //           position="right"
    //         />
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <div className="pb-20 pt-36">
      <div>
        <SpotlightNew
          gradientFirst="radial-gradient(70% 70% at 50% 30%, hsla(200, 90%, 90%, 0.1) 0, hsla(200, 90%, 60%, 0.05) 50%, hsla(200, 90%, 50%, 0) 100%)"
          gradientSecond="radial-gradient(60% 60% at 50% 50%, hsla(200, 90%, 85%, 0.08) 0, hsla(200, 90%, 55%, 0.03) 70%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(200, 90%, 85%, 0.06) 0, hsla(200, 90%, 45%, 0.02) 80%, transparent 100%)"
          translateY={-300}
        />
        <SpotlightNew
          gradientFirst="radial-gradient(70% 70% at 50% 30%, hsla(200, 90%, 90%, 0.1) 0, hsla(200, 90%, 60%, 0.05) 50%, hsla(200, 90%, 50%, 0) 100%)"
          gradientSecond="radial-gradient(60% 60% at 50% 50%, hsla(200, 90%, 85%, 0.08) 0, hsla(200, 90%, 55%, 0.03) 70%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(200, 90%, 85%, 0.06) 0, hsla(200, 90%, 45%, 0.02) 80%, transparent 100%)"
          translateY={-300}
        />
        {/* <SpotlightNew
          gradientFirst="radial-gradient(75% 75% at 55% 40%, hsla(40, 100%, 90%, 0.12) 0, hsla(40, 100%, 60%, 0.06) 40%, hsla(40, 100%, 45%, 0) 80%)"
          gradientSecond="radial-gradient(55% 55% at 50% 50%, hsla(40, 100%, 85%, 0.1) 0, hsla(40, 100%, 55%, 0.05) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(40, 100%, 85%, 0.08) 0, hsla(40, 100%, 45%, 0.03) 80%, transparent 100%)"
          translateY={-350}
          width={560}
          height={1380}
        /> */}

        {/* <SpotlightNew /> */}
        {/* <SpotlightNew /> */}
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Providing full Graphic, Web, Social Media & Promotional services throughout the world!"
            className="text-center text-[32px] md:text-5xl lg:text-5xl"
          />
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Creating Business Solutions for the Future
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}

          <a href="#about">
            <MagicButton
              title="Read More"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
