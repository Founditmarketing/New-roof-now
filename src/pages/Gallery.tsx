import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


// Photos will be added when real Craven Construction images are sourced
const PHOTO_COUNT = 22;

export function Gallery() {
  return (
    <div className="bg-az-sand pt-[73px]">

      {/* Header */}
      <section className="py-20 md:py-28 bg-az-blue relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{backgroundImage: 'repeating-linear-gradient(45deg, #F5B31A 0px, #F5B31A 2px, transparent 2px, transparent 40px)'}} />
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-5 block">Visual Proof — The NRN Portfolio</span>
            <h1 className="font-display text-6xl md:text-8xl text-white mb-6 leading-none">
              Built To <em className="text-az-gold-light">Last.</em>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
              Every project tells a story of integrity and craftsmanship. No filters — just desert-proven results across the Valley.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-az-dune border-b border-az-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { l: 'Google Rating', v: '5.0 ★', s: '19 Verified Reviews' },
            { l: 'Service Area', v: 'Valley', s: 'Phoenix & Surrounds' },
            { l: 'Storm Response', v: '24/7', s: 'Monsoon Season Active' },
            { l: 'Materials', v: 'OC + Atlas', s: 'Owens Corning & Atlas Pinnacle' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl text-az-gold mb-1">{stat.v}</div>
              <div className="font-bold text-sm text-az-text">{stat.l}</div>
              <div className="text-xs text-az-rock mt-0.5">{stat.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery grid — photos coming soon */}
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[...Array(PHOTO_COUNT)].map((_, i) => (
              <div key={i} className="break-inside-avoid border border-az-border bg-az-dune flex items-center justify-center" style={{height: `${180 + (i % 3) * 60}px`}}>
                <span className="font-mono-label text-az-stone text-xs uppercase tracking-widest">Photo Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white border-y border-az-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label mb-4 block">Project Breakdown</span>
            <h2 className="font-display text-5xl text-az-text mb-8 leading-tight">
              Anatomy of a<br /><em className="text-az-gold">Monsoon-Ready Install.</em>
            </h2>
            <p className="text-az-rock text-lg mb-10 leading-relaxed">
              Every NRN install follows a strict multi-layer protocol: cool-roof rated shingles, high-reflectivity underlayment, and industrial-grade ridge vents engineered for Arizona's extreme attic heat. Built to outlast the desert.
            </p>
            <ul className="space-y-3">
              {[
                'Owens Corning Duration Shingles — High-Wind Rated',
                'Hand-Nail Options for precision placement',
                'Complete Gutter & Fascia structural inspection',
                'Zero-Debris Cleanup Guarantee',
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-semibold text-az-text">
                  <div className="w-2 h-2 bg-az-gold shrink-0 rounded-full" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-az-border overflow-hidden bg-az-dune flex items-center justify-center h-80">
            <span className="font-mono-label text-az-stone text-xs uppercase tracking-widest">Photo Coming Soon</span>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-az-dune border-b border-az-border text-center">
        <h3 className="font-display text-4xl text-az-text mb-4">See Your Home In Our Next Update?</h3>
        <p className="text-az-rock text-sm mb-10">Every job we finish goes in the portfolio — yours could be next.</p>
        <Link to="/contact" className="btn-brick inline-flex items-center gap-3">
          Request Project Quote <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
