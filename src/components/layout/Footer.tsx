import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-20">
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="block mb-8">
                <img src="/logo.png" alt="New Roof Now" className="h-14 object-contain brightness-0 invert" />
              </Link>
              <p className="text-stone-500 text-xs leading-relaxed mb-4 uppercase tracking-widest font-medium">
                The Re-Roofing & Shade Structure Experts. 20+ years serving Southeast Phoenix.
              </p>
              <p className="text-stone-600 text-[10px] leading-relaxed mb-8 font-medium">
                ROC #311721 &bull; ROC #315169 &bull; BBB A+ Rated
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61579687125916" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-roof-red transition-colors"><Facebook size={18} /></a>
              </div>
          </div>

          <div>
            <h4 className="text-label text-stone-400 mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-xs font-bold uppercase tracking-widest hover:text-roof-red transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-xs font-bold uppercase tracking-widest hover:text-roof-red transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-xs font-bold uppercase tracking-widest hover:text-roof-red transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="text-xs font-bold uppercase tracking-widest hover:text-roof-red transition-colors">Work Gallery</Link></li>
              <li><Link to="/contact" className="text-xs font-bold uppercase tracking-widest hover:text-roof-red transition-colors">Request Estimate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-label text-stone-400 mb-8">Direct Contact</h4>
            <ul className="flex flex-col gap-8">
              <li className="flex flex-col gap-2">
                <span className="text-[10px] text-roof-red uppercase tracking-widest font-black">Call Us</span>
                <a href="tel:4808451833" className="text-xl font-mono font-bold hover:text-roof-red transition-colors">(480) 845-1833</a>
                <span className="text-[10px] text-stone-500 font-medium">Habla Español</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-[10px] text-roof-red uppercase tracking-widest font-black">Home Base</span>
                <span className="text-sm font-medium text-stone-400">710 N Ironwood Dr<br/>Apache Junction, AZ 85120</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-label text-stone-400 mb-8">Credentials</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-roof-red" /> Licensed, Bonded & Insured
              </li>
              <li className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-roof-red" /> BBB A+ Rating
              </li>
              <li className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-roof-red" /> 18-Month Financing Available
              </li>
              <li className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-roof-red" /> Bilingual Staff — Habla Español
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 text-[9px] font-black text-stone-400 uppercase tracking-[0.2em]">
            <span>© 2026 CRAVEN CONSTRUCTION — NEW ROOF NOW</span>
            <span>ROC #311721 / #315169</span>
          </div>
          <div className="text-[9px] font-black text-stone-600 uppercase tracking-[0.2em]">
            Apache Junction, AZ — Serving Mesa, Chandler, Gilbert, Tempe & Beyond
          </div>
        </div>
      </div>
    </footer>
  );
}
