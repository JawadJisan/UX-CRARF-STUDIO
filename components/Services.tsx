"use client";

import { Carousel } from "./ui/Carousel";

export function Services() {
  const slideData = [
    {
      title: "Backend Development",
      button: "Explore Services",
      src: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Build powerful and scalable server-side applications with robust backend technologies.",
      category: "Development",
    },
    {
      title: "UI/UX Design",
      button: "Explore Services",
      src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Create visually stunning and user-friendly interfaces to enhance user experience.",
      category: "Design",
    },
    {
      title: "CMS Development",
      button: "Explore Services",
      src: "https://images.unsplash.com/photo-1560472355-109703aa3edc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Develop flexible and scalable content management systems tailored to your needs.",
      category: "Web Development",
    },
    {
      title: "Graphic Design",
      button: "Explore Services",
      src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Craft visually compelling designs that communicate your brand’s identity effectively.",
      category: "Design",
    },
    {
      title: "Motion Graphics",
      button: "Explore Services",
      src: "https://images.unsplash.com/photo-1628494391268-c9935bc384d5?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Bring ideas to life with dynamic motion graphics and engaging animations.",
      category: "Animation",
    },
    {
      title: "Frontend Development",
      button: "Explore Services",
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Develop stunning, responsive, and interactive web applications with cutting-edge frontend technologies.",
      category: "Development",
    },
  ];

  // return (
  //   <div className="relative overflow-hidden w-full h-full py-20">
  //     <Carousel slides={slideData} />
  //   </div>
  // );

  return (
    <div id="services" className="w-full h-full py-20">
      <h1 className="heading mt-16">
        Our <span className="text-purple"> Services</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center mt-5 mb-20">
        <span className="text-purple">UX CRARF STUDIO</span> has got a team of
        professional, skillful persons. We provide full business solution to our
        clients. We have expertise on Graphic, Web, Application, Software,
        Social Media & Promotional sector.
      </p>
      <Carousel slides={slideData} />
    </div>
  );
}
