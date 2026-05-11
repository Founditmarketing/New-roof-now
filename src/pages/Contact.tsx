import { motion } from 'motion/react';
import { Phone, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-az-sand pt-[73px] min-h-screen">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-20 md:py-28">
          <span className="section-label mb-5 block">Get In Touch</span>
          <h1 className="font-display text-6xl md:text-8xl text-az-text mb-6 leading-none">
            Let's Talk<br /><em className="text-az-gold">Roofing.</em>
          </h1>
          <p className="text-az-rock text-xl max-w-xl leading-relaxed">
            Free inspections, honest quotes, no pressure. Arizona's most trusted roofers are one call away — rain, shine, or monsoon.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-5 gap-0 border border-az-border mb-0">

          {/* Info panel — AZ blue */}
          <div className="lg:col-span-2 bg-az-blue p-10 md:p-14 on-navy flex flex-col justify-between gap-12">
            <div className="space-y-10">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-az-gold font-mono-label mb-4">Phone</div>
                <a href="tel:4808451833" className="text-4xl font-display text-white hover:text-az-gold-light transition-colors block leading-none">
                  (480) 845-1833
                </a>
                <div className="text-white/40 text-xs mt-2">Available Mon – Sat · Habla Español</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-az-gold font-mono-label mb-4">Address</div>
                <address className="text-white/80 not-italic font-semibold">
                  710 N Ironwood Dr<br />Apache Junction, AZ 85120
                </address>
                <div className="text-white/40 text-xs mt-2">Serving Phoenix · Mesa · Chandler · Gilbert · Tempe · Scottsdale</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-az-gold font-mono-label mb-4">Email</div>
                <a href="mailto:info@newroofaz.com" className="text-white/80 hover:text-az-gold-light transition-colors font-semibold">
                  info@newroofaz.com
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-10 grid grid-cols-2 gap-6">
              <div>
                <div className="text-xs text-white/30 uppercase tracking-widest mb-1">Hours</div>
                <div className="text-white text-sm font-bold">Mon – Sat</div>
              </div>
              <div>
                <div className="text-xs text-white/30 uppercase tracking-widest mb-1">License</div>
                <div className="text-white text-xs font-bold">ROC #311721<br />ROC #315169</div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/50 text-xs leading-relaxed">
                Storm chaser from out of state calling you? We're local. We know Arizona insurance adjusters, local code, and what the monsoon season actually does to your roof.
              </p>
            </div>
          </div>

          {/* Form panel */}
          <div className="lg:col-span-3 bg-white p-10 md:p-14">
            <h2 className="font-display text-3xl text-az-text mb-2">Request a Free Inspection</h2>
            <p className="text-az-rock text-sm mb-10">No obligation. We'll call you back the same day.</p>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-az-rock font-mono-label block">Your Name</label>
                  <input type="text" placeholder="John Doe"
                    className="w-full border-b-2 border-az-border py-3 bg-transparent text-az-text placeholder:text-az-border focus:outline-none focus:border-az-gold transition-colors font-semibold text-lg" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-az-rock font-mono-label block">Phone Number</label>
                  <input type="tel" placeholder="(480) xxx-xxxx"
                    className="w-full border-b-2 border-az-border py-3 bg-transparent text-az-text placeholder:text-az-border focus:outline-none focus:border-az-gold transition-colors font-mono-label text-lg" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-az-rock font-mono-label block">Service Needed</label>
                <select className="w-full border-b-2 border-az-border py-3 bg-transparent text-az-text focus:outline-none focus:border-az-gold transition-colors font-semibold text-lg appearance-none cursor-pointer">
                  <option>Full Roof Installation</option>
                  <option>Roof Repair</option>
                  <option>Monsoon / Storm Damage</option>
                  <option>Shade Structure</option>
                  <option>Commercial Roofing</option>
                  <option>Insurance Claim Help</option>
                  <option>Free Inspection</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-az-rock font-mono-label block">Details</label>
                <textarea rows={3} placeholder="Tell us about your roof — age, concerns, monsoon damage, etc."
                  className="w-full border-b-2 border-az-border py-3 bg-transparent text-az-text placeholder:text-az-border focus:outline-none focus:border-az-gold transition-colors resize-none" />
              </div>
              <button type="submit" id="contact-submit-btn"
                className="flex items-center gap-3 bg-az-gold text-white px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-az-copper transition-colors w-full md:w-auto justify-center">
                Get My Free Inspection <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="h-96 relative overflow-hidden border border-t-0 border-az-border mb-0">
          <iframe
            src="https://maps.google.com/maps?q=710+N+Ironwood+Dr,+Apache+Junction,+AZ+85120&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen loading="lazy"
            title="Roofing Removal & Replacement of AZ — 710 N Ironwood Dr, Apache Junction AZ"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-az-sand/80 via-transparent to-transparent h-24 pointer-events-none" />
          <div className="absolute bottom-6 left-6 pointer-events-none">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2.5 h-2.5 bg-az-gold rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-az-gold font-mono-label drop-shadow">Our Location</span>
            </div>
            <h4 className="font-display text-xl text-az-text drop-shadow-sm">710 N Ironwood Dr<br /><span className="text-az-rock text-base font-normal">Apache Junction, AZ 85120</span></h4>
          </div>
        </div>

      </div>
    </div>
  );
}
