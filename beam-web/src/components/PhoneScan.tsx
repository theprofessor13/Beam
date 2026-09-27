import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';

type Phase = 'scanning' | 'detected' | 'success';

const DURATIONS: Record<Phase, number> = {
  scanning: 2200,
  detected: 1700,
  success: 1900,
};

const NEXT: Record<Phase, Phase> = {
  scanning: 'detected',
  detected: 'success',
  success: 'scanning',
};

export function PhoneScan() {
  const [phase, setPhase] = useState<Phase>('scanning');

  useEffect(() => {
    const t = setTimeout(() => setPhase((p) => NEXT[p]), DURATIONS[phase]);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <div className="relative w-[260px] h-[540px] bg-ink rounded-[38px] p-2.5 shadow-[0_40px_80px_-20px_rgba(16,21,43,0.35),0_0_0_1px_#262c50]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-5 bg-ink rounded-b-2xl z-10" />
      <div className="relative w-full h-full bg-[#0A0D1E] rounded-[28px] overflow-hidden">
        <p className="text-center text-white font-display text-xs font-semibold pt-7">Scan to Pay</p>

        <div className="relative w-[160px] h-[160px] mx-auto mt-7">
          {/* fake QR pattern, only visible while scanning */}
          <AnimatePresence>
            {phase === 'scanning' && (
              <motion.div
                key="qr"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="absolute inset-4 rounded-md"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(90deg, #fff 0 5px, transparent 5px 10px), repeating-linear-gradient(0deg, #fff 0 5px, transparent 5px 10px)',
                  backgroundBlendMode: 'screen',
                }}
              />
            )}
          </AnimatePresence>

          {/* viewfinder corners: mint while scanning/detected, fade once success shows checkmark instead */}
          <motion.div
            animate={{ opacity: phase === 'success' ? 0.25 : 1, scale: phase === 'detected' ? 0.94 : 1 }}
            transition={{ duration: 0.4 }}
          >
            {(
              [
                ['tl', 'top-0 left-0 border-t-[3.5px] border-l-[3.5px] rounded-tl-[10px]'],
                ['tr', 'top-0 right-0 border-t-[3.5px] border-r-[3.5px] rounded-tr-[10px]'],
                ['bl', 'bottom-0 left-0 border-b-[3.5px] border-l-[3.5px] rounded-bl-[10px]'],
                ['br', 'bottom-0 right-0 border-b-[3.5px] border-r-[3.5px] rounded-br-[10px]'],
              ] as const
            ).map(([key, cls]) => (
              <span key={key} className={`absolute w-[26px] h-[26px] border-mint ${cls}`} />
            ))}
          </motion.div>

          {phase === 'scanning' && (
            <motion.span
              className="absolute left-1 right-1 h-[2px] bg-gradient-to-r from-transparent via-mint to-transparent shadow-[0_0_10px_2px_rgba(23,217,163,0.8)]"
              animate={{ top: [6, 150, 6] }}
              transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
            />
          )}

          <AnimatePresence>
            {phase === 'success' && (
              <motion.div
                key="check"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-mint/15 flex items-center justify-center">
                  <Check size={30} className="text-mint" strokeWidth={3} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-center text-[11.5px] text-[#8890b0] mt-6">
          {phase === 'scanning' && 'Align QR code within frame'}
          {phase === 'detected' && 'Recipient verified'}
          {phase === 'success' && 'Payment beamed'}
        </p>

        <AnimatePresence>
          {(phase === 'detected' || phase === 'success') && (
            <motion.div
              key="card"
              initial={{ opacity: 0, y: 16, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 10, x: '-50%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-8 left-1/2 w-[200px] bg-white rounded-2xl px-3.5 py-3 flex items-center gap-2.5 shadow-[0_16px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="w-[30px] h-[30px] rounded-full bg-cobalt-10 text-cobalt font-display font-bold text-[11px] flex items-center justify-center">
                TO
              </div>
              <div>
                <b className="block text-xs text-ink">Tunde Okafor</b>
                <span className="text-[10px] text-slate font-mono">
                  {phase === 'success' ? '₦25,000 · Beamed' : 'GTBank •••• 4821'}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
