"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "8+", label: "Years Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "2M+", label: "Users Served", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
  { value: "38%", label: "Performance Gains", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
  { value: "45%", label: "Latency Reduction", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
];

const coreValues = [
  { title: "End-to-End Ownership", description: "From UI to infrastructure — I own the full stack and deliver complete solutions." },
  { title: "Performance Obsessed", description: "Every millisecond matters. I optimize for speed, scalability, and user experience." },
  { title: "Mentorship & Growth", description: "I invest in team growth through code reviews, architecture guidance, and best practices." },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" subtitle="Building production software at scale" />

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-muted leading-relaxed">
              I&apos;m Hiro Tanaka — my friends call me Daniel. I&apos;m a Senior Full-Stack Engineer based in Hokkaido, Japan, with over 8+ years of
              experience building and scaling production web applications. My work spans the full
              stack — from crafting performant user interfaces to designing robust backend services
              and cloud infrastructure.
            </p>
            <p className="text-muted leading-relaxed">
              I specialize in the JavaScript and TypeScript ecosystem, with deep expertise in
              React, Next.js, Node.js, and cloud-native architectures. I&apos;ve led development
              on platforms serving millions of users, with a focus on performance, reliability,
              and developer experience.
            </p>
            <p className="text-muted leading-relaxed">
              I thrive in fast-paced SaaS environments where complex data flows, cross-functional
              collaboration, and high-quality engineering standards are the norm. Whether it&apos;s
              architecting a new service, optimizing a critical path, or mentoring engineers —
              I bring ownership and technical depth to every challenge.
            </p>

            {/* Core values */}
            <div className="pt-4 space-y-3">
              {coreValues.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex gap-3 items-start"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <span className="text-foreground font-medium text-sm">{value.title}</span>
                    <span className="text-muted text-sm"> — {value.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-accent/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
