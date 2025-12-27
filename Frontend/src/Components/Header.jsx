import { useEffect, useRef, useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import logo from "../assets/logo.png"

export default function Header({
   onHome,
  onPackages,
  // onDestinations,
  // onContact,
}) {
  const navItems = [
    { label: "Home", action: onHome },
    { label: "Packages", action: onPackages },
    // { label: "Destinations", action: onDestinations },
    // { label: "Contact", action: onContact },
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
const headerRef = useRef(null)

  useEffect(() => {
  if (!isMenuOpen) return

  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setIsMenuOpen(false)
    }
  }

  document.addEventListener("mousedown", handleClickOutside)

  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [isMenuOpen])


  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-100">

      {/* Main Header */}
      <div className=" container m-auto w-full sm:rounded-xl lg:rounded-2xl mt-2 bg-[#ffffff91] backdrop-blur-md shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
                  <img src={logo} alt="" className="h-18" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="flex items-center gap-8">
                {navItems.map(({ label, action }) => (
          <button
            key={label}
           onClick={() => {
    action?.()
    setIsMenuOpen(false)
  }}
            type="button"
            className="relative font-bold text-[#3F2455] transition hover:text-[#CF9F3B] group"
          >
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#CF9F3B] to-[#dd9c0f] transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
              </div>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-amber-50 transition"
              onClick={() => setIsMenuOpen(prev => !prev)}
            >
              {isMenuOpen ? (
                <X size={28} className="text-[#CF9F3B]" />
              ) : (
                <Menu size={28} className="text-[#CF9F3B]" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 pb-4 animate-slide-down">
              <nav className="flex flex-col  gap-4 py-4">
              {navItems.map(({ label, action }) => (
          <button
            key={label}
           onClick={() => {
    action?.()
    setIsMenuOpen(false)
  }}
            type="button"
            className="relative font-bold text-start w-fit cursor-pointer text-[#3F2455] transition hover:text-[#CF9F3B] group"
          >
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#CF9F3B] to-[#dd9c0f] transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
              </nav>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>

    </header>
  )
}