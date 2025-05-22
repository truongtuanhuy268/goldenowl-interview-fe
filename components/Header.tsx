"use client"

export default function Header({ onMenuToggle }: { onMenuToggle: () => void }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#0a1b7a] text-white p-4 flex items-center justify-between md:justify-center">
      <button className="md:hidden text-white p-2" onClick={onMenuToggle} aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
      <h1 className="text-xl md:text-2xl font-bold">G-Scores</h1>
      <div className="w-10 md:hidden"></div> {/* Spacer for centering */}
    </header>
  )
}
// Compare this snippet from app/layout.tsx:
// import type { Metadata } from "next";