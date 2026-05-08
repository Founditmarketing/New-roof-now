import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, ArrowRight, Star, CheckCircle2, ShieldCheck, ChevronDown } from 'lucide-react';
import { SERVICES } from '../constants/services';

const REVIEWS = [
  { name: 'Jami Weedman', rating: 5, text: 'Craven Construction install a new roof for us and did a great job! They were on time and finish on time as well. Clean up well and did a great job.' },
  { name: 'Steve S.', rating: 5, text: 'Randy and his crew did an outstanding job on my roof replacement. Their craftsmanship was top-notch, and they were dependable and honest every step of the way. I was referred to them by a friend, and I\'ll be recommending them to anyone who needs roofing work!' },
  { name: 'Dennis D.', rating: 5, text: 'I called randy and in 3 days he had a crew at my house. He faced a lot of damaged tiles and prevented my roof from needing to be replaced. One of the most professional and educated roofers I have met — takes a lot of pride in what he does.' },
  { name: 'Rick Smith', rating: 5, text: 'Randy, his crew and Kari at Craven Construction were fantastic! Kari did a great job helping choose the roof color, coordinating everything, and ensuring the project ran smoothly from start to finish. Both are professional and know how to treat customers.' },
  { name: 'Vincent Trizzino', rating: 5, text: 'I found a shingle after the high winds last week and called Craven to inspect my roof. I called them in the morning and they were here that afternoon.' },
  { name: 'Don Formikell', rating: 5, text: 'We were treated very well and the work was done right on time. We are glad we chose Craven Construction. The work was done, cleaned up, and finished. Great job. Will use them again.' },
  { name: 'Beth Raymond', rating: 5, text: 'Great communication. Roof looks great and Kari was awesome at helping me through the process. I would highly recommend them.' },
  { name: 'Melva Windsor', rating: 5, text: 'Craven Construction was prompt, honest & 100% customer satisfaction. Will continue to use this company as a Realtor for clients & self.' },
  { name: 'Danielle Hines', rating: 5, text: 'I reached out because I needed a single roof tile replaced, and they were able to come out on very short notice. Excellent color-matching — you can\'t tell it was ever replaced. They didn\'t pressure me and outlined flexible financing options. Exceptional customer service.' },
];

const STRIP_PHOTOS = [
  '/images/Roof.png',
  '/images/Screenshot-2026-03-05-at-10.49.59-AM.png',
  '/images/Screenshot-2026-03-05-at-10.50.11-AM.png',
  '/images/image4-1-600x450-1-e1741366242675.jpeg',
  '/images/Screenshot-2026-03-05-at-10.49.04-AM-1.png',
  '/images/Untitled-design-4.png',
  '/images/Untitled-design-16-scaled.png',
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function Home() {
  return (
    <div className="bg-nrn-cream">

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src="/images/IMG_3716-scaled.jpg"
          alt="New Roof Now crew on Arizona roof"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Warm cream overlay — left-heavy so text is legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-nrn-cream/95 via-nrn-cream/75 to-nrn-cream/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-nrn-cream/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-16 pt-28 pb-20 w-full">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="section-label mb-6 block">Apache Junction, AZ · Licensed &amp; Insured</span>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-nrn-text leading-[1.0] mb-6">
              Roofing You Can <em>Trust.</em><br />
              <span className="text-nrn-brick">Built for Arizona.</span>
            </h1>
            <p className="text-nrn-muted text-lg md:text-xl mb-10 leading-relaxed max-w-lg font-sans">
              20+ years protecting Valley homes. Tile, shingle, metal, foam &amp; flat — hand-measured and honestly priced.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:4808451833" className="btn-brick flex items-center gap-3 text-base">
                <Phone size={18} /> (480) 845-1833
              </a>
              <Link to="/contact" className="btn-outline text-base">
                Free Inspection
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-nrn-muted opacity-60">
          <span className="text-xs font-mono-label uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ─── TRUST BAR ────────────────────────────────── */}
      <div className="bg-nrn-warm border-y border-nrn-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: '5.0 ★', l: 'Google Rating', s: '19 Verified Reviews' },
            { v: '20+', l: 'Years Experience', s: 'Serving Arizona' },
            { v: 'BBB A+', l: 'Accredited Business', s: 'Verified Rating' },
            { v: '2 ROC', l: 'AZ Licensed', s: '#311721 & #315169' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-nrn-brick mb-1">{stat.v}</div>
              <div className="text-nrn-text font-bold text-sm">{stat.l}</div>
              <div className="text-nrn-muted text-xs mt-0.5">{stat.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── SERVICES ─────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-nrn-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <motion.div {...fadeUp} className="mb-16">
            <span className="section-label mb-4 block">What We Do</span>
            <h2 className="font-display text-5xl md:text-6xl text-nrn-text mb-4">
              Full-Spectrum Roofing<br /><em>for the Valley.</em>
            </h2>
            <p className="text-nrn-muted text-lg max-w-xl">
              From complete re-roofs to custom shade structures — every project hand-measured, honestly priced, Arizona-built.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="service-card group bg-white border border-nrn-border overflow-hidden"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-2xl text-nrn-text">{service.title}</h3>
                    <span className="font-mono-label text-3xl text-nrn-border font-bold">0{i + 1}</span>
                  </div>
                  <p className="text-nrn-muted mb-6 leading-relaxed">{service.shortDescription}</p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-nrn-brick font-bold text-sm hover:gap-4 transition-all"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ──────────────────────────────────── */}
      <section className="py-20 bg-nrn-warm border-y border-nrn-border overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 mb-12">
          <span className="section-label mb-3 block">What Our Clients Say</span>
          <h2 className="font-display text-4xl md:text-5xl text-nrn-text">
            5.0 Stars on Google. <em>Every time.</em>
          </h2>
        </div>
        <div className="relative">
          <div className="flex marquee-track gap-6 w-max">
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <div key={i} className="w-80 shrink-0 bg-white border border-nrn-border p-7 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star key={s} size={14} className="text-nrn-gold fill-nrn-gold" />
                  ))}
                </div>
                <p className="text-nrn-text text-sm leading-relaxed mb-5 italic">"{r.text}"</p>
                <div className="font-bold text-nrn-text text-sm">{r.name}</div>
                <div className="text-nrn-muted text-xs">Verified Google Review</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTO STRIP ──────────────────────────────── */}
      <section className="py-16 bg-nrn-cream border-b border-nrn-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 mb-8 flex items-center justify-between">
          <h3 className="font-display text-2xl text-nrn-text">From the Field</h3>
          <Link to="/gallery" className="text-sm font-bold text-nrn-brick flex items-center gap-1 hover:gap-3 transition-all">
            Full Gallery <ArrowRight size={14} />
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 lg:px-16 pb-2">
          {STRIP_PHOTOS.map((src, i) => (
            <div key={i} className="shrink-0 w-72 h-48 overflow-hidden border border-nrn-border group">
              <img src={src} alt={`Project ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHY NRN ──────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <motion.div {...fadeUp} className="relative">
              <img
                src="/images/Screenshot-2026-03-05-at-10.49.04-AM-1.png"
                alt="New Roof Now crew"
                className="w-full h-[480px] object-cover object-top"
              />
              <div className="absolute -bottom-6 -right-6 bg-nrn-brick text-white p-6 hidden lg:block">
                <div className="font-display text-4xl mb-1">20+</div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-80">Years in Arizona</div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
              <span className="section-label mb-4 block">Why New Roof Now</span>
              <h2 className="font-display text-5xl text-nrn-text mb-6 leading-tight">
                We Live Here.<br /><em>We Know Arizona.</em>
              </h2>
              <p className="text-nrn-muted text-lg mb-10 leading-relaxed">
                After monsoon season, Valley homeowners battle through claims and shoddy repairs. We make insurance advocacy and desert-grade quality non-negotiable — because no home in the Valley deserves a cheap roof.
              </p>
              <ul className="space-y-4">
                {[
                  'Hand-measured estimates — no satellite shortcuts',
                  'Owens Corning, GAF, Eagle &amp; Malarkey materials',
                  '18-month same-as-cash financing through Hearth',
                  'We meet adjusters on-site for insurance claims',
                  'Zero-debris cleanup guarantee after every job',
                  'Bilingual staff — Habla Español',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-nrn-brick shrink-0 mt-0.5" />
                    <span className="text-nrn-text font-medium text-sm" dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex gap-4">
                <Link to="/about" className="btn-brick">Our Story</Link>
                <a href="tel:4808451833" className="btn-outline flex items-center gap-2">
                  <Phone size={16} /> Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─────────────────────────────────── */}
      <section className="py-16 bg-nrn-warm border-y border-nrn-border overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-10">
            <span className="section-label block mb-2">Premium Partnerships</span>
            <p className="text-nrn-muted text-sm">We work with the best suppliers in the industry.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { name: 'Owens Corning', src: 'https://newroofaz.com/wp-content/uploads/2019/07/CravenConstruction-Partners-Owens-Corning.png' },
              { name: 'Eagle Roofing', src: 'https://newroofaz.com/wp-content/uploads/2023/10/CravenConstruction-Partners-eagle-500.png' },
              { name: 'GAF', src: 'https://newroofaz.com/wp-content/uploads/2019/07/CravenConstruction-Partners-GAF.png' },
              { name: 'Malarkey Roofing', src: 'https://newroofaz.com/wp-content/uploads/2019/07/CravenConstruction-Partners-Malarkey.png' },
              { name: 'Westlake Royal', src: 'https://newroofaz.com/wp-content/uploads/2023/05/CravenConstruction-Partners-westlake.png' },
              { name: 'NRCA', src: 'https://newroofaz.com/wp-content/uploads/2019/07/CravenConstruction-Partners-NRCA.png' },
              { name: 'RWC', src: 'https://newroofaz.com/wp-content/uploads/2019/07/CravenConstruction-Partners-RWC.png' },
            ].map((p) => (
              <div key={p.name} className="shrink-0">
                <img src={p.src} alt={p.name} className="h-10 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-nrn-navy on-navy">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-nrn-gold font-mono-label block mb-4">Our Process</span>
            <h2 className="font-display text-5xl text-white">
              Simple. Honest. <em>Done Right.</em>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: '01', t: 'Free Inspection', d: 'We walk your roof ourselves and give you a straight assessment — repair or replace, no upsells.' },
              { n: '02', t: 'Clear Estimate', d: 'Hand-measured, itemized quote with material specs. No satellite guesswork, no hidden fees.' },
              { n: '03', t: 'Expert Install', d: 'Our specialized crew works fast and clean. Most residential re-roofs completed in 1–2 days.' },
              { n: '04', t: 'Final Walkthrough', d: 'We inspect every detail together before we leave. You sign off — or we fix it. Simple.' },
            ].map((step, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="border border-white/10 p-8 hover:border-nrn-gold/40 transition-colors group">
                <div className="font-mono-label text-nrn-gold text-sm mb-6 group-hover:text-white transition-colors">{step.n}</div>
                <h3 className="font-display text-2xl text-white mb-4">{step.t}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FORM ─────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-nrn-brick relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/images/Untitled-design-7.png" alt="" aria-hidden="true" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-16">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-white/60 font-mono-label block mb-4">Free, No-Pressure Inspection</span>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4">
              Ready for a Roof<br /><em>Done Right?</em>
            </h2>
            <p className="text-white/70 text-lg">Schedule your free inspection — we'll call you back the same day.</p>
          </motion.div>

          <div className="bg-white p-8 md:p-12">
            <form className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-nrn-muted font-mono-label block">Full Name</label>
                <input type="text" placeholder="John Doe"
                  className="w-full border-b-2 border-nrn-border py-3 bg-transparent text-nrn-text placeholder:text-nrn-border focus:outline-none focus:border-nrn-brick transition-colors font-semibold text-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-nrn-muted font-mono-label block">Phone Number</label>
                <input type="tel" placeholder="(480) 845-1833"
                  className="w-full border-b-2 border-nrn-border py-3 bg-transparent text-nrn-text placeholder:text-nrn-border focus:outline-none focus:border-nrn-brick transition-colors font-mono-label text-lg" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-nrn-muted font-mono-label block">Details</label>
                <textarea rows={3} placeholder="Brief details about your property — roof age, concerns, etc."
                  className="w-full border-b-2 border-nrn-border py-3 bg-transparent text-nrn-text placeholder:text-nrn-border focus:outline-none focus:border-nrn-brick transition-colors resize-none" />
              </div>
              <div className="md:col-span-2">
                <button type="submit"
                  className="w-full bg-nrn-brick text-white py-5 font-bold text-sm uppercase tracking-widest hover:bg-nrn-brick-dark transition-colors">
                  Get My Free Inspection
                </button>
                <div className="flex items-center justify-center gap-3 mt-6 text-nrn-muted">
                  <ShieldCheck size={14} />
                  <span className="text-xs">No spam. No obligation. 100% free.</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM BAR ───────────────────────────────── */}
      <div className="bg-nrn-warm border-t border-nrn-border py-4 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-nrn-muted font-mono-label">
          <span>© 2026 New Roof Now · Craven Construction</span>
          <span>ROC #311721 · ROC #315169 · BBB A+ · Apache Junction, AZ</span>
        </div>
      </div>

    </div>
  );
}
