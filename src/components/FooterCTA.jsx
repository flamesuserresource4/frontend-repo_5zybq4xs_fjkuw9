import { Mail, Phone, Globe } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer id="contact" className="relative border-t border-black/5 dark:border-white/10 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Let’s build something iconic</h3>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-sm">We collaborate with startups and global brands to design, develop, and launch standout products.</p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="mailto:hello@igloo.inc" className="inline-flex items-center gap-3 hover:underline">
                <Mail size={18} /> hello@igloo.inc
              </a>
              <a href="tel:+10000000000" className="inline-flex items-center gap-3 hover:underline">
                <Phone size={18} /> +1 (000) 000‑0000
              </a>
              <a href="#" className="inline-flex items-center gap-3 hover:underline">
                <Globe size={18} /> @igloo.inc
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-4 py-3 outline-none focus:ring-2 focus:ring-black/20" placeholder="Your name" />
              <input type="email" className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-4 py-3 outline-none focus:ring-2 focus:ring-black/20" placeholder="Email" />
              <input className="sm:col-span-2 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-4 py-3 outline-none focus:ring-2 focus:ring-black/20" placeholder="Company / Project" />
              <textarea rows="4" className="sm:col-span-2 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-4 py-3 outline-none focus:ring-2 focus:ring-black/20" placeholder="Tell us about your goals"></textarea>
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex items-center rounded-full bg-black px-6 py-3 text-white hover:bg-neutral-800 transition-colors">Request proposal</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} igloo.inc — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-300">Privacy</a>
            <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
