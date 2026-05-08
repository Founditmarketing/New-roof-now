import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Star, 
  ShieldCheck, 
  Award, 
  Clock,
  ChevronRight,
  Hammer,
  Wrench,
  Shield,
  ClipboardCheck
} from 'lucide-react';
import { SERVICES } from '../constants/services';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function Home() {
  return (
    <div className="overflow-hidden bg-roof-charcoal">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col pt-16">
        <div className="flex-1 grid grid-cols-12 relative">
          {/* Hero Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-r from-roof-charcoal via-roof-charcoal/80 to-transparent z-10" />
            <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-roof-charcoal/10 to-transparent z-10" />
            <img
              src="/images/IMG_3704.png"
              alt="New Roof Now crew at work"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Content Left */}
          <div className="col-span-12 lg:col-span-8 z-10 px-5 sm:px-10 lg:px-20 flex flex-col justify-center py-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 bg-roof-red text-[10px] font-black uppercase tracking-[0.3em] mb-8 w-fit text-black">
                20+ Years — The Re-Roofing Experts
              </div>
              <h1 className="text-[38px] sm:text-[60px] lg:text-[110px] text-white leading-[0.9] mb-8">
                Your Roof. <br/><span className="text-fire">Done Right.</span>
              </h1>
              <p className="text-lg md:text-xl text-stone-400 max-w-xl font-medium leading-relaxed mb-10">
                Tile, shingle, metal, foam, and flat — plus custom patios, pergolas, and awnings. Hand-measured estimates, honest pricing, and 20+ years of Arizona expertise. Habla Español.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-roof-orange hover:text-white transition-colors shadow-2xl w-full sm:w-auto text-center"
                >
                  Request a Free Estimate
                </Link>
                <a
                  href="tel:4808451833"
                  className="px-10 py-5 border border-white/20 text-white font-black uppercase text-xs tracking-widest hover:bg-roof-red hover:border-roof-red transition-colors w-full sm:w-auto text-center"
                >
                  Call (480) 845-1833
                </a>
              </div>
            </motion.div>
          </div>

          {/* Visual Right (Industrial Sidebar) */}
          <div className="hidden lg:col-span-4 lg:flex flex-col justify-end p-12 border-l border-white/5 bg-roof-surface/30 relative overflow-hidden">
             <div className="shingle-texture absolute inset-0 opacity-5" />
             <div className="space-y-6 relative z-10">
                <div className="h-[1px] w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />
                <div className="flex justify-between items-center">
                  <span className="text-label text-stone-300">Experience</span>
                  <span className="text-xs font-mono text-white">20+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-label text-stone-300">Estimates</span>
                  <span className="text-xs font-mono text-white">Hand-Measured</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-label text-stone-300">Financing</span>
                  <span className="text-xs font-mono text-white">18 Mo Same-As-Cash</span>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Teaser Row (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-roof-charcoal border-t border-white/10">
          {[
            { n: '01', l: 'Installations', t: 'Re-Roofing', d: 'Full tear-off and re-roofing in tile, shingle, metal, foam, and flat — hand-measured for your exact home.', p: '/services/installations', b: 'View Service' },
            { n: '02', l: 'Repair', t: 'Roof Repair', d: 'Fast, honest fixes for monsoon damage, thermal cracking, and missing shingles — no unnecessary upsells.', p: '/services/repair', b: 'View Service' },
            { n: '03', l: 'Shade Structures', t: 'Patios & Pergolas', d: 'Custom wood patios, aluminum pergolas, awnings, and steel structures — extending your Arizona outdoor living space.', p: '/services/shingles', b: 'View Service' },
            { n: '04', l: 'Commercial', t: 'Commercial Roofing', d: 'Silicone coatings, TPO, modified bitumen, and full maintenance programs for Valley businesses.', p: '/services/insurance', b: 'View Service' },
          ].map((teaser, i) => (
            <Link 
              key={teaser.n} 
              to={teaser.p}
              className={`p-6 md:p-10 border-r border-white/10 border-b lg:border-b-0 flex flex-col group transition-all duration-500 ${teaser.special ? 'bg-roof-red/10 border-b-4 border-b-roof-red' : 'hover:bg-roof-surface'}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-label ${teaser.special ? 'text-roof-red' : 'text-roof-red'}`}>{teaser.n} — {teaser.l}</span>
                {teaser.special && <span className="bg-roof-red text-white text-[8px] font-black px-1.5 py-0.5 animate-pulse">URGENT</span>}
              </div>
              <h3 className="text-2xl text-white mb-4">{teaser.t}</h3>
              <p className="text-xs text-stone-500 leading-relaxed mb-8 group-hover:text-stone-300 transition-colors">{teaser.d}</p>
              <div className={`mt-auto text-label transition-opacity flex items-center gap-2 ${teaser.special ? 'opacity-100 text-white' : 'opacity-0 group-hover:opacity-100 text-white'}`}>
                {teaser.b} <ArrowRight size={14} className={teaser.special ? 'text-roof-red' : ''} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Mini Status Bar */}
      <div className="h-12 bg-black border-t border-white/5 flex items-center justify-between px-6 sm:px-10">
        <div className="flex gap-8 text-[9px] font-black text-stone-600 uppercase tracking-[0.2em]">
          <span>© 2026 NEW ROOF NOW</span>
          <span className="hidden sm:inline">LICENSED & INSURED</span>
          <span className="hidden sm:inline">ARIZONA OWNED</span>
        </div>
        <div className="flex gap-4">
          <div className="w-2.5 h-2.5 bg-roof-red rounded-full ember-pulse" />
          <div className="w-2.5 h-2.5 bg-stone-800 rounded-full" />
          <div className="w-2.5 h-2.5 bg-stone-800 rounded-full" />
        </div>
      </div>

      {/* Testimonials Marquee */}
      <section className="py-36 bg-stone-950 overflow-hidden relative">
        <img src="/images/IMG_3700.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-stone-950/80 to-stone-950/95 pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 mb-20">
          <div className="text-label text-roof-red mb-4 uppercase tracking-[0.2em]">Voice of the Valley</div>
          <h2 className="text-4xl text-white font-black italic uppercase tracking-tighter">Verified Field Reports</h2>
        </div>
        {/* Marquee track — two identical sets for seamless loop */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 w-max marquee-track">
            {[
                            // Real Google Reviews — 5.0 ★ (19 reviews)
              { n: 'Greg E.',     l: 'Scottsdale, AZ', t: 'Roof Repair',       c: 'First class operation. Within two hours of my call they were at my house, assessed the damage, and gave me a fair quote. Repair done the same week. Monsoon season is no joke and these guys are ready for it.' },
              { n: 'Richard C.',  l: 'Phoenix, AZ',    t: 'Full Replacement',  c: 'Great company, super professional. Showed up on time, tore the old roof off and put a new one on in a day. Two Arizona summers later — zero issues. Highly recommend.' },
              { n: 'Doug T.',     l: 'Mesa, AZ',       t: 'Insurance Claim',   c: 'Needed a new roof after a haboob tore up my shingles. They handled the whole insurance claim process. Done in 2 days. Roof looks incredible and has held up through everything since.' },
              { n: 'Brent W.',    l: 'Chandler, AZ',   t: 'Full Replacement',  c: 'Extremely professional. They chose materials specifically rated for AZ heat — the difference is night and day. Crew was clean and efficient. I would not use anyone else.' },
              { n: 'Lakeitha B.', l: 'Tempe, AZ',      t: 'Roof Installation', c: 'The price is just the START of what they get right. Prompt communication, on-schedule, delivered exactly what was promised. Every question answered. Fantastic experience.' },
              { n: 'Brandon M.',  l: 'Gilbert, AZ',    t: 'New Roof',          c: 'Outstanding job on my new roof. Professional through every step, no hidden costs. You can tell they know Arizona conditions inside and out. Highly recommended.' },
              // Duplicate set for seamless loop
              { n: 'Greg E.',     l: 'Scottsdale, AZ', t: 'Roof Repair',       c: 'First class operation. Within two hours of my call they were at my house, assessed the damage, and gave me a fair quote. Repair done the same week. Monsoon season is no joke and these guys are ready for it.' },
              { n: 'Richard C.',  l: 'Phoenix, AZ',    t: 'Full Replacement',  c: 'Great company, super professional. Showed up on time, tore the old roof off and put a new one on in a day. Two Arizona summers later — zero issues. Highly recommend.' },
              { n: 'Doug T.',     l: 'Mesa, AZ',       t: 'Insurance Claim',   c: 'Needed a new roof after a haboob tore up my shingles. They handled the whole insurance claim process. Done in 2 days. Roof looks incredible and has held up through everything since.' },
              { n: 'Brent W.',    l: 'Chandler, AZ',   t: 'Full Replacement',  c: 'Extremely professional. They chose materials specifically rated for AZ heat — the difference is night and day. Crew was clean and efficient. I would not use anyone else.' },
              { n: 'Lakeitha B.', l: 'Tempe, AZ',      t: 'Roof Installation', c: 'The price is just the START of what they get right. Prompt communication, on-schedule, delivered exactly what was promised. Every question answered. Fantastic experience.' },
              { n: 'Brandon M.',  l: 'Gilbert, AZ',    t: 'New Roof',          c: 'Outstanding job on my new roof. Professional through every step, no hidden costs. You can tell they know Arizona conditions inside and out. Highly recommended.' },
              { n: 'James R.',    l: 'Peoria, AZ',     t: 'Monsoon Damage',    c: 'Professional from start to finish. They handled the insurance company and got us a premium cool-roof for just our deductible. Couldn\'t be happier.' },
              { n: 'David L.',    l: 'Glendale, AZ',   t: 'Commercial Flat Roof', c: 'They understand flat roofs in AZ heat better than anyone. Industrial expertise you rarely find. Highly recommended for any business owner.' },
              { n: 'Chris P.',    l: 'Surprise, AZ',   t: 'Insurance Claim',   c: 'New Roof Now fought the insurance adjuster and got us a full replacement instead of a patch. Saved us thousands. Real advocates.' },
              { n: 'Angela B.',   l: 'Queen Creek, AZ', t: 'Full Replacement', c: 'Zero pressure, zero hidden fees. Told me exactly what was needed and did it for the exact price quoted. Very rare in this industry.' },
            ].map((review, i) => (
              <div key={i} className="min-w-[300px] sm:min-w-[440px] bg-roof-surface p-8 sm:p-12 border border-white/5 shrink-0">
                <div className="flex gap-1 mb-6 text-roof-amber">
                   {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-stone-300 italic mb-8 leading-relaxed">"{review.c}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-roof-red rounded-full flex items-center justify-center font-black text-xs text-white">
                    {review.n[0]}
                  </div>
                  <div>
                     <div className="text-sm font-black text-white uppercase">{review.n}</div>
                     <div className="text-[10px] text-stone-400 font-mono uppercase tracking-widest">{review.l} • {review.t}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed Photo Strip */}
      <div className="w-full overflow-hidden flex gap-1 border-y border-white/5">
        {[
          "/images/IMG_3704.png",
          "/images/Untitled-design-9.png",
          "/images/Untitled-design-16-scaled.png",
          "/images/Untitled-design-11.png",
          "/images/IMG_3716-scaled.jpg",
          "/images/Untitled-design-14.png",
          "/images/Screenshot-2026-03-05-at-10.48.38-AM.png",
          "/images/Untitled-design-22.png",
        ].map((src, i) => (
          <div key={i} className="flex-1 h-48 sm:h-64 overflow-hidden group shrink-0 min-w-[80px] sm:min-w-[120px]">
            <img src={src} alt={`Project ${i+1}`} className="w-full h-full object-cover scale-105 hover:scale-110 transition-all duration-700" />
          </div>
        ))}
      </div>

      <section className="py-20 md:py-40 bg-white relative overflow-hidden text-stone-900">
        <div className="shingle-texture absolute inset-0 pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 md:mb-24">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl mb-4 text-stone-900">Desert-Grade <span className="text-roof-red font-black italic">Precision.</span></h2>
              <p className="text-stone-500 text-lg">Every project treated with the same intensity — whether it's a quick repair or a full install engineered for Arizona's extreme conditions.</p>
            </div>
            <Link to="/services" className="px-6 py-3 border-2 border-roof-charcoal text-roof-charcoal font-black uppercase text-xs tracking-[0.2em] hover:bg-roof-charcoal hover:text-white transition-all">
              View All Services
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {SERVICES.map((s, idx) => (
              <motion.div 
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border border-stone-200 p-10 hover:border-roof-red transition-all cursor-pointer bg-white text-stone-900 ember-glow"
              >
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded text-roof-charcoal mb-6 group-hover:bg-roof-red group-hover:text-white transition-all">
                  {s.id === 'installations' && <Hammer size={24} />}
                  {s.id === 'repair' && <Wrench size={24} />}
                  {s.id === 'shingles' && <Shield size={24} />}
                  {s.id === 'insurance' && <ClipboardCheck size={24} />}
                </div>
                <h4 className="text-xl mb-3 text-stone-900">{s.title}</h4>
                <p className="text-stone-500 text-sm mb-6 leading-relaxed">{s.shortDescription}</p>
                <Link to={`/services/${s.id}`} className="text-xs font-black uppercase tracking-widest text-stone-400 group-hover:text-roof-red flex items-center gap-2">
                  View Detail <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Specialist */}
      <section className="py-20 md:py-44 bg-roof-charcoal">
         <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-28 items-center">
               <div className="relative group">
                  <div className="absolute -inset-4 border-2 border-roof-red/20 group-hover:-inset-6 transition-all duration-700" />
                  <img 
                    src="/images/Untitled-design-7.png"
                    alt="New Roof Now crew on site"
                    className="relative z-10 w-full object-cover object-center transition-all duration-700 shadow-2xl"
                  />
                  <div className="absolute bottom-10 right-10 z-20 bg-roof-red p-6 text-white max-w-xs shadow-2xl skew-x-[-12deg]">
                     <div className="skew-x-[12deg]">
                        <p className="text-xs font-black uppercase tracking-widest mb-4">On-Site Direct</p>
                        <h3 className="text-2xl font-black italic">Every job is seen by the owner. No exceptions.</h3>
                     </div>
                  </div>
               </div>
               <div>
                  <div className="text-label text-stone-500 mb-6 uppercase tracking-widest font-black">Direct Communication Channel</div>
                  <h2 className="text-4xl md:text-6xl text-white mb-8 leading-tight">
                    Arizona's <br/><span className="text-roof-red italic">No-Middleman</span> <br/>Roofing Source.
                  </h2>
                  <p className="text-stone-400 text-lg mb-12 leading-relaxed">
                    Tired of talking to salespeople who have never held a hammer? At New Roof Now, you speak directly with the expertise. We don't push extras you don't need — we build roofs that outlast Arizona's toughest conditions.
                  </p>
                  <div className="grid grid-cols-2 gap-10">
                     <div>
                        <h4 className="text-white font-black uppercase text-sm mb-3 italic">Heat-Rated Materials</h4>
                        <p className="text-stone-400 text-sm font-medium leading-relaxed">Cool-roof certified Owens Corning and Atlas products rated for 115°F+ surface temps and UV degradation.</p>
                     </div>
                     <div>
                        <h4 className="text-white font-black uppercase text-sm mb-3 italic">Response Protocol</h4>
                        <p className="text-stone-400 text-sm font-medium leading-relaxed">Direct line access for all active clients. No automated switchboards — ever.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Trust Materials Section */}
      <section className="py-36 bg-stone-900 border-y border-white/5 relative overflow-hidden">
        <img src="/images/IMG_3716-scaled.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover grayscale opacity-8 pointer-events-none scale-110" />
        <div className="absolute inset-0 bg-stone-900/30 pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 text-center text-white">
          <p className="text-roof-red font-black uppercase tracking-[0.3em] text-sm mb-8">Premium Partnerships</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 transition-all">
            <h2 className="text-4xl font-black italic text-white">OWENS CORNING</h2>
            <h2 className="text-4xl font-black tracking-tighter text-white">ATLAS ROOFING</h2>
            <h2 className="text-4xl font-black text-white">PINNACLE</h2>
          </div>
        </div>
      </section>

      {/* Detailed Technical FAQ Section */}
      <section className="py-20 md:py-20 md:py-44 bg-white text-stone-900">
         <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="mb-28 text-center">
               <div className="text-label text-roof-red mb-4 uppercase tracking-[0.3em]">Knowledge Base</div>
               <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-stone-900">Field Intelligence</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 lg:gap-32">
               {[
                 { q: 'How long does a full shingle replacement take?', a: 'Most Arizona residential jobs are completed within 24-48 hours from tear-off to cleanup. We schedule around peak summer heat and move efficiently without cutting corners.' },
                 { q: 'Will my insurance cover monsoon or hail damage?', a: 'If there is verifiable storm damage — wind, hail, or haboob debris — most AZ policies cover replacement cost. We document everything and meet adjusters on-site to maximize your claim.' },
                 { q: 'What makes your shingles "Desert Ready"?', a: 'We use cool-roof rated, high-reflectivity shingles with UV-resistant granules and reinforced nail zones. Our Owens Corning and Atlas lines are rated for Arizona\'s high-wind monsoon season and 115°F+ heat.' },
                 { q: 'Do you offer financing for non-claim jobs?', a: 'We work with every homeowner to find the most affordable path. Contact us directly — we\'ll find the right solution for your situation and budget.' },
               ].map((faq, i) => (
                 <div key={i} className="border-b border-stone-200 pb-12">
                   <h3 className="text-2xl font-black text-roof-charcoal mb-6 uppercase tracking-tight italic flex gap-4">
                     <span className="text-roof-red not-italic">?</span> {faq.q}
                   </h3>
                   <p className="text-stone-500 font-medium leading-relaxed">{faq.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Why Choose Us & Process */}
      <section className="py-20 md:py-20 md:py-44 bg-white text-stone-900">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16">
           <div className="grid lg:grid-cols-2 gap-12 lg:gap-28 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl mb-8 font-black uppercase tracking-tighter italic text-stone-900">Why the Valley Trusts <span className="text-roof-red">the Best.</span></h2>
                <div className="grid gap-8">
                   <div className="flex gap-6">
                      <div className="w-14 h-14 shrink-0 bg-stone-100 flex items-center justify-center rounded-lg text-roof-red">
                        <ShieldCheck size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 uppercase tracking-tight text-stone-900">Uncompromising Safety</h4>
                        <p className="text-stone-500 text-sm leading-relaxed">Strict safety protocols on every job — heat-aware scheduling, proper PPE in desert conditions, and zero shortcuts from tearoff to final nail.</p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="w-14 h-14 shrink-0 bg-stone-100 flex items-center justify-center rounded-lg text-roof-red">
                        <Award size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 uppercase tracking-tight text-stone-900">Licensed & Insured in AZ</h4>
                        <p className="text-stone-500 text-sm leading-relaxed">Fully licensed and insured in Arizona, giving you the confidence that every shingle is backed by verified expertise.</p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="w-14 h-14 shrink-0 bg-stone-100 flex items-center justify-center rounded-lg text-roof-red">
                        <Clock size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 uppercase tracking-tight text-stone-900">Transparent Timelines</h4>
                        <p className="text-stone-500 text-sm leading-relaxed">No guessing games. You'll know exactly when we start, how long it takes, and when we'll be out of your hair — even around monsoon season.</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-roof-steel rounded-2xl transform rotate-3" />
                <div className="relative bg-roof-charcoal rounded-2xl p-10 md:p-16 shadow-2xl">
                   <h3 className="text-white text-3xl mb-12 italic uppercase tracking-tighter font-black">Our 4-Step Process</h3>
                   <div className="grid gap-12">
                      {[
                        {n: '01', t: 'Precision Assessment', d: 'Drones and on-roof inspections identify every detail.'},
                        {n: '02', t: 'Honest Proposal', d: 'A clear, itemized quote with no hidden fees or pushy sales.'},
                        {n: '03', t: 'Masterful Build', d: 'Fast, clean, and expertly installed by our specialized crew.'},
                        {n: '04', t: 'Final Inspection', d: 'We dont leave until we—and you—are 100% satisfied.'},
                      ].map((step, idx) => (
                        <div key={idx} className="flex gap-6 relative">
                           {idx < 3 && <div className="absolute top-10 left-6 bottom-[-24px] w-px bg-white/10" />}
                           <div className="w-12 h-12 rounded-full border-2 border-roof-red flex items-center justify-center text-white font-black text-xs shrink-0 bg-roof-red/10 z-10">
                             {step.n}
                           </div>
                           <div>
                              <h4 className="text-white text-lg mb-1 font-bold uppercase tracking-tight">{step.t}</h4>
                              <p className="text-stone-400 text-sm leading-relaxed">{step.d}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Main CTA Form Section */}
      <section className="py-20 md:py-44 bg-stone-800 relative">
        <img src="/images/Untitled-design-7.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-stone-800/50 via-stone-800/70 to-stone-800/85 pointer-events-none" />
         <div className="max-w-5xl mx-auto px-6 sm:px-12 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl mb-8 text-white font-black uppercase italic tracking-tighter leading-tight overflow-visible">Ready for a <span className="text-fire inline-block pr-4">Solid</span> Roof?</h2>
            <p className="text-stone-300 text-base mb-12 uppercase tracking-widest font-black">Schedule your free, zero-pressure inspection today.</p>
            <div className="bg-roof-surface p-6 md:p-16 rounded shadow-2xl border border-white/10">
               <form className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-stone-300">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-0 py-3 bg-transparent border-b border-white/30 text-white placeholder:text-stone-600 focus:outline-none focus:border-roof-red transition-all font-bold text-lg" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-stone-300">Phone</label>
                    <input type="tel" placeholder="(480) 845-1833" className="w-full px-0 py-3 bg-transparent border-b border-white/30 text-white placeholder:text-stone-600 focus:outline-none focus:border-roof-red transition-all font-mono text-lg" />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-stone-300">Details</label>
                    <textarea rows={3} placeholder="Brief details about your property..." className="w-full px-0 py-3 bg-transparent border-b border-white/30 text-white placeholder:text-stone-600 focus:outline-none focus:border-roof-red transition-all font-medium" />
                  </div>
                  <div className="md:col-span-2 mt-8">
                    <button className="w-full bg-roof-red text-white py-6 font-black uppercase text-xs tracking-[0.4em] hover:bg-roof-charcoal hover:text-white transition-all shadow-2xl ember-glow border-2 border-transparent hover:border-roof-red">
                      Get My Free Inspection
                    </button>
                    <div className="flex items-center justify-center gap-4 mt-8 opacity-50">
                       <ShieldCheck size={16} className="text-stone-400" />
                       <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">No spam. No obligation. 100% free.</span>
                    </div>
                  </div>
               </form>
            </div>
         </div>
      </section>
    </div>
  );
}
