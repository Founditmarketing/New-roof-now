import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants/services';
import { ArrowRight } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export function Services() {
  return (
    <div className="bg-az-sand pt-[73px]">

      {/* Header */}
      <section className="py-20 md:py-28 bg-az-blue relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{backgroundImage: 'repeating-linear-gradient(45deg, #F5B31A 0px, #F5B31A 2px, transparent 2px, transparent 40px)'}} />
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-5 block">Arizona's Full-Spectrum Roofing Coverage</span>
            <h1 className="font-display text-6xl md:text-8xl text-white mb-6 leading-none">
              Desert-Grade<br /><em className="text-az-gold-light">Solutions.</em>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
              Expert roofing for every Arizona home and business — built to survive 115°F heat, monsoon season, and decades of desert UV.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 grid gap-12">
          {SERVICES.map((service, i) => (
            <motion.div key={service.id} {...fadeUp} transition={{ delay: i * 0.1 }}
              className="group grid lg:grid-cols-5 gap-0 bg-white border border-az-border overflow-hidden hover:shadow-lg hover:shadow-az-gold/10 transition-shadow">
              <div className="lg:col-span-2 h-64 lg:h-auto overflow-hidden">
                <img src={service.image} alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="lg:col-span-3 p-10 md:p-14 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-display text-4xl text-az-text">{service.title}</h2>
                  <span className="font-mono-label text-3xl text-az-border font-bold">0{i + 1}</span>
                </div>
                <p className="text-az-rock text-lg mb-8 leading-relaxed">{service.shortDescription}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {service.benefits?.slice(0, 3).map((b, bi) => (
                    <span key={bi} className="text-xs font-bold text-az-gold bg-az-gold-pale border border-az-gold/20 px-3 py-1.5 uppercase tracking-wider">
                      {b}
                    </span>
                  ))}
                </div>
                <Link to={`/services/${service.id}`}
                  className="mt-auto inline-flex items-center gap-2 text-az-gold font-bold text-sm hover:gap-4 transition-all">
                  View Service Details <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capability matrix */}
      <section className="py-20 bg-az-dune border-y border-az-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <span className="section-label mb-4 block">Additional Capabilities</span>
            <h2 className="font-display text-4xl text-az-text">We Also Handle</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'Multi-Family', d: 'Apartment complexes and HOA communities across the Valley.' },
              { t: 'Flat Roofing', d: 'Low-slope solutions — critical for monsoon runoff management.' },
              { t: 'Forensic Audit', d: 'Post-storm damage reports for legal and insurance use.' },
              { t: 'Ridge Shield', d: 'Ventilation upgrades for extreme Arizona attic heat management.' },
            ].map((cap, i) => (
              <div key={i} className="bg-white border border-az-border p-8 hover:border-az-gold transition-colors group">
                <h3 className="font-display text-2xl text-az-text mb-3 group-hover:text-az-gold transition-colors">{cap.t}</h3>
                <p className="text-az-rock text-sm leading-relaxed">{cap.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-white border-b border-az-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">Material Protocol</span>
            <h2 className="font-display text-5xl text-az-text">Standard vs. <em className="text-az-gold">NRN Desert Spec.</em></h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-az-border">
              <thead>
                <tr className="bg-az-dune border-b border-az-border">
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-az-rock font-mono-label">Component</th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-az-rock font-mono-label">Standard Contractor</th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-az-gold font-mono-label">NRN Desert Spec</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: 'Main Shingle', s: 'Standard 3-Tab / Basic Arch', b: 'Owens Corning Duration / Atlas Pinnacle' },
                  { c: 'Underlayment', s: '15lb Asphalt Felt', b: 'High-Weight Synthetic Breathable' },
                  { c: 'Nailing Protocol', s: 'Standard Pattern', b: 'Enhanced High-Wind Pattern (Monsoon Rated)' },
                  { c: 'Ventilation', s: 'Standard Box Vents', b: 'Continuous High-Flow Ridge Vents (115°F Attic)' },
                  { c: 'Warranty', s: 'Standard Workmanship', b: 'Manufacturer-Backed Material Warranties' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-az-border hover:bg-az-dune/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-az-rock text-sm">{row.c}</td>
                    <td className="py-5 px-6 text-az-text text-sm">{row.s}</td>
                    <td className="py-5 px-6 text-az-gold font-bold text-sm italic">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Monsoon band */}
      <section className="py-20 bg-az-blue on-navy">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-display text-4xl text-white mb-5">Dealing with <em className="text-az-gold-light">Monsoon Damage?</em></h3>
            <p className="text-white/60 leading-relaxed">
              We specialize in the Arizona insurance landscape. Our experts walk you through every step of the claim process to ensure full coverage after monsoon, hail, or haboob damage. Don't let storm chasers rush you — call a local team that knows the Valley.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <Link to="/services/insurance"
              className="border-2 border-white text-white px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-az-blue transition-all">
              Commercial &amp; Claim Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
