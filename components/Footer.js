export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2 font-extrabold tracking-wide text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br from-cyan-400 to-white text-sm text-black">
                BM
              </span>
              <span className="text-sm">AUTOMATE</span>
            </a>
            <p className="mt-3.5 max-w-[260px] text-[14px] text-gray-400">
              Web, app and AI automation studio helping businesses build software that works.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-[14px] font-bold text-white">Services</h4>
            <ul className="space-y-2.5 text-[14px] text-gray-400">
              <li><a href="#services" className="transition-colors hover:text-cyan-300">Web Platforms</a></li>
              <li><a href="#services" className="transition-colors hover:text-cyan-300">Mobile Apps</a></li>
              <li><a href="#services" className="transition-colors hover:text-cyan-300">Custom Software</a></li>
              <li><a href="#services" className="transition-colors hover:text-cyan-300">AI Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[14px] font-bold text-white">Company</h4>
            <ul className="space-y-2.5 text-[14px] text-gray-400">
              <li><a href="#work" className="transition-colors hover:text-cyan-300">Work</a></li>
              <li><a href="#process" className="transition-colors hover:text-cyan-300">Process</a></li>
              <li><a href="#testimonials" className="transition-colors hover:text-cyan-300">Testimonials</a></li>
              <li><a href="#contact" className="transition-colors hover:text-cyan-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[14px] font-bold text-white">Get In Touch</h4>
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
