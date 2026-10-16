import { motion } from 'framer-motion';
import { ArrowRight, ScanLine, ShieldCheck } from 'lucide-react';
import { PhoneScan } from '../../components/PhoneScan';
import { CountUp } from '../../components/CountUp';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const floatLoop = (delay: number) => ({
  animate: { y: [0, -8, 0] },
  transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' as const, delay },
});

export function AboutHero() {
  return (
    <section id="top" className="relative pt-16 pb-20 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-44 -right-40 w-[560px] h-[560px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(54,84,255,0.16), transparent 70%)' }}
      />
      <div className="max-w-[1120px] mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 text-[12.5px] font-bold text-accent bg-cobalt-10 px-3.5 py-1.5 rounded-full mb-5"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-mint"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            In development &middot; Early access opening soon
          </motion.div>

          <h1 className="font-display font-semibold leading-[1.04] text-[clamp(36px,5.4vw,58px)] text-foreground">
            <motion.span variants={item} className="block">
              Pay by <span className="text-accent">scanning</span>.
            </motion.span>
            <motion.span variants={item} className="block">
              Not by typing.
            </motion.span>
          </h1>

          <motion.p variants={item} className="mt-5 text-[17px] leading-relaxed text-slate max-w-[500px] mx-auto lg:mx-0">
            Beam Finance is a payments app built around one idea: scanning a QR code should be the fastest way to pay.
            No 10-digit account numbers. No scrolling through old transactions to find who you paid.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex justify-center lg:justify-start">
            <a
              href="/#download"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-cobalt to-cobalt-dark px-6 font-display text-sm font-semibold text-white shadow-[0_10px_22px_-8px_rgba(54,84,255,0.55)] transition-transform hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Get the app
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.dl variants={item} className="flex gap-8 mt-9 flex-wrap justify-center lg:justify-start">
            <div>
              <dt className="sr-only">Digits to type</dt>
              <dd className="m-0">
                <b className="block font-mono text-2xl text-foreground">
                  <CountUp from={10} to={0} duration={1.8} />
                </b>
                <span className="text-xs text-slate">digits to type</span>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Scans to start a payment</dt>
              <dd className="m-0">
                <b className="block font-mono text-2xl text-foreground">1</b>
                <span className="text-xs text-slate">scan to start a payment</span>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Transactions to scroll</dt>
              <dd className="m-0">
                <b className="block font-mono text-2xl text-foreground">0</b>
                <span className="text-xs text-slate">history to scroll through</span>
              </dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="relative">
            <PhoneScan />
            <motion.div
              {...floatLoop(0)}
              className="hidden sm:flex absolute -left-16 top-24 items-center gap-2 rounded-2xl border border-line bg-surface px-3.5 py-2.5 shadow-lg"
            >
              <ScanLine size={15} className="text-accent" />
              <span className="text-[12px] font-semibold text-foreground">No account number</span>
            </motion.div>
            <motion.div
              {...floatLoop(1.2)}
              className="hidden sm:flex absolute -right-14 bottom-28 items-center gap-2 rounded-2xl border border-line bg-surface px-3.5 py-2.5 shadow-lg"
            >
              <ShieldCheck size={15} className="text-[#047857] dark:text-mint" />
              <span className="text-[12px] font-semibold text-foreground">Recipient shown first</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}