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
          <div className="flex-1 flex relative">
            <div className="hidden md:block md:fixed md:top-[57px] md:left-0 md:bottom-0 md:w-64">
              <Sidebar isOpen={true} onClose={toggleSidebar} />
            </div>
            <div className="md:hidden absolute top-0 left-0 w-full">
              <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            </div>
            <main className="flex-1 p-4 md:p-6 bg-gray-50 md:ml-64">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
