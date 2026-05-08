import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { SERVICES } from '../../constants/services';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nrn-cream border-b border-nrn-border">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src="/logo.png" alt="New Roof Now" className="h-10 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/" className={({ isActive }) => `text-sm font-semibold transition-colors ${isActive ? 'text-nrn-brick' : 'text-nrn-muted hover:text-nrn-text'}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-sm font-semibold transition-colors ${isActive ? 'text-nrn-brick' : 'text-nrn-muted hover:text-nrn-text'}`}>
            About
          </NavLink>

          {/* Services dropdown */}
          <div className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-nrn-muted hover:text-nrn-text transition-colors">
              Services <ChevronDown size={14} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-nrn-border shadow-xl">
                {SERVICES.map(s => (
                  <Link
                    key={s.id}
                    to={`/services/${s.id}`}
                    className="block px-5 py-3 text-sm font-medium text-nrn-text hover:bg-nrn-warm hover:text-nrn-brick transition-colors border-b border-nrn-border last:border-0"
                  >
                    {s.title}
                  </Link>
                ))}
                <Link to="/services" className="block px-5 py-3 text-xs font-bold text-nrn-brick uppercase tracking-wider hover:bg-nrn-warm transition-colors">
                  All Services →
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/gallery" className={({ isActive }) => `text-sm font-semibold transition-colors ${isActive ? 'text-nrn-brick' : 'text-nrn-muted hover:text-nrn-text'}`}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `text-sm font-semibold transition-colors ${isActive ? 'text-nrn-brick' : 'text-nrn-muted hover:text-nrn-text'}`}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:4808451833" className="flex items-center gap-2 text-nrn-text hover:text-nrn-brick transition-colors">
            <Phone size={15} className="text-nrn-brick" />
            <span className="font-mono font-bold text-sm">(480) 845-1833</span>
          </a>
          <Link to="/contact" className="bg-nrn-brick text-white px-5 py-2.5 text-sm font-bold hover:bg-nrn-brick-dark transition-colors">
            Free Inspection
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-nrn-text p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-nrn-border shadow-lg">
          <nav className="px-6 py-6 space-y-1">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/services', label: 'Services' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map(item => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-semibold text-nrn-text hover:text-nrn-brick border-b border-nrn-border last:border-0 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-6 flex flex-col gap-3">
            <a href="tel:4808451833" className="btn-brick text-center">Call (480) 845-1833</a>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-outline text-center">Free Inspection</Link>
          </div>
        </div>
      )}
    </header>
  );
}
