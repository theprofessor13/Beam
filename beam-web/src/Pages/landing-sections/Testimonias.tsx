import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Reveal, staggerContainer, staggerItem } from '../../components/Reveal';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO of Company',
    quote: "Beam has revolutionized the way we handle payments. It's fast, secure, and incredibly easy to use.",
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'CTO of Startup',
    quote: 'The investment options offered by Beam have allowed us to grow our idle balance significantly. Highly recommend!',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    title: 'Freelancer',
    quote: "I love how Beam makes it so easy to link my bank and make payments. It's a game-changer for freelancers like me.",
  },
];

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[88px]">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal className="max-w-[560px] mx-auto mb-[52px] text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-wide text-mint mb-2.5">Real people, real scans</p>
          <h2 className="font-display font-semibold text-[clamp(26px,3.4vw,36px)]">Loved by scanners everywhere</h2>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.id}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-surface border-[1.5px] border-line rounded-xl2 p-7 flex flex-col m-0"
            >
              <div className="flex gap-1 text-mint mb-4" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <blockquote className="flex-1 m-0 text-[14.5px] leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 mt-6 pt-5 border-t border-line">
                <div className="w-10 h-10 rounded-full bg-cobalt-10 text-accent font-display font-bold text-[13px] flex items-center justify-center shrink-0">
                  {initials(t.name)}
                </div>
                <div>
                  <b className="block text-[13px] font-display">{t.name}</b>
                  <span className="text-[11.5px] text-slate">{t.title}</span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}