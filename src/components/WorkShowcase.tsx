"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function WorkShowcase() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    project: string;
  } | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const allImages = projects.flatMap((project) =>
    project.images.map((img) => ({
      src: img,
      project: project.title,
      projectId: project.id,
      color: project.color,
    }))
  );

  const filteredImages =
    filter === "all"
      ? allImages
      : allImages.filter((img) => img.projectId === filter);

  return (
    <section id="showcase" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Work Showcase"
          subtitle="A visual gallery of interfaces and systems I've built"
        />

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === "all"
                ? "bg-accent text-white shadow-lg shadow-accent/25"
                : "bg-card border border-border text-muted hover:text-foreground hover:border-accent/30"
            }`}
          >
            All Work
          </button>
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setFilter(p.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === p.id
                  ? "text-white shadow-lg"
                  : "bg-card border border-border text-muted hover:text-foreground hover:border-accent/30"
              }`}
              style={
                filter === p.id
                  ? {
                      backgroundColor: p.color,
                      boxShadow: `0 10px 25px -5px ${p.color}40`,
                    }
                  : undefined
              }
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() =>
                  setSelectedImage({ src: img.src, project: img.project })
                }
              >
                <div className="relative rounded-xl overflow-hidden border border-border bg-card hover:border-accent/30 transition-all duration-300">
                  <Image
                    src={img.src}
                    alt={`${img.project} screenshot`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: img.color }}
                      />
                      <span className="text-white text-sm font-medium">
                        {img.project}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-5xl max-h-[85vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.src}
                  alt={`${selectedImage.project} screenshot`}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
                />
                <div className="absolute -bottom-12 left-0 right-0 text-center">
                  <span className="text-white/70 text-sm">
                    {selectedImage.project}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
