import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants/services';

export function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);
  if (!service) return <Navigate to="/services" />;
  const related = SERVICES.filter(s => s.id !== id);

  return (
    <div className="bg-az-sand pt-[73px] min-h-screen">

      {/* Hero */}
      <section className="relative h-[55vh] overflow-hidden">
        <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-az-blue-deep/90 via-az-blue/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-14">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
            <Link to="/services"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 text-xs font-bold uppercase tracking-widest px-4 py-2 mb-6 hover:bg-az-gold hover:border-az-gold transition-all">
              <ChevronLeft size={14} /> Back to Services
            </Link>
            <h1 className="font-display text-5xl md:text-7xl text-white mb-3">{service.title}</h1>
            <p className="text-white/70 text-xl max-w-2xl">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-32 bg-white border-b border-az-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
            <div>
              <h2 className="font-display text-4xl text-az-text mb-8">Service Overview</h2>
              <p className="text-az-rock text-lg leading-relaxed">{service.fullDescription}</p>
            </div>
            <div>
              <h2 className="font-display text-4xl text-az-text mb-8">Why It Matters</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-az-sand border border-az-border hover:border-az-gold transition-colors">
                    <div className="w-6 h-6 bg-az-gold/20 flex items-center justify-center text-az-gold shrink-0 font-bold text-xs rounded-full mt-0.5 border border-az-gold/30">!</div>
                    <span className="text-az-text font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process — AZ blue */}
          <div className="bg-az-blue p-12 md:p-20 on-navy">
            <h2 className="font-display text-4xl text-white mb-14">Our Proven Process</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((p, idx) => (
                <div key={idx} className="group">
                  <div className="w-11 h-11 border border-az-gold/40 flex items-center justify-center font-mono-label text-az-gold text-sm mb-5 group-hover:bg-az-gold group-hover:text-white group-hover:border-az-gold transition-all">
                    0{idx + 1}
                  </div>
                  <h4 className="font-display text-xl text-white mb-3">{p.step}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-az-dune border-b border-az-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label mb-4 block">Free Inspection</span>
            <h2 className="font-display text-5xl text-az-text mb-6 leading-tight">
              Ready for <em className="text-az-gold">{service.title}?</em>
            </h2>
            <p className="text-az-rock text-lg leading-relaxed">
              No pushy sales, no hidden fees. Just honest expert advice and a clear quote for your home — tailored for Arizona conditions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link to="/contact" className="btn-brick flex items-center gap-2">
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a href="tel:4808451833" className="flex items-center gap-3 group">
              <div className="w-12 h-12 border-2 border-az-gold flex items-center justify-center group-hover:bg-az-gold transition-colors shrink-0">
                <Phone size={18} className="text-az-gold group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-az-rock font-mono-label">Call Directly</div>
                <div className="text-xl font-bold text-az-text group-hover:text-az-gold transition-colors font-mono-label">(480) 845-1833</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-az-sand">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <span className="section-label mb-8 block">Related Services</span>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(s => (
              <Link key={s.id} to={`/services/${s.id}`}
                className="group border border-az-border bg-white overflow-hidden hover:shadow-md hover:shadow-az-gold/10 hover:border-az-gold transition-all">
                <div className="h-44 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <span className="font-display text-xl text-az-text group-hover:text-az-gold transition-colors">{s.title}</span>
                  <ChevronRight size={18} className="text-az-rock group-hover:text-az-gold transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery link */}
      <div className="py-14 bg-white border-t border-az-border text-center">
        <h2 className="font-display text-3xl text-az-text mb-5">See Our {service.title} Work</h2>
        <Link to="/gallery" className="inline-flex items-center gap-2 text-az-gold font-bold text-sm hover:gap-4 transition-all uppercase tracking-widest">
          Browse Portfolio <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
