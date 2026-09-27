import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

const steps = [
  {
    n: '01',
    title: 'Link your bank',
    body: 'Connect your account in under a minute. It\u2019s verified once, used for every payment after.',
  },
  {
    n: '02',
    title: 'Scan any Beam QR',
    body: 'Point your camera at a recipient\u2019s code. Their bank details are read and verified instantly.',
  },
  {
    n: '03',
    title: 'Funds move instantly',
    body: 'Confirm with Face ID and the money leaves your bank directly \u2014 no fee, no waiting.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-[88px]">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal className="max-w-[560px] mx-auto mb-[52px] text-center">
          <h2 className="font-display font-semibold text-[clamp(26px,3.4vw,36px)]">Three steps replace your card</h2>
          <p className="mt-3.5 text-slate text-[15.5px]">
            Link your bank once. After that, every payment is just a scan.
          </p>
        </Reveal>

        <div className="relative grid md:grid-cols-3 gap-7">
          {/* connecting line, draws left-to-right as the section enters view */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="hidden md:block absolute top-[38px] left-[16%] right-[16%] h-px bg-line origin-left"
          />

          {steps.map((s, i) => (
            <Reveal key={s.n} direction={i === 0 ? 'right' : i === 2 ? 'left' : 'up'} delay={i * 0.15}>
              <div className="relative bg-white border-[1.5px] border-line rounded-xl2 p-[30px_26px] z-10">
                <div className="font-mono text-[13px] text-slate-2 border border-line w-[34px] h-[34px] rounded-full flex items-center justify-center mb-5 bg-paper">
                  {s.n}
                </div>
                <h3 className="font-display text-lg mb-2">{s.title}</h3>
                <p className="text-slate text-sm m-0">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
