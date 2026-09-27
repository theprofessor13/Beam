import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Reveal } from './Reveal';

const rows: [string, string, string, string, 'risk' | null][] = [
  ['Steps to pay', '2 taps', 'Card + PIN + slip', 'Copy account no. + fill form', null],
  ['Fee', '\u20a60', 'Merchant fee applies', 'Transfer fee applies', null],
  ['Speed', '<3 seconds', '~15 seconds', '1\u20135 minutes', null],
  ['Risk of typo error', 'None', 'Skimming risk', 'Wrong account risk', 'risk'],
];

export function Compare() {
  return (
    <section id="compare" className="py-[88px]">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal className="max-w-[560px] mx-auto mb-13 text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-wide text-mint mb-2.5">Why scan beats swipe</p>
          <h2 className="font-display font-semibold text-[clamp(26px,3.4vw,36px)]">Same money, fewer steps</h2>
          <p className="mt-3.5 text-slate text-[15.5px]">
            Card and bank transfer aren&rsquo;t going away &mdash; but scanning is faster, cheaper, and safer every
            time.
          </p>
        </Reveal>

        <Reveal direction="scale" className="overflow-x-auto border-[1.5px] border-line rounded-xl2 bg-white">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr>
                <th className="p-[16px_20px] text-left" />
                <th className="p-[16px_20px] text-left font-display text-[13px] text-ink font-semibold bg-mint-10 rounded-t-2xl">
                  Beam (Scan)
                </th>
                <th className="p-[16px_20px] text-left font-display text-[13px] text-slate font-semibold">Card</th>
                <th className="p-[16px_20px] text-left font-display text-[13px] text-slate font-semibold">
                  Bank transfer
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row[0]}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-line last:border-b-0"
                >
                  <td className="p-[16px_20px] text-sm">{row[0]}</td>
                  <td className="p-[16px_20px] text-sm font-bold bg-mint-10 flex items-center gap-1.5">
                    {row[4] === 'risk' ? <Check size={15} className="text-mint" /> : null}
                    {row[1]}
                  </td>
                  <td className="p-[16px_20px] text-sm">
                    {row[4] === 'risk' ? (
                      <span className="inline-flex items-center gap-1.5 text-coral font-bold">
                        <X size={15} /> {row[2]}
                      </span>
                    ) : (
                      row[2]
                    )}
                  </td>
                  <td className="p-[16px_20px] text-sm">
                    {row[4] === 'risk' ? (
                      <span className="inline-flex items-center gap-1.5 text-coral font-bold">
                        <X size={15} /> {row[3]}
                      </span>
                    ) : (
                      row[3]
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
