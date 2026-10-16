import { motion } from 'framer-motion';
import { PiggyBank, ScanLine, TrendingUp, type LucideIcon } from 'lucide-react';
import { Reveal, staggerContainer, staggerItem } from '../../components/Reveal';

type Tone = 'now' | 'next' | 'later';

const phases: { status: string; tone: Tone; icon: LucideIcon; title: string; items: string[] }[] = [
  {
    status: 'In development',
    tone: 'now',
    icon: ScanLine,
    title: 'Scan to Pay',
    items: [
      'Create an account in about a minute',
      'Link your bank when you’re ready',
      'Scan a Beam code to pay',
      'Confirm with Face ID or fingerprint',
      'Show your own code to get paid',
    ],
  },
  {
    status: 'Planned',
    tone: 'next',
    icon: PiggyBank,
    title: 'Save',
    items: ['Beam Vaults: round up payments into savings', 'Flexible savings you can reach anytime'],
  },
  {
    status: 'Exploring',
    tone: 'later',
    icon: TrendingUp,
    title: 'Grow',
    items: ['Investment options inside the same app', 'Subject to regulatory approval'],
  },
];

const chip: Record<Tone, string> = {
  now: 'bg-cobalt-10 text-accent',
  next: 'bg-mint-10 text-[#047857] dark:text-mint',
  later: 'border border-line text-slate',
};

export function Roadmap() {
  return (
    <section id="roadmap" className="py-[88px]" aria-labelledby="roadmap-title">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal className="max-w-[620px] mx-auto mb-14 text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-wide text-[#047857] dark:text-mint mb-2.5">Roadmap</p>
          <h2 id="roadmap-title" className="font-display font-semibold text-[clamp(26px,3.6vw,40px)] leading-[1.12] text-foreground">
            Payments first. Everything else earns its place.
          </h2>
          <p className="mt-4 text-slate text-[15.5px] leading-relaxed">
            We&rsquo;re starting with the one thing we want to get right, then building outward.
          </p>
        </Reveal>

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="m-0 grid list-none gap-6 p-0 lg:grid-cols-3"
        >
          {phases.map(({ status, tone, icon: Icon, title, items }, i) => (
            <motion.li
              key={title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`relative flex flex-col overflow-hidden rounded-xl2 p-[30px_26px] ${
                tone === 'now'
                  ? 'bg-gradient-to-br from-ink to-ink-2 text-white dark:ring-1 dark:ring-white/10'
                  : 'border-[1.5px] border-line bg-surface'
              }`}
            >
              {tone === 'now' && (
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-16 -right-16 h-[220px] w-[220px] rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(23,217,163,0.22), transparent 70%)' }}
                  animate={{ scale: [1, 1.12, 1], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
              <div className="relative mb-5 flex items-center justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-[13px] ${
                    tone === 'now' ? 'bg-white/10' : 'bg-cobalt-10'
                  }`}
                >
                  <Icon size={20} className={tone === 'now' ? 'text-mint' : 'text-accent'} />
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-bold ${
                    tone === 'now' ? 'bg-mint/15 text-mint' : chip[tone]
                  }`}
                >
                  {tone === 'now' && (
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full bg-mint"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                    />
                  )}
                  {status}
                </span>
              </div>
              <p className={`relative mb-1 font-mono text-xs ${tone === 'now' ? 'text-slate-2' : 'text-slate'}`}>
                Phase {i + 1}
              </p>
              <h3 className={`relative mb-4 font-display text-[21px] font-semibold ${tone === 'now' ? 'text-white' : 'text-foreground'}`}>
                {title}
              </h3>
              <ul className="relative m-0 flex list-none flex-col gap-2.5 p-0">
                {items.map((item) => (
                  <li key={item} className={`flex gap-2.5 text-sm leading-snug ${tone === 'now' ? 'text-slate-2' : 'text-slate'}`}>
                    <span
                      aria-hidden="true"
                      className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${tone === 'now' ? 'bg-mint' : 'bg-line'}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ol>

        <Reveal className="mt-6 text-center text-[12.5px] text-slate">
          Plans may change as we build and as regulations require.
        </Reveal>
      </div>
    </section>
  );
}