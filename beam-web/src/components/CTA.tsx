import { motion } from 'framer-motion';
import { Apple, PlayCircle } from 'lucide-react';
import { Reveal } from './Reveal';

export function CTA() {
  return (
    <section id="download" className="py-[88px]">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-xl3 p-[60px_44px] text-center text-white bg-gradient-to-br from-cobalt to-cobalt-dark">
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.16), transparent 55%)' }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <h2 className="relative font-display text-[clamp(26px,3.6vw,34px)] text-white">
              Your next payment could take three seconds.
            </h2>
            <p className="relative mt-3 text-white/85">Link your bank once. Beam every payment after.</p>
            <div className="relative flex gap-3.5 justify-center mt-8 flex-wrap">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-[11px] font-display font-semibold text-sm bg-white text-ink transition-transform active:scale-[0.97] hover:-translate-y-0.5"
              >
                <Apple size={16} /> App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-[11px] font-display font-semibold text-sm border-[1.5px] border-white/40 text-white transition-transform active:scale-[0.97] hover:-translate-y-0.5"
              >
                <PlayCircle size={16} /> Google Play
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
