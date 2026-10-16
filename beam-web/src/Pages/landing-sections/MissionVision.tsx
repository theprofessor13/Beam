import { Reveal } from '../../components/Reveal';

export function MissionVision() {
  return (
    <section id="mission" className="py-[88px]">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal className="max-w-[560px] mx-auto mb-13 text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-wide text-mint mb-2.5">What drives us</p>
          <h2 className="font-display font-semibold text-[clamp(26px,3.4vw,36px)]">Mission &amp; vision</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal direction="left">
            <div className="bg-surface border-[1.5px] border-line rounded-xl2 p-[34px] h-full">
              <span className="block text-xs font-bold uppercase tracking-wide text-accent mb-3.5">Our mission</span>
              <p className="font-display text-[19px] leading-[1.4] text-foreground m-0">
                To make moving money IN Nigeria as instant as a glance &mdash; so no one has to type a 10-digit account number
                to pay someone standing right next to them.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="bg-surface border-[1.5px] border-line rounded-xl2 p-[34px] h-full">
              <span className="block text-xs font-bold uppercase tracking-wide text-mint mb-3.5">Our vision</span>
              <p className="font-display text-[19px] leading-[1.4] text-foreground m-0">
                A Nigeria where every payment is a scan, every scan is free, and every naira left over is quietly
                growing.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
