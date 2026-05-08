import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export function About() {
  return (
    <div className="bg-nrn-cream pt-20">

      {/* Hero */}
      <section className="py-24 md:py-36 bg-white border-b border-nrn-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <motion.div {...fadeUp}>
              <span className="section-label mb-5 block">Phoenix, Arizona</span>
              <h1 className="font-display text-6xl md:text-7xl text-nrn-text mb-8 leading-tight">
                Built for<br /><em className="text-nrn-brick">Arizona</em><br />Conditions.
              </h1>
              <p className="text-nrn-muted text-lg leading-relaxed mb-10">
                With over two decades of residential and commercial experience, Craven Construction is a dedicated roofing contractor providing honest, reliable service across Southeast Phoenix, Pinal County and beyond. From new construction installs to storm damage repairs — we get the job done right the first time.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-nrn-border pt-10">
                <div>
                  <div className="font-display text-4xl text-nrn-brick mb-1">100%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-nrn-muted">Arizona Owned &amp; Operated</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-nrn-brick mb-1">Zero</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-nrn-muted">Zero Pressure — Honesty Only</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="relative">
              <img
                src="/images/Screenshot-2026-03-05-at-10.49.04-AM-1.png"
                alt="New Roof Now roof ridge and shingles"
                className="w-full h-[520px] object-cover object-top"
              />
              <div className="bg-nrn-warm border border-nrn-border p-8 hidden lg:block mt-0">
                <p className="text-sm text-nrn-muted leading-relaxed italic">
                  "We believe every home deserves reliable protection at a fair price. From new installs to storm repairs, we treat every customer like family."
                </p>
                <div className="mt-4 text-xs font-bold text-nrn-brick uppercase tracking-wider">New Roof Now — Phoenix, AZ</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-nrn-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <motion.div {...fadeUp} className="mb-16">
            <span className="section-label mb-4 block">The NRN Standard</span>
            <h2 className="font-display text-5xl text-nrn-text">Logic &amp; Integrity.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: 'Safety First', d: 'OSHA compliant on every site. No shortcuts, no risks to your property or our team.' },
              { t: 'Premier Materials', d: 'We only use Owens Corning and Atlas Pinnacle shingles — cool-roof rated for the Sonoran Desert.' },
              { t: 'Family Values', d: 'Transparent communication from the first inspection through final cleanup. Always.' },
            ].map((v, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-white border border-nrn-border p-10">
                <div className="w-10 h-10 bg-nrn-brick/10 flex items-center justify-center mb-6">
                  <CheckCircle2 size={20} className="text-nrn-brick" />
                </div>
                <h3 className="font-display text-2xl text-nrn-text mb-4">{v.t}</h3>
                <p className="text-nrn-muted text-sm leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valley Commitment */}
      <section className="py-24 bg-white border-y border-nrn-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-4 block">Valley Commitment</span>
              <h2 className="font-display text-5xl text-nrn-text mb-8 leading-tight">
                Greater Phoenix<br /><em>Advocates.</em>
              </h2>
              <p className="text-nrn-muted text-lg mb-10 leading-relaxed">
                We don't just work in Arizona — we live here. After every monsoon season we've seen neighbors battle through claims and shoddy repairs. It's why we make insurance advocacy and desert-grade quality non-negotiable.
              </p>
              <div className="grid grid-cols-2 gap-4 bg-nrn-warm border border-nrn-border p-6">
                <div>
                  <div className="text-xs font-bold text-nrn-muted uppercase mb-2">Primary Area</div>
                  <p className="text-sm font-semibold text-nrn-text">Phoenix · Scottsdale · Mesa · Chandler · Gilbert · Tempe</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-nrn-muted uppercase mb-2">Extended Area</div>
                  <p className="text-sm font-semibold text-nrn-text">Ahwatukee · Carefree · Cave Creek · Fountain Hills · Gold Canyon · Queen Creek · San Tan Valley · Paradise Valley</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                '/images/Untitled-design-3.png',
                '/images/Untitled-design-2.png',
                '/images/Untitled-design-16-scaled.png',
                '/images/IMG_3716-scaled.jpg',
              ].map((img, i) => (
                <div key={i} className={`h-52 overflow-hidden border border-nrn-border ${i % 2 !== 0 ? 'translate-y-6' : ''}`}>
                  <img src={img} alt="Local project" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credential bar */}
      <section className="py-16 bg-nrn-navy on-navy">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 text-center">
          <h3 className="font-display text-3xl text-white mb-10 italic">The New Roof Now Logic</h3>
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Every Arizona home deserves a roof that handles 115°F summers, monsoon downpours, and relentless UV. We deliver that protection at an honest price — no runaround, no hidden fees, no weak materials.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { l: 'Owens Corning &amp; Atlas', s: 'Trusted Materials' },
              { l: 'General Liability', s: 'Fully Insured' },
              { l: 'Licensed &amp; Insured', s: 'Arizona State' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-xs font-bold uppercase text-nrn-gold mb-2 font-mono-label tracking-widest" dangerouslySetInnerHTML={{ __html: stat.s }} />
                <div className="text-sm text-white font-bold" dangerouslySetInnerHTML={{ __html: stat.l }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <div className="py-20 bg-nrn-warm border-y border-nrn-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <h4 className="font-display text-4xl md:text-5xl text-nrn-text max-w-xl leading-tight">
            Meet the team — <em className="text-nrn-brick">Randy &amp; Kari</em> — and the whole Craven crew.
          </h4>
          <Link to="/contact" className="btn-brick shrink-0">Schedule Free Inspection</Link>
        </div>
      </div>
    </div>
  );
}
