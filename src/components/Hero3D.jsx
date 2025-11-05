import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/9lYGJIEB8iD4o3tH/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient vignette and top fade, don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-neutral-900/60 dark:via-neutral-900/10 dark:to-neutral-900/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-4 pb-24 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm tracking-widest text-neutral-600 dark:text-neutral-300 uppercase">Design • Product • Engineering</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-tight">
          Building bold digital experiences
        </h1>
        <p className="mt-4 max-w-xl text-neutral-600 dark:text-neutral-300">
          We partner with ambitious brands to craft standout products, websites, and immersive 3D moments.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white hover:bg-neutral-800 transition-colors">
            Start a project
            <ArrowRight size={18} />
          </a>
          <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-5 py-3 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}
