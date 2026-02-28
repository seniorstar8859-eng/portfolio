"use client";

import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            Email
          </a>
          <a
            href={`https://t.me/${personalInfo.telegram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
