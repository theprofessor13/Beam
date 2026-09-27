import { motion } from 'framer-motion';
import { ShieldCheck, ScanFace, Lock } from 'lucide-react';
import { Reveal, staggerContainer, staggerItem } from './Reveal';

const items = [
  {
    icon: ShieldCheck,
    title: 'Bank-licensed transfer rails',
    body: 'Every payment routes through a regulated payment partner, not a custom pipe.',
  },
  {
    icon: ScanFace,
    title: 'Biometric authorization',
    body: "Face ID or fingerprint confirms every debit \u2014 no PIN typed on a stranger's device.",
  },
  {
    icon: Lock,
    title: 'Encrypted at rest and in transit',
    body: 'Bank details are encrypted end-to-end and never appear in logs.',
  },
];

export function Security() {
  return (
    <section id="security" className="py-[88px]">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-xl3 p-[56px_44px] text-white bg-ink">
            <motion.div
              className="pointer-events-none absolute -left-24 -bottom-24 w-[340px] h-[340px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(23,217,163,0.18), transparent 70%)' }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative grid md:grid-cols-2 gap-10">
              <Reveal direction="left">
                <h2 className="font-display text-[28px] text-white max-w-[360px]">
                  Your bank details never touch the QR code.
                </h2>
                <p className="mt-3.5 text-slate-2 text-[14.5px] max-w-[380px]">
                  Every scan resolves through an encrypted, short-lived token &mdash; not your raw account number.
                  Beam never stores card data, because there&rsquo;s no card to store.
                </p>
              </Reveal>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-col gap-[18px]"
              >
                {items.map(({ icon: Icon, title, body }) => (
                  <motion.div key={title} variants={staggerItem} className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-[10px] bg-white/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-mint" />
                    </div>
                    <div>
                      <b className="block text-sm text-white">{title}</b>
                      <span className="text-[13px] text-slate-2">{body}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
