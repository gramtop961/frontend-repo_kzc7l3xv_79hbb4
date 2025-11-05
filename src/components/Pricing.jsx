import { Check } from 'lucide-react';

function Plan({ name, price, description, highlights, featured }) {
  return (
    <div className={`relative flex flex-col rounded-2xl border ${
      featured ? 'border-white/20 bg-white/10' : 'border-white/10 bg-white/5'
    } p-6 shadow-xl shadow-black/10`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-900">Popular</span>
      )}
      <h3 className="text-white text-xl font-semibold">{name}</h3>
      <p className="mt-1 text-white/70 text-sm">{description}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-white/60">/mo</span>
      </div>
      <ul className="mt-6 space-y-3">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-3 text-sm text-white/80">
            <Check size={16} className="mt-0.5 text-green-400" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`mt-8 inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition ${
          featured ? 'bg-white text-gray-900 hover:bg-white/90' : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
        }`}
      >
        {featured ? 'Start free trial' : 'Get started'}
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free. Upgrade when you grow — no hidden fees.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Plan
            name="Starter"
            price="$0"
            description="Perfect for personal blogs and small projects"
            highlights={[
              'Unlimited posts',
              'Basic SEO',
              'Community support',
            ]}
          />

          <Plan
            name="Pro"
            price="$19"
            description="For growing teams who want monetization and insights"
            highlights={[
              'Subscriptions & paywalls',
              'Advanced analytics',
              'Custom domains',
              'Priority support',
            ]}
            featured
          />

          <Plan
            name="Business"
            price="$49"
            description="Scale with security and collaboration features"
            highlights={[
              'SSO & roles',
              'Backups & audit logs',
              'SLAs & support',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
