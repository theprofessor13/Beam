import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { CountUp } from './CountUp';

export function About() {
  return (
    <section id="about" className="py-[88px]">
      <div className="max-w-[1120px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <Reveal direction="left">
          <p className="text-[12.5px] font-bold uppercase tracking-wide text-mint mb-2.5">About us</p>
          <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] mb-4">
            Built by people tired of typing account numbers
          </h2>
          <p className="text-slate text-[15px] mb-4">
            Beam started as an internal tool for splitting lunch bills without asking three people to read out their
            bank details one digit at a time. It didn&rsquo;t take long to realize the same friction shows up
            everywhere &mdash; market stalls, split rent, paying a friend back.
          </p>
          <p className="text-slate text-[15px] mb-0">
            Today Beam is a small, focused team of engineers, designers and ex-bankers building the fastest legal
            way to move money in Nigeria &mdash; and, increasingly, the easiest way to grow it.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-[26px]">
            <div className="border-[1.5px] border-line rounded-2xl p-[18px_14px] text-center bg-white">
              <b className="block font-mono text-xl">
                <CountUp to={2026} duration={1.2} />
              </b>
              <span className="text-[11.5px] text-slate">Founded</span>
            </div>
            <div className="border-[1.5px] border-line rounded-2xl p-[18px_14px] text-center bg-white">
              <b className="block font-mono text-xl">
                <CountUp to={50} duration={1.2} suffix="+" />
              </b>
              <span className="text-[11.5px] text-slate">Team members</span>
            </div>
            <div className="border-[1.5px] border-line rounded-2xl p-[18px_14px] text-center bg-white">
              <b className="block font-mono text-xl">Lagos</b>
              <span className="text-[11.5px] text-slate">Headquarters</span>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="rounded-3xl bg-gradient-to-br from-cobalt-10 to-mint-10 p-11 flex items-center justify-center min-h-[280px]">
            <motion.div
              className="relative w-[100px] h-[100px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              <span className="absolute top-0 left-0 w-9 h-9 border-cobalt border-t-4 border-l-4 rounded-tl-xl" />
              <span className="absolute top-0 right-0 w-9 h-9 border-mint border-t-4 border-r-4 rounded-tr-xl" />
              <span className="absolute bottom-0 left-0 w-9 h-9 border-mint border-b-4 border-l-4 rounded-bl-xl" />
              <span className="absolute bottom-0 right-0 w-9 h-9 border-cobalt border-b-4 border-r-4 rounded-br-xl" />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
