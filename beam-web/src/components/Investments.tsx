import { motion } from 'framer-motion';
import { TrendingUp, PiggyBank, LayoutGrid } from 'lucide-react';
import { Reveal, staggerContainer, staggerItem } from './Reveal';
import { CountUp } from './CountUp';

export function Investments() {
  return (
    <section id="invest" className="py-[88px]">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal className="max-w-[560px] mx-auto mb-13 text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-wide text-mint mb-2.5">Beyond payments</p>
          <h2 className="font-display font-semibold text-[clamp(26px,3.4vw,36px)]">Scan to pay. Stay to grow.</h2>
          <p className="mt-3.5 text-slate text-[15.5px]">
            Beam isn&rsquo;t just a faster way to send money &mdash; it&rsquo;s a faster way to put it to work.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid lg:grid-cols-[1.1fr_0.9fr_0.9fr] gap-6"
        >
          <motion.div
            variants={staggerItem}
            className="relative overflow-hidden rounded-xl2 p-[30px_26px] text-white bg-gradient-to-br from-ink to-ink-2 flex flex-col"
          >
            <motion.div
              className="pointer-events-none absolute -right-16 -bottom-16 w-[220px] h-[220px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(23,217,163,0.22), transparent 70%)' }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative w-[42px] h-[42px] rounded-[13px] bg-white/10 flex items-center justify-center mb-4.5 mb-[18px]">
              <TrendingUp size={20} className="text-mint" />
            </div>
            <h3 className="relative font-display text-[19px] mb-2">Investments</h3>
            <p className="relative text-sm text-slate-2 m-0">
              Put idle balance into fixed-return plans or flexible funds &mdash; right from the same app you use to
              beam payments. No separate broker, no paperwork.
            </p>
            <div className="relative mt-[22px] flex items-baseline gap-2">
              <b className="font-mono text-2xl">
                <CountUp to={16.5} decimals={1} duration={1.4} suffix="%" />
              </b>
              <span className="text-xs text-slate-2">indicative annual return, fixed plans</span>
            </div>
            <span className="relative inline-flex mt-5 self-start text-[11.5px] font-bold text-mint bg-mint/15 px-[11px] py-[5px] rounded-full">
              New
            </span>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white border-[1.5px] border-line rounded-xl2 p-[30px_26px] flex flex-col"
          >
            <div className="w-[42px] h-[42px] rounded-[13px] bg-cobalt-10 flex items-center justify-center mb-[18px]">
              <PiggyBank size={18} className="text-cobalt" />
            </div>
            <h3 className="font-display text-[19px] mb-2">Beam Vaults</h3>
            <p className="text-sm text-slate m-0">
              Automatically round up every scan payment and sink the spare change into a savings vault.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white border-[1.5px] border-line rounded-xl2 p-[30px_26px] flex flex-col"
          >
            <div className="w-[42px] h-[42px] rounded-[13px] bg-cobalt-10 flex items-center justify-center mb-[18px]">
              <LayoutGrid size={18} className="text-cobalt" />
            </div>
            <h3 className="font-display text-[19px] mb-2">Flexible plans</h3>
            <p className="text-sm text-slate m-0">
              Move money into an interest-earning plan and pull it back out anytime &mdash; no lock-in penalties.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
