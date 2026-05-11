import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { SERVICES } from '../../constants/services';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-az-blue shadow-lg shadow-az-blue/20">
      {/* Top gold accent line */}
      <div className="h-1 bg-gradient-to-r from-az-gold via-az-gold-light to-az-gold" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src="/images/CravenConstruction-Logo-white.png" alt="Craven Construction — Roofing Removal & Replacement of AZ" className="h-10 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/" end className={({ isActive }) =>
            `text-sm font-semibold transition-colors ${isActive ? 'text-az-gold-light' : 'text-white/75 hover:text-white'}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            `text-sm font-semibold transition-colors ${isActive ? 'text-az-gold-light' : 'text-white/75 hover:text-white'}`}>
            About
          </NavLink>

          {/* Services dropdown */}
          <div className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-white/75 hover:text-white transition-colors">
              Services <ChevronDown size={14} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-60 bg-az-blue-deep border border-white/10 shadow-2xl shadow-az-blue-deep/60">
                {SERVICES.map(s => (
                  <Link
                    key={s.id}
                    to={`/services/${s.id}`}
                    className="block px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-az-gold-light transition-colors border-b border-white/5 last:border-0"
                  >
                    {s.title}
                  </Link>
                ))}
                <Link to="/services" className="block px-5 py-3 text-xs font-bold text-az-gold uppercase tracking-wider hover:bg-white/10 transition-colors">
                  All Services →
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/gallery" className={({ isActive }) =>
            `text-sm font-semibold transition-colors ${isActive ? 'text-az-gold-light' : 'text-white/75 hover:text-white'}`}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
            `text-sm font-semibold transition-colors ${isActive ? 'text-az-gold-light' : 'text-white/75 hover:text-white'}`}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:4808451833" className="flex items-center gap-2 text-white/80 hover:text-az-gold-light transition-colors">
            <Phone size={15} className="text-az-gold" />
            <span className="font-mono font-bold text-sm">(480) 845-1833</span>
          </a>
          <Link to="/contact" className="bg-az-gold text-white px-5 py-2.5 text-sm font-bold hover:bg-az-gold-light transition-colors">
            Free Inspection
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-az-blue-deep border-t border-white/10 shadow-2xl">
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
                className="block py-3 text-base font-semibold text-white/80 hover:text-az-gold-light border-b border-white/10 last:border-0 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-6 flex flex-col gap-3">
            <a href="tel:4808451833" className="btn-brick text-center">Call (480) 845-1833</a>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-blue-outline text-center">Free Inspection</Link>
          </div>
        </div>
      )}
    </header>
  );
}
