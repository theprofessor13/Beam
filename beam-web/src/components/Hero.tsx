import { motion } from 'framer-motion';
import { Apple, PlayCircle } from 'lucide-react';
import { PhoneScan } from './PhoneScan';
import { CountUp } from './CountUp';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section id="top" className="relative pt-20 pb-16 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-44 -right-40 w-[520px] h-[520px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(54,84,255,0.16), transparent 70%)' }}
      />
      <div className="max-w-[1120px] mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 text-[12.5px] font-bold text-cobalt bg-cobalt-10 px-3.5 py-1.5 rounded-full mb-5"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-mint"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            Zero-fee scan payments
          </motion.div>

          <h1 className="font-display font-semibold leading-[1.05] text-[clamp(34px,5vw,54px)]">
            <motion.span variants={item} className="block">
              Beam.
            </motion.span>
            <motion.span variants={item} className="block">
              Scan. <span className="text-cobalt">Done.</span>
            </motion.span>
          </h1>

          <motion.p variants={item} className="mt-5 text-[17px] text-slate max-w-[460px] mx-auto lg:mx-0">
            Beam turns any QR code into an instant bank transfer — straight from your account, no card details, no
            manual account numbers.
          </motion.p>

          <motion.div variants={item} className="flex gap-3.5 mt-8 flex-wrap justify-center lg:justify-start">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-[11px] font-display font-semibold text-sm bg-ink text-white transition-transform active:scale-[0.97] hover:-translate-y-0.5"
            >
              <Apple size={16} /> App Store
            </a>
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-[11px] font-display font-semibold text-sm border-[1.5px] border-line text-ink transition-transform active:scale-[0.97] hover:-translate-y-0.5"
            >
              <PlayCircle size={16} /> Google Play
            </a>
          </motion.div>

          <motion.div variants={item} className="flex gap-7 mt-10 flex-wrap justify-center lg:justify-start">
            <div>
              <b className="block font-mono text-xl">₦0</b>
              <span className="text-xs text-slate">Beam transfer fee</span>
            </div>
            <div>
              <b className="block font-mono text-xl">
                &lt;<CountUp to={3} duration={1.2} />s
              </b>
              <span className="text-xs text-slate">Average scan-to-send time</span>
            </div>
            <div>
              <b className="block font-mono text-xl">
                <CountUp to={256} duration={1.4} />-bit
              </b>
              <span className="text-xs text-slate">Bank-grade encryption</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <PhoneScan />
        </motion.div>
      </div>
    </section>
  );
}
