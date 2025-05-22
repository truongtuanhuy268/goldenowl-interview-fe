
export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header onMenuToggle={toggleSidebar} /> */}
      <div className="flex flex-1 relative">
        {/* <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} /> */}
        <main className="flex-1 p-4 md:p-6 bg-gray-50">
          <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
            Home page
          </div>
        </main>
      </div>
    </div>
  )
}
