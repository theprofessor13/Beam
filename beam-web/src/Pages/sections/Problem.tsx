import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { Hash, History, ScanLine } from 'lucide-react';
import { Reveal } from '../../components/Reveal';

const DIGITS = '0142883721';

/** Types a 10-digit account number one digit at a time, then shows the doubt that follows. */
function TypingDigits() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const [count, setCount] = useState(reduce ? DIGITS.length : 0);
  const done = count >= DIGITS.length;

  useEffect(() => {
    if (reduce || !inView) return;
    const timer = window.setTimeout(() => setCount(done ? 0 : count + 1), done ? 2400 : 170);
    return () => window.clearTimeout(timer);
  }, [count, done, inView, reduce]);

  return (
    <div ref={ref} aria-hidden="true">
      <div className="rounded-xl border-[1.5px] border-line bg-paper px-4 py-3.5">
        <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate mb-1.5">Account number</span>
        <div className="flex h-8 items-center font-mono text-[22px] font-semibold tracking-[0.18em] text-foreground">
          {DIGITS.slice(0, count)}
          {!done && <span className="ml-0.5 inline-block h-6 w-[2px] animate-pulse bg-accent" />}
        </div>
      </div>
      <div className="mt-3 h-6">
        <AnimatePresence>
          {done && (
            <motion.p
              key="doubt"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: [0, -5, 5, -3, 3, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[13px] font-semibold text-coral"
            >
              Was that an 8 or a 3? Check again&hellip;
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const HISTORY = [
  ['Tunde Okafor', 'Mar 3', '₦12,000'],
  ['Tunde Adebayo', 'Feb 27', '₦4,500'],
  ['T. Okafor', 'Feb 21', '₦25,000'],
  ['Tunde O.', 'Feb 14', '₦8,000'],
  ['Tolu Okafor', 'Feb 9', '₦15,000'],
  ['Tunde Okafor (GTB)', 'Feb 2', '₦6,200'],
];

/** An endless list of near-identical past payments, with the question everyone asks. */
function HistoryScroll() {
  const reduce = useReducedMotion();
  const rows = [...HISTORY, ...HISTORY];
  const mask = 'linear-gradient(to bottom, transparent, #000 18%, #000 82%, transparent)';

  return (
    <div className="relative" aria-hidden="true">
      <div
        className="h-[156px] overflow-hidden rounded-xl border-[1.5px] border-line bg-paper"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      >
        <motion.div
          animate={reduce ? undefined : { y: ['0%', '-50%'] }}
          transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
        >
          {rows.map(([name, date, amount], i) => (
            <div key={i} className="flex h-[52px] items-center justify-between border-b border-line px-4">
              <div>
                <b className="block text-[13px] font-semibold text-foreground">{name}</b>
                <span className="text-[11px] text-slate">{date}</span>
              </div>
              <span className="font-mono text-[13px] font-semibold text-foreground">{amount}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.span
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-coral px-3 py-1 text-[11.5px] font-bold text-white shadow-md"
      >
        Which one was it?
      </motion.span>
    </div>
  );
}

export function Problem() {
  return (
    <section id="problem" className="py-[88px]" aria-labelledby="problem-title">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal className="max-w-[620px] mx-auto mb-14 text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-wide text-[#047857] dark:text-mint mb-2.5">The problem</p>
          <h2 id="problem-title" className="font-display font-semibold text-[clamp(26px,3.6vw,40px)] leading-[1.12] text-foreground">
            Paying someone shouldn’t feel like data entry.
          </h2>
          <p className="mt-4 text-slate text-[15.5px] leading-relaxed">
            Every transfer starts the same way: dig up an account number, or scroll through old transactions hoping you
            remember the right name.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal direction="left">
            <article className="h-full rounded-xl2 border-[1.5px] border-line bg-surface p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cobalt-10">
                  <Hash size={18} className="text-accent" />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">Typing 10 digits</h3>
              </div>
              <TypingDigits />
              <p className="mt-2 text-sm leading-relaxed text-slate">
                One slipped digit and you&rsquo;re starting over, usually while someone waits for you to finish.
              </p>
            </article>
          </Reveal>

          <Reveal direction="right">
            <article className="h-full rounded-xl2 border-[1.5px] border-line bg-surface p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cobalt-10">
                  <History size={18} className="text-accent" />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">Scrolling history</h3>
              </div>
              <HistoryScroll />
              <p className="mt-5 text-sm leading-relaxed text-slate">
                Hunting through old transactions just to find who you paid last time, then hoping it&rsquo;s the right
                one.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal direction="scale" delay={0.1} className="mt-6">
          <div className="relative overflow-hidden rounded-xl2 bg-gradient-to-br from-ink to-ink-2 p-8 text-white md:p-10 dark:ring-1 dark:ring-white/10">
            <div
              className="pointer-events-none absolute -right-20 -bottom-20 h-[260px] w-[260px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(23,217,163,0.22), transparent 70%)' }}
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <ScanLine size={22} className="text-mint" />
                </span>
                <div>
                  <h3 className="font-display text-[22px] font-semibold">The Beam way: scan, and you&rsquo;re done.</h3>
                  <p className="mt-1.5 max-w-[520px] text-[14.5px] leading-relaxed text-slate-2">
                    Point your camera at a Beam code. The recipient&rsquo;s name and bank fill in on their own, so you
                    only choose an amount and confirm.
                  </p>
                </div>
              </div>
              <ul className="flex shrink-0 gap-6 font-mono text-sm">
                <li>
                  <b className="block text-2xl text-mint">0</b>
                  <span className="text-slate-2">digits typed</span>
                </li>
                <li>
                  <b className="block text-2xl text-mint">0</b>
                  <span className="text-slate-2">history scrolled</span>
                </li>
                <li>
                  <b className="block text-2xl text-mint">1</b>
                  <span className="text-slate-2">scan</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}