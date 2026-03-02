"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="Academic foundation in Computer Science"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative p-8 rounded-xl border border-border bg-card hover:bg-card-hover transition-colors group"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                {education.institution}
              </h3>
              <p className="text-muted">{education.degree}</p>
            </div>

            <div className="sm:text-right space-y-2">
              <span className="inline-block text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
                {education.period}
              </span>
              <div className="flex items-center gap-2 sm:justify-end">
                <span className="text-sm text-muted">GPA:</span>
                <span className="text-2xl font-bold text-gradient">
                  {education.gpa}
                </span>
                <span className="text-sm text-muted">/ 5.0</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
