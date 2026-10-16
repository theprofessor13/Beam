import { motion } from 'framer-motion';
import { Check, Hash, History, ScanLine, X } from 'lucide-react';
import { Reveal, staggerContainer, staggerItem } from '../../components/Reveal';

function Wire({ className = '' }: { className?: string }) {
  return <div className={`rounded bg-line ${className}`} />;
}

/** Wireframe of a typical finance app: scan is one tile among many. */
function TypicalPhone() {
  return (
    <figure className="m-0 flex flex-col items-center gap-3">
      <div className="w-[176px] rounded-[24px] border-[1.5px] border-line bg-surface p-3">
        <div className="flex items-center justify-between">
          <Wire className="h-2 w-14" />
          <Wire className="h-5 w-5 !rounded-full" />
        </div>
        <div className="mt-3 h-12 rounded-xl bg-line/70" />
        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {Array.from({ length: 8 }).map((_, i) =>
            i === 6 ? (
              <div
                key={i}
                className="flex h-8 items-center justify-center rounded-md border border-dashed border-accent bg-cobalt-10"
              >
                <ScanLine size={11} className="text-accent" />
              </div>
            ) : (
              <div key={i} className="h-8 rounded-md bg-line" />
            ),
          )}
        </div>
        <div className="mt-3 space-y-1.5">
          <Wire className="h-2.5 w-full" />
          <Wire className="h-2.5 w-4/5" />
          <Wire className="h-2.5 w-full" />
        </div>
      </div>
      <figcaption className="text-center">
        <b className="block font-display text-[13px] text-foreground">Typical finance app</b>
        <span className="text-xs text-slate">Scan is one tile in the grid</span>
      </figcaption>
    </figure>
  );
}

/** Wireframe of Beam: scan is the home screen. */
function BeamPhone() {
  return (
    <figure className="m-0 flex flex-col items-center gap-3">
      <div className="w-[176px] rounded-[24px] border-[1.5px] border-accent bg-surface p-3 shadow-[0_18px_40px_-18px_rgba(54,84,255,0.55)]">
        <div className="flex items-center justify-between">
          <Wire className="h-2 w-14" />
          <Wire className="h-5 w-5 !rounded-full" />
        </div>
        <div className="mt-3 h-12 rounded-xl bg-line/70" />
        <div className="relative my-5 flex justify-center">
          <motion.span
            aria-hidden="true"
            className="absolute top-0 h-[68px] w-[68px] rounded-full border-[1.5px] border-accent"
            animate={{ scale: [0.95, 1.4], opacity: [0.7, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          />
          <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gradient-to-br from-cobalt to-cobalt-dark shadow-lg">
            <ScanLine size={26} className="text-white" />
          </div>
        </div>
        <p className="mb-3 text-center font-display text-[11px] font-semibold text-foreground">Scan to Pay</p>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="h-5 rounded-md bg-line" />
          <div className="h-5 rounded-md bg-line" />
          <div className="h-5 rounded-md bg-line" />
        </div>
      </div>
      <figcaption className="text-center">
        <b className="block font-display text-[13px] text-foreground">Beam Finance</b>
        <span className="text-xs text-slate">Scan is the home screen</span>
      </figcaption>
    </figure>
  );
}

const principles = [
  {
    icon: ScanLine,
    title: 'Scan-first, not scan-also',
    body: 'Other apps add a scanner to a long list of features. Beam is built around it, so paying starts with your camera, not a menu.',
  },
  {
    icon: Hash,
    title: 'No 10-digit typing',
    body: 'The code carries the recipient with it. There’s no account number to copy, read out, or get wrong.',
  },
  {
    icon: History,
    title: 'No history hunting',
    body: 'You never need to dig through past transactions to find someone. Scanning their code is the way to find them.',
  },
];

const rows: { label: string; beam: string; transfer: string; card: string }[] = [
  { label: 'What you do', beam: 'Scan a code, confirm', transfer: 'Find or type account details, confirm', card: 'Tap or insert card, enter PIN' },
  { label: 'What you type', beam: 'Nothing', transfer: 'A 10-digit account number', card: 'A PIN' },
  { label: 'Seeing who you pay', beam: 'Name and bank shown before you confirm', transfer: 'Depends on your banking app', card: 'The merchant’s terminal' },
  { label: 'Needs a physical card', beam: 'No', transfer: 'No', card: 'Yes' },
];

export function Difference() {
  return (
    <section id="difference" className="py-[88px]" aria-labelledby="difference-title">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal className="max-w-[620px] mx-auto mb-14 text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-wide text-[#047857] dark:text-mint mb-2.5">What makes Beam different</p>
          <h2 id="difference-title" className="font-display font-semibold text-[clamp(26px,3.6vw,40px)] leading-[1.12] text-foreground">
            Most finance apps add a scanner. Beam is built around one.
          </h2>
          <p className="mt-4 text-slate text-[15.5px] leading-relaxed">
            That single decision changes the home screen, the flow, and how little you have to remember.
          </p>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr]">
          <Reveal direction="left" className="flex justify-center gap-5 sm:gap-8">
            <TypicalPhone />
            <BeamPhone />
          </Reveal>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="m-0 flex list-none flex-col gap-4 p-0"
          >
            {principles.map(({ icon: Icon, title, body }) => (
              <motion.li
                key={title}
                variants={staggerItem}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex gap-4 rounded-xl2 border-[1.5px] border-line bg-surface p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cobalt-10">
                  <Icon size={19} className="text-accent" />
                </span>
                <div>
                  <h3 className="mb-1 font-display text-[17px] font-semibold text-foreground">{title}</h3>
                  <p className="m-0 text-sm leading-relaxed text-slate">{body}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <Reveal direction="scale" className="mt-16 overflow-x-auto rounded-xl2 border-[1.5px] border-line bg-surface">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">Beam compared with bank transfer and card payments</caption>
            <thead>
              <tr>
                <th scope="col" className="p-[16px_20px]">
                  <span className="sr-only">Comparison</span>
                </th>
                <th scope="col" className="bg-mint-10 p-[16px_20px] font-display text-[13px] font-semibold text-foreground">
                  Beam (scan)
                </th>
                <th scope="col" className="p-[16px_20px] font-display text-[13px] font-semibold text-slate">
                  Bank transfer
                </th>
                <th scope="col" className="p-[16px_20px] font-display text-[13px] font-semibold text-slate">
                  Card
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-line">
                  <th scope="row" className="p-[16px_20px] text-sm font-medium text-foreground">
                    {row.label}
                  </th>
                  <td className="bg-mint-10 p-[16px_20px] text-sm font-semibold text-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      {row.beam === 'No' ? <X size={14} className="text-[#047857] dark:text-mint" /> : <Check size={14} className="text-[#047857] dark:text-mint" />}
                      {row.beam}
                    </span>
                  </td>
                  <td className="p-[16px_20px] text-sm text-slate">{row.transfer}</td>
                  <td className="p-[16px_20px] text-sm text-slate">{row.card}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}