
import { useRef, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { Reveal } from '../../components/Reveal';

type Status = 'idle' | 'loading' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function CTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const honeypot = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === 'loading') return;

    // Ignore automated submissions that fill the hidden field.
    if (honeypot.current?.value) {
      setStatus('success');
      return;
    }

    const value = email.trim();

    if (!EMAIL_RE.test(value)) {
      setStatus('error');
      setMessage('Enter a valid email address.');
      return;
    }

    // Local demonstration only: no API calls or data storage.
    setStatus('loading');

    await new Promise((resolve) => setTimeout(resolve, 700));

    setStatus('success');
  }

  return (
    <section id="download" className="py-[88px]">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-xl3 p-[60px_28px] sm:p-[60px_44px] text-center text-white bg-gradient-to-br from-cobalt to-cobalt-dark">
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.16), transparent 55%)',
              }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <h2 className="relative font-display text-[clamp(26px,3.6vw,34px)] text-white">
              Your next payment could take three seconds.
            </h2>

            <p className="relative mt-3 text-white/85">
              Link your bank once. Beam every payment after.
            </p>

            <div className="relative mx-auto mt-8 w-full max-w-[470px]">
              <AnimatePresence mode="wait" initial={false}>
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    role="status"
                    className="flex items-start gap-3 rounded-2xl border-[1.5px] border-white/30 bg-white/10 p-4 text-left text-white"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 320,
                        damping: 16,
                        delay: 0.1,
                      }}
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint text-ink"
                    >
                      <Check size={16} strokeWidth={3} />
                    </motion.span>

                    <div>
                      <b className="block font-display text-[15px]">
                        You&rsquo;re on the list.
                      </b>
                      <span className="text-[13px] text-white/80">
                        Thanks for your interest in Beam! Stay tuned for
                        early access.
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-2.5 sm:flex-row"
                  >
                    <label htmlFor="cta-email" className="sr-only">
                      Email address
                    </label>

                    <input
                      id="cta-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@email.com"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);

                        if (status === 'error') {
                          setStatus('idle');
                          setMessage('');
                        }
                      }}
                      aria-invalid={status === 'error'}
                      aria-describedby="cta-status"
                      className="h-12 min-w-0 flex-1 rounded-xl border-[1.5px] border-transparent bg-white px-4 text-[14.5px] text-ink outline-none transition-colors placeholder:text-slate-2 focus:border-ink"
                    />

                    <input
                      ref={honeypot}
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="hidden"
                    />

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-ink px-5 font-display text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-[0.97] disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Joining…
                        </>
                      ) : (
                        <>
                          Join the waitlist
                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              <p
                id="cta-status"
                role={status === 'error' ? 'alert' : undefined}
                className={`mt-2.5 min-h-[18px] text-[12.5px] ${
                  status === 'error'
                    ? 'font-semibold text-white'
                    : 'text-white/75'
                }`}
              >
                {status === 'error'
                  ? message
                  : status === 'success'
                    ? ''
                    : 'Free to join. One email when early access opens, nothing else.'}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}