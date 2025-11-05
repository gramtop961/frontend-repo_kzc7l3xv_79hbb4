import { CreditCard, BarChart, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning editor',
    desc: 'Craft posts with an elegant, distraction-free editor. AI prompts help you outline, write, and optimize titles in seconds.',
  },
  {
    icon: CreditCard,
    title: 'Built-in monetization',
    desc: 'Paywalls, coupons, and Stripe subscriptions are ready from day one so your content can start selling sooner.',
  },
  {
    icon: BarChart,
    title: 'SEO + analytics',
    desc: 'Automatic sitemaps, structured data, and real-time insights tell you what resonates and where to double down.',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'SSO, roles & permissions, backups, and audit trails keep your brand and readers protected at scale.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Everything you need to grow</h2>
          <p className="mt-3 text-white/70">
            A modern toolkit for publishing, monetization, and insights — thoughtfully designed so you can move faster.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 transition hover:translate-y-[-2px] hover:bg-white/[0.07]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 ring-1 ring-white/15">
                <f.icon className="text-white" size={18} />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
