"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import DesignProcess from "@/components/DesignProcess";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { ContactUs } from "@/components/contactUs/GlobleDemo";
import { Services } from "@/components/Services";
import AboutSectionNew from "@/components/About-new";
import Cardsss from "@/components/New";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
        <Hero />
        <AboutSectionNew />
        <Services />
        <DesignProcess />
        {/* for now client section is paused letter when we get review then show it */}
        {/* <Clients /> */}
        <RecentProjects />
        <ContactUs />
        <Footer />
        {/* ------ */}
        {/* <Grid /> */}
        {/* <Experience /> */}
      </div>
    </main>
  );
};

export default Home;
