import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const EDUCATION = [
  {
    school: 'University of Kirinyaga',
    detail: 'BSc Epidemiology & Medical Statistics · 2024–Present',
  },
  {
    school: 'ALX Africa',
    detail: 'CyberSecurity Foundations · Completed 2024',
  },
  {
    school: 'freeCodeCamp & The Odin Project',
    detail: 'JavaScript · Self-directed curriculum',
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 max-w-6xl mx-auto px-6">
      <motion.p {...fadeUp(0)} className="font-mono text-[#00C9B1] text-xs tracking-[0.25em] uppercase mb-12">
        About
      </motion.p>

      <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
        {/* Photo placeholder */}
        <motion.div
          {...fadeUp(0.05)}
          className="w-full aspect-[3/4] max-w-[220px] rounded-lg border border-[#1A2540] bg-[#0D1426] flex flex-col items-center justify-center gap-3 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'linear-gradient(#1A2540 1px, transparent 1px), linear-gradient(90deg, #1A2540 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <span className="relative font-mono text-6xl font-bold text-[#00C9B1] opacity-30 select-none">
            GO
          </span>
          <span className="relative font-mono text-[10px] text-[#64748B] tracking-[0.2em] uppercase">
            Photo coming
          </span>
        </motion.div>

        {/* Text */}
        <div>
          <motion.h2
            {...fadeUp(0.08)}
            className="text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-8 tracking-tight leading-snug"
          >
            I study epidemiology
            <br />
            <span className="text-[#00C9B1]">and I build software.</span>
          </motion.h2>

          <motion.div
            {...fadeUp(0.15)}
            className="space-y-5 text-[#94A3B8] leading-relaxed text-base mb-10"
          >
            <p>
              Those two things fit together better than you'd expect. Health data is exactly
              the kind of problem that needs both domains. The data exists, the statistics are
              real, and the people who need the insights aren't always the ones who know Python.
            </p>
            <p>
              EpiLens started from that gap. I wanted to know if I could build something that
              made WHO global health data actually usable by someone without a data science
              background. I started from a standing start, no React, no FastAPI, no PostgreSQL,
              and shipped it in two weeks.
            </p>
            <p>
              I'm in my first year at the University of Kirinyaga studying for a BSc in
              Epidemiology and Medical Statistics. The software side is self-taught: freeCodeCamp,
              The Odin Project, and then just building real things.
            </p>
            <p className="text-[#64748B]">
              I'm at the start of this. I'm also moving fast.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div {...fadeUp(0.22)} className="space-y-4">
            <p className="font-mono text-[10px] text-[#64748B] tracking-[0.25em] uppercase mb-5">
              Education
            </p>
            {EDUCATION.map(({ school, detail }) => (
              <div key={school} className="flex gap-4 items-start">
                <span className="text-[#00C9B1] font-mono text-xs mt-0.5">▸</span>
                <div>
                  <p className="text-[#E2E8F0] font-medium text-sm">{school}</p>
                  <p className="text-[#64748B] font-mono text-xs mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
