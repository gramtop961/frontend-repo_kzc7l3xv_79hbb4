import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: 'https://www.blog-press.site/en', external: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/10">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500"></div>
              <span className="font-semibold tracking-tight text-white">Blog Press</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
              <a
                href="#pricing"
                className="rounded-xl bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
              >
                Get Started
              </a>
            </nav>

            <button
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 p-2 text-white"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                ))}
                <a
                  href="#pricing"
                  className="rounded-xl bg-white text-gray-900 px-4 py-2 text-center font-medium"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
