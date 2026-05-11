import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, ArrowRight, Star, ShieldCheck, CheckCircle2, Sun, Droplets, Wind } from 'lucide-react';

const REVIEWS = [
  { name: 'Rick Smith', rating: 5, text: 'Randy, his crew and Kari at Craven Construction were fantastic! Kari did a great job helping choose the roof color, coordinating everything, and ensuring the project ran smoothly from start to finish.' },
  { name: 'Danielle Hines', rating: 5, text: 'I reached out because I needed a single roof tile replaced, and they came out on very short notice. Excellent color-matching — you can\'t tell it was ever replaced. They didn\'t pressure me and outlined flexible financing options. Exceptional service.' },
  { name: 'Dennis D.', rating: 5, text: 'I called Randy and in 3 days he had a crew at my house. He faced a lot of damaged tiles and prevented my roof from needing a full replacement. One of the most professional and educated roofers I have met.' },
  { name: 'Jami Weedman', rating: 5, text: 'Craven Construction installed a new roof for us and did a great job! They were on time, finished on time, cleaned up well, and did excellent work.' },
  { name: 'Beth Raymond', rating: 5, text: 'Great communication. Roof looks great and Kari was awesome at helping me through the process. I would highly recommend them.' },
  { name: 'Melva Windsor', rating: 5, text: 'Craven Construction was prompt, honest &amp; 100% customer satisfaction. Will continue to use this company as a Realtor for clients &amp; self.' },
];

const CIRCLES = [
  { label: 'Tile Roofs', src: '/images/Craven-Construction-HomepageCircles-tile.png', to: '/services/installations' },
  { label: 'Shingle Roofs', src: '/images/Craven-Construction-HomepageCircles-shingle.png', to: '/services/installations' },
  { label: 'Metal Roofs', src: '/images/Craven-Construction-HomepageCircles-metal.png', to: '/services/installations' },
  { label: 'Flat Roofs', src: '/images/Craven-Construction-HomepageCircles-flat.png', to: '/services/installations' },
  { label: 'Wood Patios', src: '/images/Craven-Construction-HomepageCircles-wood-paio.png', to: '/services/shade-structures' },
  { label: 'Steel Structures', src: '/images/CravenConstruction-Steel.png', to: '/services/shade-structures' },
  { label: 'Commercial', src: '/images/Craven-Construction-HomepageCircles-commercial.png', to: '/services/commercial' },
  { label: 'Roof Repair', src: '/images/CravenConstruction-RoofRepair.png', to: '/services/repair' },
];

const PHOTOS = [
  '/images/IMG_3716-scaled.jpg',
  '/images/Untitled-design-3.png',
  '/images/Untitled-design-12.png',
  '/images/IMG_3700.png',
  '/images/Untitled-design-4.png',
  '/images/Screenshot-2026-03-05-at-10.49.04-AM-1.png',
];

const PARTNERS = [
  { name: 'Owens Corning', src: '/images/CravenConstruction-Partners-Owens-Corning.png' },
  { name: 'Eagle Roofing', src: '/images/CravenConstruction-Partners-eagle-500.png' },
  { name: 'GAF', src: '/images/CravenConstruction-Partners-GAF.png' },
  { name: 'Malarkey', src: '/images/CravenConstruction-Partners-Malarkey.png' },
  { name: 'Westlake Royal', src: '/images/CravenConstruction-Partners-westlake.png' },
  { name: 'NRCA', src: '/images/CravenConstruction-Partners-NRCA.png' },
  { name: 'RWC', src: '/images/CravenConstruction-Partners-RWC.png' },
];

const TICKER = '  Apache Junction, AZ  ·  BBB A+ Rated  ·  ROC #311721 & #315169  ·  20+ Years Experience  ·  Habla Español  ·  Free Estimates  ·  18 Mo. Financing  ·  Licensed & Insured  ·';

const FAQS = [
  { q: 'What roofing systems do you install?', a: 'Tile, shingle, metal, foam, and flat roofing systems, plus silicone and acrylic coating systems and walk decks. We do not install wood shake.' },
  { q: 'Do you offer free estimates?', a: 'Yes — always. We visit your property, hand-measure, and provide a clear written quote. No satellite guesswork, no pressure, no gimmicks.' },
  { q: 'What areas do you serve?', a: 'All of Southeast Phoenix, Pinal County and beyond: Ahwatukee, Carefree, Cave Creek, Chandler, Florence, Fountain Hills, Gilbert, Globe, Gold Canyon, Mesa, Paradise Valley, Phoenix, Queen Creek, San Tan Valley, Scottsdale, and Tempe.' },
  { q: 'Do you handle commercial roofing?', a: 'Yes. Commercial foam, metal, and tile roofing plus silicone and acrylic coating systems for light industrial, retail, and office properties.' },
  { q: 'What shade structures do you build?', a: 'Custom wood patios with fans, lights, electrical, insulation and shiplap ceilings. AlumaWood pergolas, aluminum awnings for homes and mobile homes, steel structures, and walk decks.' },
  { q: 'Do you offer financing?', a: 'Yes — through Hearth. Spread payments over time, with 18 months same-as-cash available. Ask during your estimate.' },
];

const fu = { initial:{opacity:0,y:20}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.55} };

export function Home() {
  return (
    <div className="bg-az-sand">

      {/* ── SPLIT HERO ── */}
      <section className="min-h-screen grid lg:grid-cols-2 pt-[73px]">
        {/* Left: copy — Arizona flag blue */}
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-20 bg-az-blue relative overflow-hidden">
          {/* Subtle gold diagonal rays in background */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{backgroundImage: 'repeating-linear-gradient(45deg, #F5B31A 0px, #F5B31A 2px, transparent 2px, transparent 40px)'}} />

          <motion.div {...fu} className="relative z-10">
            <span className="font-mono-label text-[11px] font-bold tracking-[0.2em] uppercase text-az-gold mb-6 block">
              Phoenix, Arizona · Built for Desert Conditions
            </span>
            <h1 className="font-display text-6xl md:text-7xl xl:text-8xl text-white leading-[1.0] mb-8">
              Arizona Roofing<br /><em className="text-az-gold-light">Done Right.</em><br />
              <span className="text-white/60 text-4xl md:text-5xl">Every time.</span>
            </h1>
            <p className="text-white/70 text-xl mb-10 leading-relaxed max-w-lg">
              Craven Construction builds roofs engineered for 115°F summers, Sonoran Desert UV, and monsoon season punishment. Tile, shingle, metal, foam, flat, patios, pergolas and more. Financing available.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="tel:4808451833" id="hero-call-btn" className="btn-brick flex items-center gap-3 text-base"><Phone size={18}/> (480) 845-1833</a>
              <Link to="/contact" id="hero-estimate-btn" className="border-2 border-white/40 text-white px-8 py-4 font-bold text-sm hover:bg-white hover:text-az-blue transition-all">Free Estimate</Link>
            </div>
            <div className="flex flex-wrap gap-10 border-t border-white/15 pt-10">
              {[{v:'5.0★',l:'Google Rating'},{v:'20+',l:'Yrs Experience'},{v:'BBB A+',l:'Accredited'},{v:'2 ROC',l:'AZ Licensed'}].map((s,i)=>(
                <div key={i}>
                  <div className="font-display text-2xl text-az-gold">{s.v}</div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: placeholder — replace with real project photo */}
        <div className="relative hidden lg:flex bg-az-blue-mid items-center justify-center">
          <div className="text-center opacity-20">
            <div className="font-mono-label text-white text-xs uppercase tracking-widest">Photo Coming Soon</div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="bg-az-gold overflow-hidden py-3 border-y border-az-copper/30">
        <div className="flex whitespace-nowrap marquee-track gap-0">
          {[...Array(4)].map((_, i) => <span key={i} className="text-xs font-mono-label font-bold text-az-blue-deep uppercase tracking-widest shrink-0">{TICKER}</span>)}
        </div>
      </div>

      {/* ── ARIZONA CLIMATE CALLOUTS ── */}
      <section className="py-16 bg-az-blue border-b border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {[
              { Icon: Sun, title: '115°F Summers', desc: 'Cool-roof rated shingles, high-reflectivity underlayment and continuous ridge vents engineered for extreme desert attic heat. Your insulation bill will notice.' },
              { Icon: Droplets, title: 'Monsoon Ready', desc: 'Arizona monsoon season delivers 50+ mph gusts and flash flooding. Every install uses enhanced high-wind nailing patterns and precision flashing sealed against horizontal rain.' },
              { Icon: Wind, title: 'Haboob Resistant', desc: 'Dust storms mean abrasive sandblasting for your roof surface every summer. We spec UV-stabilized, abrasion-resistant materials that outlast the Sonoran Desert\'s worst.' },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div key={i} {...fu} transition={{delay: i * 0.1}}
                className="bg-az-blue p-10 flex flex-col gap-4">
                <div className="w-12 h-12 bg-az-gold/20 border border-az-gold/30 flex items-center justify-center">
                  <Icon size={22} className="text-az-gold" />
                </div>
                <h3 className="font-display text-2xl text-white">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="py-24 bg-az-sand">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <motion.div {...fu} className="mb-16">
            <span className="section-label mb-3 block">Our Roofing &amp; Shade Structure Services</span>
            <h2 className="font-display text-5xl md:text-6xl text-az-text">What We Do</h2>
          </motion.div>
          <div className="divide-y divide-az-border border-y border-az-border">
            {[
              { n:'01', t:'Residential Roofing', d:'Tile · Shingle · Metal · Foam · Flat · New Construction', to:'/services/installations' },
              { n:'02', t:'Roof Repair & Maintenance', d:'Leak repair · Tile reset · Flashing · Silicone & elastomeric coatings', to:'/services/repair' },
              { n:'03', t:'Shade Structures', d:'Custom wood patios · Alumawood pergolas · Aluminum awnings · Steel structures', to:'/services/shade-structures' },
              { n:'04', t:'Commercial Roofing', d:'Foam · Metal · Tile · Silicone coatings · Acrylic coatings · TPO', to:'/services/commercial' },
            ].map((s,i)=>(
              <motion.div key={i} {...fu} transition={{delay:i*0.08}}>
                <Link to={s.to} className="group flex items-center gap-8 py-8 hover:bg-az-dune transition-colors px-2 -mx-2">
                  <span className="font-mono-label text-az-rock text-sm w-8 shrink-0">{s.n}</span>
                  <div className="flex-1">
                    <div className="font-display text-2xl md:text-3xl text-az-text group-hover:text-az-gold transition-colors">{s.t}</div>
                    <div className="text-az-rock text-sm mt-1">{s.d}</div>
                  </div>
                  <ArrowRight size={20} className="text-az-rock group-hover:text-az-gold group-hover:translate-x-2 transition-all shrink-0"/>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-az-gold font-bold text-sm hover:gap-4 transition-all">View All Services <ArrowRight size={14}/></Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE CIRCLES ── */}
      <section className="py-16 bg-az-dune border-y border-az-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <span className="section-label mb-10 block text-center">All Service Types</span>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {CIRCLES.map((c,i)=>(
              <Link key={i} to={c.to} className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-az-border group-hover:border-az-gold transition-colors">
                  <img src={c.src} alt={c.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <span className="text-xs font-bold text-az-rock text-center leading-tight group-hover:text-az-gold transition-colors uppercase tracking-wide">{c.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-24 bg-white border-b border-az-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <motion.div {...fu} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="section-label mb-3 block">Google Reviews</span>
              <h2 className="font-display text-5xl text-az-text">5.0 Stars. <em className="text-az-gold">Every time.</em></h2>
            </div>
            <a href="https://www.google.com/maps/search/Craven+Construction+Apache+Junction+AZ" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-az-gold flex items-center gap-1 hover:gap-3 transition-all shrink-0">
              See All Reviews <ArrowRight size={14}/>
            </a>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r,i)=>(
              <motion.div key={i} {...fu} transition={{delay:i*0.07}} className="bg-az-sand border border-az-border p-8">
                <div className="flex gap-0.5 mb-4">{Array.from({length:5}).map((_,s)=><Star key={s} size={14} className="text-az-gold fill-az-gold"/>)}</div>
                <p className="text-az-text text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="font-bold text-az-text text-sm">{r.name}</div>
                <div className="text-az-rock text-xs mt-0.5">Verified Google Review</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO COLLAGE — photos coming soon ── */}
      <section className="border-b border-az-border">
        <div className="grid grid-cols-3 md:grid-cols-6 h-48 md:h-64 bg-az-blue-mid">
          {[...Array(6)].map((_,i) => (
            <div key={i} className="border-r border-white/5 last:border-0 flex items-center justify-center">
              <span className="font-mono-label text-white/10 text-xs uppercase tracking-widest">Photo</span>
            </div>
          ))}
        </div>
        <div className="bg-az-dune py-6 px-6 lg:px-16 flex items-center justify-between border-t border-az-border">
          <span className="text-az-rock text-sm">Every job we finish goes in the portfolio.</span>
          <Link to="/gallery" className="text-sm font-bold text-az-gold flex items-center gap-1 hover:gap-3 transition-all">Full Gallery <ArrowRight size={14}/></Link>
        </div>
      </section>

      {/* ── ABOUT / MISSION ── */}
      <section className="py-24 md:py-36 bg-az-sand">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          <motion.div {...fu}>
            <span className="section-label mb-6 block">Who We Are</span>
            <blockquote className="font-display text-4xl md:text-5xl text-az-text leading-tight mb-8">
              "We handle all aspects of residential and commercial roofing. From new construction to monsoon damage repairs — you can count on our experts to get it done <em className="text-az-gold">right the first time.</em>"
            </blockquote>
            <div className="text-xs font-bold text-az-gold uppercase tracking-widest mb-10">Randy Craven — Owner, Craven Construction</div>
            <ul className="space-y-3">
              {['Hand-measured estimates — no satellite shortcuts', 'Owens Corning, GAF, Eagle, Malarkey & Westlake materials', '18-month same-as-cash financing through Hearth', 'We meet insurance adjusters on-site for storm claims', 'Zero-debris cleanup guarantee on every job', 'Bilingual staff — Habla Español'].map((item,i)=>(
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-az-gold shrink-0 mt-0.5"/>
                  <span className="text-az-rock text-sm" dangerouslySetInnerHTML={{__html:item}}/>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fu} transition={{delay:0.15}} className="relative">
            {/* Placeholder — replace with real crew/job photo */}
            <div className="w-full h-[500px] bg-az-blue-mid flex items-center justify-center border border-white/10">
              <span className="font-mono-label text-white/15 text-xs uppercase tracking-widest">Photo Coming Soon</span>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-az-blue p-8 hidden lg:block border-t-4 border-az-gold">
              <div className="font-display text-4xl text-white mb-1">20+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-az-gold">Years in Arizona</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-az-blue">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <motion.div {...fu} className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-az-gold font-mono-label block mb-4">Our Process</span>
            <h2 className="font-display text-5xl text-white">Simple. Honest. <em>Done Right.</em></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {n:'01',t:'Free Inspection',d:'Randy or a senior crew member walks your roof personally. Straight assessment — repair or replace, no upsells.'},
              {n:'02',t:'Written Estimate',d:'Hand-measured, itemized quote with material specs and pricing. Clear, written, no satellite guesswork.'},
              {n:'03',t:'Expert Install',d:'Specialized crew works fast and clean. Most residential re-roofs completed in 1–2 days.'},
              {n:'04',t:'Final Walkthrough',d:'We inspect every detail together before we leave. You sign off — or we fix it. Simple.'},
            ].map((step,i)=>(
              <motion.div key={i} {...fu} transition={{delay:i*0.1}} className="border border-white/10 p-8 hover:border-az-gold/40 transition-colors group">
                <div className="font-mono-label text-az-gold text-sm mb-5">{step.n}</div>
                <h3 className="font-display text-2xl text-white mb-3">{step.t}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-14 bg-az-dune border-y border-az-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <span className="section-label block mb-8 text-center">Proud to work with the best suppliers in the industry.</span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {PARTNERS.map(p=>(
              <img key={p.name} src={p.src} alt={p.name} className="h-16 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"/>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-b border-az-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <motion.div {...fu} className="mb-16">
            <span className="section-label mb-3 block">Common Questions</span>
            <h2 className="font-display text-5xl text-az-text">Answers You Can <em className="text-az-gold">Count On.</em></h2>
          </motion.div>
          <div className="divide-y divide-az-border border-t border-az-border">
            {FAQS.map((faq,i)=>(
              <motion.div key={i} {...fu} transition={{delay:i*0.06}} className="py-8 grid md:grid-cols-2 gap-6">
                <h3 className="font-display text-xl text-az-text">{faq.q}</h3>
                <p className="text-az-rock text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-az-blue relative overflow-hidden">
        {/* Gold ray decorative lines */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{backgroundImage: 'repeating-linear-gradient(60deg, #F5B31A 0px, #F5B31A 2px, transparent 2px, transparent 60px)'}} />
        <div className="max-w-4xl mx-auto px-6 lg:px-16 relative z-10">
          <motion.div {...fu} className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-az-gold font-mono-label block mb-4">Free · No Obligation · Same-Day Callback</span>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4">Ready for a Roof <em>Done Right?</em></h2>
            <p className="text-white/70 text-lg">Call us or fill out the form — Randy's crew will call you back the same day.</p>
          </motion.div>
          <div className="bg-white p-8 md:p-12">
            <form className="grid md:grid-cols-2 gap-8">
              {[{l:'Full Name',t:'text',p:'John Doe'},{l:'Phone Number',t:'tel',p:'(480) 845-1833'}].map(f=>(
                <div key={f.l} className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-az-rock font-mono-label block">{f.l}</label>
                  <input type={f.t} placeholder={f.p} className="w-full border-b-2 border-az-border py-3 bg-transparent text-az-text placeholder:text-az-border focus:outline-none focus:border-az-gold transition-colors font-semibold text-lg"/>
                </div>
              ))}
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-az-rock font-mono-label block">Details</label>
                <textarea rows={3} placeholder="Tell us about your roof or project — age, concerns, storm damage, etc." className="w-full border-b-2 border-az-border py-3 bg-transparent text-az-text placeholder:text-az-border focus:outline-none focus:border-az-gold transition-colors resize-none"/>
              </div>
              <div className="md:col-span-2">
                <button type="submit" id="cta-submit-btn" className="w-full bg-az-gold text-white py-5 font-bold text-sm uppercase tracking-widest hover:bg-az-copper transition-colors">Get My Free Estimate</button>
                <div className="flex items-center justify-center gap-3 mt-5 text-az-rock">
                  <ShieldCheck size={14}/><span className="text-xs">No spam. No obligation. We'll call you back today.</span>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-8 text-center text-white/50 text-xs font-mono-label">
            Or call directly: <a href="tel:4808451833" className="text-white font-bold hover:text-az-gold-light transition-colors">(480) 845-1833</a> · <a href="mailto:info@newroofaz.com" className="text-white font-bold hover:text-az-gold-light transition-colors">info@newroofaz.com</a> · Mon–Sat
          </div>
        </div>
      </section>

      {/* ── BOTTOM BAR ── */}
      <div className="bg-az-dune border-t border-az-border py-4 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-az-rock font-mono-label">
          <span>© 2026 Craven Construction — New Roof Now. All rights reserved.</span>
          <span>ROC #311721 · ROC #315169 · BBB A+ · Apache Junction, AZ 85120</span>
        </div>
      </div>

    </div>
  );
}
