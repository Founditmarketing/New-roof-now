import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const PHOTOS = [
  { id: 1,  src: '/images/IMG_3704.png',                             title: 'Hero Crew Shot',           tag: 'Installation' },
  { id: 2,  src: '/images/Untitled-design-4.png',                    title: 'Precision Nail Work',      tag: 'Workmanship' },
  { id: 3,  src: '/images/Untitled-design-3.png',                    title: 'Crew on Gabled Roof',      tag: 'Installation' },
  { id: 4,  src: '/images/Untitled-design-2.png',                    title: 'Finished Brick-House Roof',tag: 'Residential' },
  { id: 5,  src: '/images/Untitled-design-12.png',                   title: 'Shingle Close-Up',         tag: 'Owens Corning' },
  { id: 6,  src: '/images/Untitled-design-7.png',                    title: 'Sunset Shingle Detail',    tag: 'Premium' },
  { id: 7,  src: '/images/IMG_3700.png',                             title: 'Commercial Project',       tag: 'Industrial' },
  { id: 8,  src: '/images/Untitled-design-9.png',                    title: 'Roof Ridge Work',          tag: 'Installation' },
  { id: 9,  src: '/images/Untitled-design-10.png',                   title: 'Shingle Layering',         tag: 'Workmanship' },
  { id: 10, src: '/images/Untitled-design-11.png',                   title: 'Crew At Work',             tag: 'Team' },
  { id: 11, src: '/images/Untitled-design-13.png',                   title: 'Atlas Pinnacle Shingles',  tag: 'Atlas' },
  { id: 12, src: '/images/Untitled-design-14.png',                   title: 'Residential Install',      tag: 'Residential' },
  { id: 13, src: '/images/Untitled-design-15.png',                   title: 'Roof Valley Detail',       tag: 'Workmanship' },
  { id: 14, src: '/images/Untitled-design-16-scaled.png',            title: 'Monsoon Repair Job',       tag: 'Storm Repair' },
  { id: 15, src: '/images/Untitled-design-17.png',                   title: 'Ridge Vent Install',       tag: 'Ventilation' },
  { id: 16, src: '/images/Untitled-design-18.png',                   title: 'Full Replacement',         tag: 'Residential' },
  { id: 17, src: '/images/Untitled-design-19.png',                   title: 'Eave & Fascia Work',       tag: 'Detail' },
  { id: 18, src: '/images/Untitled-design-20.png',                   title: 'Nail Pattern Close-Up',    tag: 'Workmanship' },
  { id: 19, src: '/images/Untitled-design-22.png',                   title: 'Completed Project',        tag: 'Finished' },
  { id: 20, src: '/images/Untitled-design-8.png',                    title: 'Insurance Claim Site',     tag: 'Insurance' },
  { id: 21, src: '/images/Screenshot-2026-03-05-at-10.48.38-AM.png', title: 'Aerial Site View',         tag: 'Commercial' },
  { id: 22, src: '/images/IMG_3716-scaled.jpg',                      title: 'On-Site Crew',             tag: 'Team' },
];

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

      {/* Masonry */}
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {PHOTOS.map((photo, i) => (
              <motion.div key={photo.id} {...fadeUp} transition={{ delay: (i % 9) * 0.06 }}
                className="relative group cursor-zoom-in break-inside-avoid border border-az-border overflow-hidden bg-az-dune hover:shadow-lg hover:shadow-az-gold/10 transition-shadow">
                <img src={photo.src} alt={photo.title}
                  className="w-full min-h-[220px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-az-blue-deep/80 via-az-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <span className="text-xs font-bold text-az-gold bg-az-blue-deep/60 px-2 py-1 uppercase tracking-widest self-start mb-2 font-mono-label">
                    {photo.tag}
                  </span>
                  <h3 className="text-white font-display text-lg">{photo.title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-white/40 text-xs font-mono-label">
                    <Camera size={10} /> Arizona Project Files
                  </div>
                </div>
              </motion.div>
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
          <div className="border border-az-border overflow-hidden">
            <img src="/images/Untitled-design-16-scaled.png" alt="Monsoon repair site detail"
              className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700" />
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
