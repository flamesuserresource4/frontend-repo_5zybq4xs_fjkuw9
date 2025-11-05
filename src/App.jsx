import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ServicesGrid from './components/ServicesGrid';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero3D />
        <section id="work" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-10">
            <p className="text-xs tracking-widest uppercase text-neutral-500 dark:text-neutral-400">Selected work</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">Impact through craft</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1,2,3,4].map((i) => (
              <a key={i} href="#" className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    alt={`Project ${i}`}
                    src={`https://images.unsplash.com/photo-1520975922131-c0feeb7b2c83?q=80&w=1600&auto=format&fit=crop`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Project {i}</h3>
                    <span className="text-xs rounded-full border px-2 py-1 border-black/10 dark:border-white/15">Case study</span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Product design, development, and 3D interactions for a fast‑growing brand.</p>
                </div>
              </a>
            ))}
          </div>
        </section>
        <ServicesGrid />
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;
