import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
            <Sparkles size={14} /> New: AI-assisted publishing workflows
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Make your content a growth engine
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Blog Press helps modern SaaS teams publish, monetize, and analyze content with a polished, minimal design. Build authority, rank faster, and convert more visitors.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-white/90"
            >
              <Rocket size={18} /> Start free
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              See features
            </a>
          </div>
          <div className="mt-6 text-xs text-white/60">
            No credit card required • Cancel anytime
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-2xl">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
