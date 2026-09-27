import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Reveal } from './Reveal';

const faqs = [
  {
    q: 'Do I need to add my card to use Beam?',
    a: "No. Beam links directly to your bank account, so there's no card to add, expire, or lose.",
  },
  {
    q: 'What happens if I scan the wrong code?',
    a: 'You always see the recipient\u2019s verified name and bank before confirming \u2014 nothing is sent until you approve it with Face ID.',
  },
  {
    q: 'Is there a fee to beam money?',
    a: 'Beam-to-beam transfers are free. Standard bank charges may still apply on the receiving end depending on your bank.',
  },
  {
    q: 'Can I still use my card or bank transfer?',
    a: 'Yes \u2014 both remain available in the app. Beam just makes scanning the fastest option, so it becomes your default.',
  },
  {
    q:'',
    a:''
  }
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white border-[1.5px] border-line rounded-2xl px-5 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-[18px] text-left font-display font-semibold text-[15px]"
        aria-expanded={open}
      >
        {q}
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} className="text-slate shrink-0">
          <Plus size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-slate text-sm pb-[18px] pr-6 m-0">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-[88px]">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal className="max-w-[560px] mx-auto mb-13 text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-wide text-mint mb-2.5">FAQ</p>
          <h2 className="font-display font-semibold text-[clamp(26px,3.4vw,36px)]">Good to know</h2>
        </Reveal>

        <Reveal className="max-w-[720px] mx-auto flex flex-col gap-3">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
