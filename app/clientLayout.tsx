"use client"

import type React from "react"

import { useState } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header onMenuToggle={toggleSidebar} />
          <div className="flex flex-1 relative">
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            <main className="flex-1 p-4 md:p-6 bg-gray-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
