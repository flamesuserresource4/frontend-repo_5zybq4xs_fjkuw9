import { Rocket, Star, Settings, Home } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Product Design',
    desc: 'From discovery to delivery — strategy, UX, and UI that convert and delight.',
  },
  {
    icon: Settings,
    title: 'Engineering',
    desc: 'Full‑stack web and mobile applications, optimized for speed and scale.',
  },
  {
    icon: Star,
    title: 'Brand & Creative',
    desc: 'Visual identity, motion, and content to make your brand unmistakable.',
  },
  {
    icon: Home,
    title: '3D & Interactive',
    desc: 'Spline, WebGL, and real‑time experiences that feel alive and responsive.',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs tracking-widest uppercase text-neutral-500 dark:text-neutral-400">What we do</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">End‑to‑end capabilities</h2>
        </div>
        <a href="#contact" className="hidden sm:inline-flex rounded-full border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 border-black/10 dark:border-white/15">Get in touch</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-5 hover:shadow-xl hover:shadow-black/5 transition-all">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
              <Icon size={18} />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
