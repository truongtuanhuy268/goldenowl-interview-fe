"use client"

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Mobile overlay - clickable to close sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`
        fixed md:static top-[57px] left-0 z-30
        w-64 h-[calc(100vh-57px)] md:h-[calc(100vh-57px)] bg-gradient-to-b from-[#f0d000] via-[#a0c020] to-[#40a0a0]
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <div className="h-full overflow-y-auto">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Menu</h2>
            <nav className="space-y-6">
              <a href="/dashboard" className="block font-medium hover:underline">
                Dashboard
              </a>
              <a href="/searchscore" className="block font-medium hover:underline">
                Search Scores
              </a>
              <a href="/reports" className="block font-medium hover:underline">
                Reports
              </a>
              <a href="/settings" className="block font-medium hover:underline">
                Settings
              </a>
            </nav>
          </div>
        </div>
      </aside>
    </>
  )
}
