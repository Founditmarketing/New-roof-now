import { Link } from 'react-router-dom';
import { Phone, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-nrn-navy text-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 pt-20 pb-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-6">
              <img src="/logo.png" alt="New Roof Now" className="h-12 object-contain brightness-0 invert" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Re-roofing &amp; shade structure experts serving Apache Junction, Mesa, Gilbert, Chandler &amp; the Greater Valley.
            </p>
            <p className="text-white/40 text-xs mb-6">ROC #311721 &bull; ROC #315169 &bull; BBB A+</p>
            <a href="https://www.facebook.com/newroofarizona" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-nrn-brick hover:border-nrn-brick transition-colors">
              <Facebook size={16} />
            </a>
            <a href="https://www.instagram.com/craven_construction_az/" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-nrn-brick hover:border-nrn-brick transition-colors">
              <Instagram size={16} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 font-mono-label">Navigation</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Our Services' },
                { to: '/gallery', label: 'Work Gallery' },
                { to: '/contact', label: 'Get a Quote' },
              ].map(item => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/70 hover:text-white transition-colors font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 font-mono-label">Services</h4>
            <ul className="space-y-3">
              {[
                { to: '/services/installations', label: 'Re-Roofing' },
                { to: '/services/repair', label: 'Roof Repair' },
                { to: '/services/shingles', label: 'Shade Structures' },
                { to: '/services/insurance', label: 'Commercial Roofing' },
              ].map(item => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/70 hover:text-white transition-colors font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 font-mono-label">Contact</h4>
            <ul className="space-y-5">
              <li>
                <span className="text-xs text-nrn-gold font-bold uppercase tracking-wider block mb-1">Phone</span>
                <a href="tel:4808451833" className="text-xl font-bold hover:text-nrn-gold transition-colors font-mono-label">
                  (480) 845-1833
                </a>
                <span className="text-white/40 text-xs block mt-1">Habla Español · Mon–Sat</span>
              </li>
              <li>
                <span className="text-xs text-nrn-gold font-bold uppercase tracking-wider block mb-1">Address</span>
                <address className="text-sm text-white/70 not-italic leading-relaxed">
                  710 N Ironwood Dr<br />Apache Junction, AZ 85120
                </address>
              </li>
              <li>
                <span className="text-xs text-nrn-gold font-bold uppercase tracking-wider block mb-1">Email</span>
                <a href="mailto:info@newroofaz.com" className="text-sm text-white/70 hover:text-white transition-colors">
                  info@newroofaz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-mono-label">
          <span>© 2026 Craven Construction — New Roof Now. All rights reserved.</span>
          <span>Apache Junction, AZ · Licensed, Bonded &amp; Insured</span>
        </div>
      </div>
    </footer>
  );
}
