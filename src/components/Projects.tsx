"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ImageSlider from "./ImageSlider";

function ProjectCard({
  project,
  isActive,
  onClick,
}: {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
        isActive
          ? "border-accent/50 bg-accent/5 shadow-lg shadow-accent/5"
          : "border-border bg-card hover:bg-card-hover hover:border-border/80"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
            isActive ? "bg-accent/20" : "bg-border/50"
          }`}
          style={
            isActive ? { backgroundColor: `${project.color}20` } : undefined
          }
        >
          {project.featured ? (
            <svg
              className="w-4 h-4"
              style={{ color: project.color }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          ) : (
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: project.color }}
            />
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3
              className={`font-semibold text-sm transition-colors ${
                isActive ? "text-accent" : "text-foreground"
              }`}
            >
              {project.title}
            </h3>
            {project.featured && (
              <span className="text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400">
                Live
              </span>
            )}
          </div>
          <p className="text-xs text-muted mt-0.5">{project.subtitle}</p>
        </div>
      </div>
    </button>
  );
}

function LiveDemoEmbed({ url, color }: { url: string; color: string }) {
  return (
    <div className="relative w-full group">
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-900/50 border border-border/50">
        {/* Browser chrome */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900/90 backdrop-blur-sm flex items-center px-3 gap-2 z-10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-3">
            <div className="bg-gray-800/80 rounded-md px-3 py-1 text-[10px] text-muted/60 font-mono truncate">
              localhost:3000{url}
            </div>
          </div>
        </div>

        <iframe
          src={url}
          className="absolute inset-0 w-full h-full border-0 pt-8"
          title="Live Demo"
          loading="lazy"
        />

        {/* Hover overlay with link */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium shadow-2xl backdrop-blur-sm border border-white/10"
            style={{
              backgroundColor: `${color}cc`,
              boxShadow: `0 12px 40px ${color}40`,
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
            Open Full Screen
          </div>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications I've designed and built"
        />

        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Project selector - sidebar */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
            {projects.map((project) => (
              <div key={project.id} className="min-w-[220px] lg:min-w-0">
                <ProjectCard
                  project={project}
                  isActive={activeProject.id === project.id}
                  onClick={() => setActiveProject(project)}
                />
              </div>
            ))}
          </div>

          {/* Active project detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              {/* Image slider OR Live demo embed */}
              <div className="p-4 sm:p-6">
                {activeProject.demoUrl && activeProject.images.length === 0 ? (
                  <LiveDemoEmbed
                    url={activeProject.demoUrl}
                    color={activeProject.color}
                  />
                ) : (
                  <ImageSlider images={activeProject.images} />
                )}
              </div>

              {/* Project info */}
              <div className="px-4 sm:px-6 pb-6 space-y-5">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-2xl font-bold text-foreground">
                      {activeProject.title}
                    </h3>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${activeProject.color}15`,
                        color: activeProject.color,
                      }}
                    >
                      {activeProject.subtitle}
                    </span>
                    {activeProject.demoUrl && (
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                      >
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                        </span>
                        Live Demo
                      </a>
                    )}
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                    Key Highlights
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {activeProject.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-2 text-sm"
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: activeProject.color }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-muted">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-lg bg-border/50 text-muted hover:text-foreground transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
