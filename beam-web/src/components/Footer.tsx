import { BrandMark } from './BrandMark';

export function Footer() {
  return (
    <footer
      className="border-t border-line pt-14 pb-8"
      style={{ paddingBottom: 'calc(32px + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="max-w-[1120px] mx-auto px-6 flex justify-between flex-wrap gap-10">
        <div className="flex items-center gap-2.5">
          <BrandMark size={26} />
          <span className="font-display font-semibold text-lg">Beam</span>
        </div>

        <div className="flex gap-14 flex-wrap">
          <div>
            <b className="block text-[12.5px] font-bold text-slate uppercase tracking-wide mb-3.5">Product</b>
            <a href="#how" className="block text-sm text-ink mb-2.5">
              How it works
            </a>
            <a href="#invest" className="block text-sm text-ink mb-2.5">
              Investments
            </a>
            <a href="#compare" className="block text-sm text-ink mb-2.5">
              Why Beam
            </a>
            <a href="#security" className="block text-sm text-ink mb-0">
              Security
            </a>
          </div>
          <div>
            <b className="block text-[12.5px] font-bold text-slate uppercase tracking-wide mb-3.5">Company</b>
            <a href="#about" className="block text-sm text-ink mb-2.5">
              About us
            </a>
            <a href="#mission" className="block text-sm text-ink mb-2.5">
              Mission &amp; vision
            </a>
            <a href="#" className="block text-sm text-ink mb-2.5">
              Careers
            </a>
            <a href="#" className="block text-sm text-ink mb-0">
              Contact
            </a>
          </div>
          <div>
            <b className="block text-[12.5px] font-bold text-slate uppercase tracking-wide mb-3.5">Legal</b>
            <a href="#" className="block text-sm text-ink mb-2.5">
              Privacy
            </a>
            <a href="#" className="block text-sm text-ink mb-0">
              Terms
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-6 flex justify-between mt-12 pt-6 border-t border-line text-[12.5px] text-slate flex-wrap gap-3">
        <span>&copy; 2026 Beam. All rights reserved.</span>
        <span>Beam partners with licensed payment providers for all transfers.</span>
      </div>
    </footer>
  );
}
