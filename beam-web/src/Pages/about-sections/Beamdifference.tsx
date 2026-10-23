import { motion } from 'framer-motion';
import { Check, Hash, History, ScanLine, X } from 'lucide-react';
import { Reveal, staggerContainer, staggerItem } from '../../components/Reveal';

const GREEN = 'text-[#047857] dark:text-mint';

function Wire({ className = '' }: { className?: string }) {
  return <div className={`rounded bg-line ${className}`} />;
}

/** Wireframe of a typical finance app: scan is one tile among many. */
function TypicalPhone() {
  return (
    <figure className="m-0 flex w-full min-w-0 flex-col items-center gap-3">
      <div className="w-full max-w-[176px] rounded-[24px] border-[1.5px] border-line bg-surface p-2.5 sm:p-3">
        <div className="flex items-center justify-between">
          <Wire className="h-2 w-1/2" />
          <Wire className="h-5 w-5 shrink-0 !rounded-full" />
        </div>
        <div className="mt-3 h-10 rounded-xl bg-line/70 sm:h-12" />
        <div className="mt-3 grid grid-cols-4 gap-1 sm:gap-1.5">
          {Array.from({ length: 8 }).map((_, i) =>
            i === 6 ? (
              <div
                key={i}
                className="flex h-6 items-center justify-center rounded-md border border-dashed border-accent bg-cobalt-10 sm:h-8"
              >
                <ScanLine size={11} className="text-accent" />
              </div>
            ) : (
              <div key={i} className="h-6 rounded-md bg-line sm:h-8" />
            ),
          )}
        </div>
        <div className="mt-3 space-y-1.5">
          <Wire className="h-2.5 w-full" />
          <Wire className="h-2.5 w-4/5" />
          <Wire className="h-2.5 w-full" />
        </div>
      </div>
      <figcaption className="px-1 text-center">
        <b className="block font-display text-[13px] text-foreground">Typical finance app</b>
        <span className="text-xs text-slate">Scan is one tile in the grid</span>
      </figcaption>
    </figure>
  );
}

/** Wireframe of Beam: scan is the home screen. */
function BeamPhone() {
  return (
    <figure className="m-0 flex w-full min-w-0 flex-col items-center gap-3">
      <div className="w-full max-w-[176px] rounded-[24px] border-[1.5px] border-accent bg-surface p-2.5 shadow-[0_18px_40px_-18px_rgba(54,84,255,0.55)] sm:p-3">
        <div className="flex items-center justify-between">
          <Wire className="h-2 w-1/2" />
          <Wire className="h-5 w-5 shrink-0 !rounded-full" />
        </div>
        <div className="mt-3 h-10 rounded-xl bg-line/70 sm:h-12" />
        <div className="relative my-4 flex justify-center sm:my-5">
          <motion.span
            aria-hidden="true"
            className="absolute top-0 h-14 w-14 rounded-full border-[1.5px] border-accent sm:h-[68px] sm:w-[68px]"
            animate={{ scale: [0.95, 1.4], opacity: [0.7, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cobalt to-cobalt-dark shadow-lg sm:h-[68px] sm:w-[68px]">
            <ScanLine className="h-[22px] w-[22px] text-white sm:h-[26px] sm:w-[26px]" />
          </div>
        </div>
        <p className="mb-3 text-center font-display text-[11px] font-semibold text-foreground">Scan to Pay</p>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="h-5 rounded-md bg-line" />
          <div className="h-5 rounded-md bg-line" />
          <div className="h-5 rounded-md bg-line" />
        </div>
      </div>
      <figcaption className="px-1 text-center">
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
    <section id="difference" className="py-16 md:py-[88px]" aria-labelledby="difference-title">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <Reveal className="mx-auto mb-10 max-w-[620px] text-center md:mb-14">
          <p className={`mb-2.5 text-[12.5px] font-bold uppercase tracking-wide ${GREEN}`}>What makes Beam different</p>
          <h2 id="difference-title" className="font-display text-[clamp(25px,6.4vw,40px)] font-semibold leading-[1.12] text-foreground md:text-[clamp(28px,3.6vw,40px)]">
            Most finance apps add a scanner. Beam is built around one.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate md:text-[15.5px]">
            That single decision changes the home screen, the flow, and how little you have to remember.
          </p>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-12">
          {/* two phones always fit side by side: each one shrinks to share the width */}
          <Reveal direction="left" className="mx-auto grid w-full max-w-[400px] grid-cols-2 gap-3 sm:gap-8 lg:mx-0">
            <TypicalPhone />
            <BeamPhone />
          </Reveal>

          {/* phones: stacked. tablets: three across. desktop: stacked beside the phones */}
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="m-0 grid list-none gap-4 p-0 md:grid-cols-3 lg:grid-cols-1"
          >
            {principles.map(({ icon: Icon, title, body }) => (
              <motion.li
                key={title}
                variants={staggerItem}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex gap-4 rounded-xl2 border-[1.5px] border-line bg-surface p-4 sm:p-5 md:flex-col md:gap-3 lg:flex-row lg:gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cobalt-10">
                  <Icon size={19} className="text-accent" />
                </span>
                <div className="min-w-0">
                  <h3 className="mb-1 font-display text-[16px] font-semibold text-foreground sm:text-[17px]">{title}</h3>
                  <p className="m-0 text-sm leading-relaxed text-slate">{body}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* phones and small tablets: one card per row, so nothing scrolls sideways */}
        <ul className="m-0 mt-12 grid list-none gap-3 p-0 md:hidden">
          {rows.map((row) => (
            <li key={row.label}>
              <Reveal className="rounded-xl2 border-[1.5px] border-line bg-surface p-4">
                <h3 className="mb-3 font-display text-[12px] font-bold uppercase tracking-wide text-slate">{row.label}</h3>
                <dl className="m-0 grid gap-1.5">
                  <div className="rounded-xl bg-mint-10 px-3.5 py-2.5">
                    <dt className={`text-[11px] font-bold uppercase tracking-wide ${GREEN}`}>Beam (scan)</dt>
                    <dd className="m-0 mt-0.5 flex items-start gap-1.5 text-sm font-semibold text-foreground">
                      {row.beam === 'No' ? <X size={14} className={`mt-[3px] shrink-0 ${GREEN}`} /> : <Check size={14} className={`mt-[3px] shrink-0 ${GREEN}`} />}
                      {row.beam}
                    </dd>
                  </div>
                  <div className="px-3.5 py-1.5">
                    <dt className="text-[11px] font-bold uppercase tracking-wide text-slate">Bank transfer</dt>
                    <dd className="m-0 mt-0.5 text-sm text-foreground">{row.transfer}</dd>
                  </div>
                  <div className="px-3.5 py-1.5">
                    <dt className="text-[11px] font-bold uppercase tracking-wide text-slate">Card</dt>
                    <dd className="m-0 mt-0.5 text-sm text-foreground">{row.card}</dd>
                  </div>
                </dl>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* tablets and up: the full side-by-side table */}
        <Reveal direction="scale" className="mt-16 hidden overflow-x-auto rounded-xl2 border-[1.5px] border-line bg-surface md:block">
          <table className="w-full border-collapse text-left">
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
                      {row.beam === 'No' ? <X size={14} className={GREEN} /> : <Check size={14} className={GREEN} />}
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