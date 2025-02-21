"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { InfiniteMovingCompanies } from "./ui/InfiniteMove";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Words from
        <span className="text-purple"> clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <InfiniteMovingCompanies
          items={companies}
          speed="normal"
          direction="left"
          className="max-w-7xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Clients;
