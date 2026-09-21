import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-extrabold tracking-wide text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br from-cyan-400 to-white text-sm text-black">
                BM
              </span>
              <span className="text-sm">AUTOMATE</span>
            </Link>
            <p className="mt-3.5 max-w-[260px] text-[14px] text-gray-400">
              Web, app and AI automation studio helping businesses build software that works.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-[14px] font-bold text-white">Services</h2>
            <ul className="space-y-2.5 text-[14px] text-gray-400">
              <li><Link href="/services/web-development" className="transition-colors hover:text-cyan-300">Web Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="transition-colors hover:text-cyan-300">Mobile App Development</Link></li>
              <li><Link href="/services/custom-software" className="transition-colors hover:text-cyan-300">Custom Software</Link></li>
              <li><Link href="/services/ai-automation" className="transition-colors hover:text-cyan-300">AI Automation</Link></li>
              <li><Link href="/services/ui-ux-design" className="transition-colors hover:text-cyan-300">UI/UX Design</Link></li>
              <li><Link href="/services/ecommerce-stores" className="transition-colors hover:text-cyan-300">E-commerce Stores</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-[14px] font-bold text-white">Company</h2>
            <ul className="space-y-2.5 text-[14px] text-gray-400">
              <li><Link href="/#work" className="transition-colors hover:text-cyan-300">Work</Link></li>
              <li><Link href="/#process" className="transition-colors hover:text-cyan-300">Process</Link></li>
              <li><Link href="/#testimonials" className="transition-colors hover:text-cyan-300">Testimonials</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-cyan-300">Blog</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-cyan-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-[14px] font-bold text-white">Get In Touch</h2>
            <ul className="space-y-2.5 text-[14px] text-gray-400">
              <li><a href="mailto:contact@bmautomate.com" className="transition-colors hover:text-cyan-300">contact@bmautomate.com</a></li>
              <li><a href="tel:+923432647498" className="transition-colors hover:text-cyan-300">+92 343 2647498</a></li>
              <li><a href="https://wa.me/923432647498" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan-300">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <p className="pt-6 text-center text-[13.5px] text-gray-500">
          © {year} BM Automate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
