"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Professional Experience"
          subtitle="Where I've built and scaled production systems"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:pr-[calc(50%+2rem)] md:text-right"
                  : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-2 w-3 h-3 rounded-full bg-accent border-4 border-background z-10 ${
                  index % 2 === 0
                    ? "left-[-6px] md:left-auto md:right-[calc(50%-6px)]"
                    : "left-[-6px] md:left-[calc(50%-6px)]"
                }`}
              />

              {/* Content card */}
              <div className="ml-6 md:ml-0 p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-colors group">
                <span className="inline-block text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {exp.title}
                </h3>
                <p className="text-muted text-sm mt-1">
                  {exp.company} &middot; {exp.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
