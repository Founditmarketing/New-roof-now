import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants/services';
import { ArrowRight } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export function Services() {
  return (
    <div className="bg-nrn-cream pt-20">

      {/* Header */}
      <section className="py-20 md:py-28 bg-white border-b border-nrn-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-5 block">Arizona's Full-Spectrum Coverage</span>
            <h1 className="font-display text-6xl md:text-8xl text-nrn-text mb-6 leading-none">
              Superior<br /><em className="text-nrn-brick">Solutions.</em>
            </h1>
            <p className="text-nrn-muted text-xl max-w-2xl leading-relaxed">
              Expert roofing for every Arizona home and business — residential, commercial, and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 grid gap-12">
          {SERVICES.map((service, i) => (
            <motion.div key={service.id} {...fadeUp} transition={{ delay: i * 0.1 }}
              className="group grid lg:grid-cols-5 gap-0 bg-white border border-nrn-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="lg:col-span-2 h-64 lg:h-auto overflow-hidden">
                <img src={service.image} alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="lg:col-span-3 p-10 md:p-14 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-display text-4xl text-nrn-text">{service.title}</h2>
                  <span className="font-mono-label text-3xl text-nrn-border font-bold">0{i + 1}</span>
                </div>
                <p className="text-nrn-muted text-lg mb-8 leading-relaxed">{service.shortDescription}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {service.benefits?.slice(0, 3).map((b, bi) => (
                    <span key={bi} className="text-xs font-bold text-nrn-brick bg-nrn-warm border border-nrn-border px-3 py-1.5 uppercase tracking-wider">
                      {b}
                    </span>
                  ))}
                </div>
                <Link to={`/services/${service.id}`}
                  className="mt-auto inline-flex items-center gap-2 text-nrn-brick font-bold text-sm hover:gap-4 transition-all">
                  View Service Details <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capability matrix */}
      <section className="py-20 bg-nrn-warm border-y border-nrn-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <span className="section-label mb-4 block">Additional Capabilities</span>
            <h2 className="font-display text-4xl text-nrn-text">We Also Handle</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'Multi-Family', d: 'Apartment complexes and HOA communities.' },
              { t: 'Flat Roofing', d: 'Low-slope solutions for residential and commercial.' },
              { t: 'Forensic Audit', d: 'Post-storm damage reports for legal/insurance use.' },
              { t: 'Ridge Shield', d: 'Ventilation upgrades for extreme Arizona attic heat.' },
            ].map((cap, i) => (
              <div key={i} className="bg-white border border-nrn-border p-8 hover:border-nrn-brick transition-colors group">
                <h3 className="font-display text-2xl text-nrn-text mb-3 group-hover:text-nrn-brick transition-colors">{cap.t}</h3>
                <p className="text-nrn-muted text-sm leading-relaxed">{cap.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-white border-b border-nrn-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">Material Protocol</span>
            <h2 className="font-display text-5xl text-nrn-text">Standard vs. <em className="text-nrn-brick">NRN Spec.</em></h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-nrn-border">
              <thead>
                <tr className="bg-nrn-warm border-b border-nrn-border">
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-nrn-muted font-mono-label">Component</th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-nrn-muted font-mono-label">Standard Contractor</th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-nrn-brick font-mono-label">NRN Desert Spec</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: 'Main Shingle', s: 'Standard 3-Tab / Basic Arch', b: 'Owens Corning Duration / Atlas Pinnacle' },
                  { c: 'Underlayment', s: '15lb Asphalt Felt', b: 'High-Weight Synthetic Breathable' },
                  { c: 'Nailing Protocol', s: 'Standard Pattern', b: 'Enhanced High-Wind Pattern' },
                  { c: 'Ventilation', s: 'Standard Box Vents', b: 'Continuous High-Flow Ridge Vents' },
                  { c: 'Warranty', s: 'Standard Workmanship', b: 'Manufacturer-Backed Material Warranties' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-nrn-border hover:bg-nrn-warm/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-nrn-muted text-sm">{row.c}</td>
                    <td className="py-5 px-6 text-nrn-text text-sm">{row.s}</td>
                    <td className="py-5 px-6 text-nrn-brick font-bold text-sm italic">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Insurance band */}
      <section className="py-20 bg-nrn-navy on-navy">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-display text-4xl text-white mb-5">Dealing with <em className="text-nrn-gold">Monsoon Damage?</em></h3>
            <p className="text-white/60 leading-relaxed">
              We specialize in the Arizona insurance landscape. Our experts walk you through every step of the claim process to ensure full coverage after monsoon, hail, or haboob damage.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <Link to="/services/insurance"
              className="border-2 border-white text-white px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-nrn-navy transition-all">
              Commercial &amp; Claim Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
