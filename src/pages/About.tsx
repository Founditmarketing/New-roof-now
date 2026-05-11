import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export function About() {
  return (
    <div className="bg-az-sand pt-[73px]">

      {/* Hero */}
      <section className="py-24 md:py-36 bg-az-blue relative overflow-hidden border-b border-white/10">
        {/* Gold ray background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{backgroundImage: 'repeating-linear-gradient(45deg, #F5B31A 0px, #F5B31A 2px, transparent 2px, transparent 40px)'}} />
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <motion.div {...fadeUp}>
              <span className="section-label mb-5 block">Phoenix, Arizona</span>
              <h1 className="font-display text-6xl md:text-7xl text-white mb-8 leading-tight">
                Built for<br /><em className="text-az-gold-light">Arizona</em><br />Conditions.
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                With over two decades of residential and commercial experience, Craven Construction is a dedicated roofing contractor providing honest, reliable service across Southeast Phoenix, Pinal County and beyond. From new construction installs to monsoon storm damage repairs — we get the job done right the first time.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-white/15 pt-10">
                <div>
                  <div className="font-display text-4xl text-az-gold mb-1">100%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40">Arizona Owned &amp; Operated</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-az-gold mb-1">Zero</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40">Zero Pressure — Honesty Only</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="relative">
              <img
                src="/images/nrn-standing-seam.jpg"
                alt="Craven Construction standing seam metal roof — Paradise Valley, AZ"
                className="w-full h-[520px] object-cover border border-white/10"
              />
              <div className="bg-az-gold-pale border border-az-gold/30 p-8 hidden lg:block mt-0">
                <p className="text-sm text-az-text leading-relaxed italic">
                  "We believe every Arizona home deserves reliable protection at a fair price. From new installs to monsoon repairs, we treat every customer like family."
                </p>
                <div className="mt-4 text-xs font-bold text-az-gold uppercase tracking-wider">New Roof Now — Phoenix, AZ</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-az-sand">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <motion.div {...fadeUp} className="mb-16">
            <span className="section-label mb-4 block">The NRN Standard</span>
            <h2 className="font-display text-5xl text-az-text">Logic &amp; Integrity.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: 'Safety First', d: 'OSHA compliant on every site. No shortcuts, no risks to your property or our team under the Arizona sun.' },
              { t: 'Premier Materials', d: 'We only use Owens Corning, GAF, and Atlas Pinnacle shingles — cool-roof rated for the 115°F Sonoran Desert.' },
              { t: 'Family Values', d: 'Transparent communication from the first inspection through final cleanup. After every monsoon, we\'re here for you.' },
            ].map((v, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-white border border-az-border p-10 hover:border-az-gold transition-colors">
                <div className="w-10 h-10 bg-az-gold/15 flex items-center justify-center mb-6 border border-az-gold/30">
                  <CheckCircle2 size={20} className="text-az-gold" />
                </div>
                <h3 className="font-display text-2xl text-az-text mb-4">{v.t}</h3>
                <p className="text-az-rock text-sm leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valley Commitment */}
      <section className="py-24 bg-white border-y border-az-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-4 block">Valley Commitment</span>
              <h2 className="font-display text-5xl text-az-text mb-8 leading-tight">
                Greater Phoenix<br /><em>Advocates.</em>
              </h2>
              <p className="text-az-rock text-lg mb-10 leading-relaxed">
                We don't just work in Arizona — we live here. After every monsoon season we've seen neighbors battle through insurance claims and shoddy repairs from out-of-state storm chasers. It's why we make local expertise, insurance advocacy, and desert-grade quality non-negotiable.
              </p>
              <div className="grid grid-cols-2 gap-4 bg-az-dune border border-az-border p-6">
                <div>
                  <div className="text-xs font-bold text-az-rock uppercase mb-2">Primary Area</div>
                  <p className="text-sm font-semibold text-az-text">Phoenix · Scottsdale · Mesa · Chandler · Gilbert · Tempe</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-az-rock uppercase mb-2">Extended Area</div>
                  <p className="text-sm font-semibold text-az-text">Ahwatukee · Carefree · Cave Creek · Fountain Hills · Gold Canyon · Queen Creek · San Tan Valley · Paradise Valley</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: '/images/nrn-tile.jpg', alt: 'Tile roof — Paradise Valley AZ' },
                { src: '/images/nrn-wood-patio.jpg', alt: 'Wood patio — Apache Junction AZ' },
                { src: '/images/nrn-stone-metal.jpg', alt: 'Stone coated metal roof' },
                { src: '/images/nrn-awning.jpg', alt: 'Aluminum awning — Mesa AZ' },
              ].map((img, i) => (
                <div key={i} className={`h-52 overflow-hidden border border-az-border ${i % 2 !== 0 ? 'translate-y-6' : ''}`}>
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credential bar */}
      <section className="py-16 bg-az-blue on-navy">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 text-center">
          <h3 className="font-display text-3xl text-white mb-10 italic">The New Roof Now Logic</h3>
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Every Arizona home deserves a roof that handles 115°F summers, 50mph monsoon gusts, haboob sandstorms, and relentless UV. We deliver that protection at an honest price — no runaround, no hidden fees, no weak materials.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { l: 'Owens Corning &amp; Atlas', s: 'Trusted Materials' },
              { l: 'General Liability', s: 'Fully Insured' },
              { l: 'Licensed &amp; Insured', s: 'Arizona State' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-xs font-bold uppercase text-az-gold mb-2 font-mono-label tracking-widest" dangerouslySetInnerHTML={{ __html: stat.s }} />
                <div className="text-sm text-white font-bold" dangerouslySetInnerHTML={{ __html: stat.l }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <div className="py-20 bg-az-dune border-y border-az-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <h4 className="font-display text-4xl md:text-5xl text-az-text max-w-xl leading-tight">
            Meet the team — <em className="text-az-gold">Randy &amp; Kari</em> — and the whole Craven crew.
          </h4>
          <Link to="/contact" className="btn-brick shrink-0">Schedule Free Inspection</Link>
        </div>
      </div>
    </div>
  );
}
