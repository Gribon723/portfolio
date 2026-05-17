import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const LINKS = [
  {
    label: 'osorogribon@gmail.com',
    href: 'mailto:osorogribon@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gribon-mwebi-974892349',
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Gribon723',
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0D1426]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p {...fadeUp(0)} className="font-mono text-[#00C9B1] text-xs tracking-[0.25em] uppercase mb-4">
          Contact
        </motion.p>

        <motion.h2
          {...fadeUp(0.05)}
          className="text-4xl md:text-5xl font-black text-[#E2E8F0] tracking-tight mb-6"
        >
          Get in touch
        </motion.h2>

        <motion.p
          {...fadeUp(0.1)}
          className="text-[#94A3B8] text-lg max-w-xl leading-relaxed mb-12"
        >
          If you're building something where data meets real-world problems, I'd like to
          hear about it. I'm also open to roles where I can grow fast and ship real things.
        </motion.p>

        <motion.div {...fadeUp(0.15)} className="flex flex-col sm:flex-row gap-4 flex-wrap">
          {LINKS.map(({ label, href, external, icon }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-3 px-6 py-4 border border-[#1A2540] rounded-lg hover:border-[#00C9B1] transition-all duration-200"
            >
              <span className="text-[#00C9B1]">{icon}</span>
              <span className="font-mono text-sm text-[#94A3B8] group-hover:text-[#E2E8F0] transition-colors duration-200">
                {label}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          {...fadeUp(0.25)}
          className="mt-24 pt-8 border-t border-[#1A2540] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-xs text-[#64748B]">Gribon Osoro &nbsp;·&nbsp; 2025</p>
          <p className="font-mono text-xs text-[#64748B]">Built with React + Vite + Tailwind CSS</p>
        </motion.div>
      </div>
    </section>
  )
}
