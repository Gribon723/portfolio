import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, suffix = '', duration = 1800 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame = 0
    const steps = Math.ceil(duration / 16)
    const increment = target / steps

    const timer = setInterval(() => {
      frame += 1
      const next = Math.min(Math.floor(increment * frame), target)
      setCount(next)
      if (next >= target) clearInterval(timer)
    }, 16)

    return () => clearInterval(timer)
  }, [inView, target, duration])

  return (
    <span ref={ref} className="font-mono text-3xl md:text-4xl font-bold text-[#00C9B1]">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const STATS = [
  { value: 2000, suffix: '+', label: 'WHO indicators' },
  { value: 194, suffix: '', label: 'countries' },
  { value: 5, suffix: '', label: 'analysis modules' },
  { value: 23, suffix: '', label: 'automated tests' },
]

const MODULES = [
  { name: 'Explorer', desc: 'OLS trend regression: slope, R², p-value, and 5-year projections' },
  { name: 'Compare', desc: 'Multi-country chart overlay with burden-of-disease scoring' },
  { name: 'Correlate', desc: 'Pearson and Spearman correlation across all 194 countries' },
  { name: 'Cluster', desc: 'K-Means country grouping with interactive D3 world map' },
  { name: 'Anomaly', desc: 'Rolling-window detection with lagged baseline and 2σ threshold' },
  { name: 'Dashboard', desc: 'Save, annotate, and revisit any analysis; export as PDF' },
]

const TECH = [
  'FastAPI', 'Python', 'NumPy', 'SciPy', 'Pandas', 'scikit-learn',
  'SQLAlchemy', 'Alembic', 'PostgreSQL', 'ReportLab', 'pytest',
  'React 19', 'Vite', 'D3.js', 'Recharts', 'Framer Motion',
  'Zustand', 'Tailwind CSS', 'Vercel', 'Render', 'Supabase',
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function EpiLens() {
  return (
    <section id="work" className="py-32 bg-[#0D1426]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.p {...fadeUp(0)} className="font-mono text-[#00C9B1] text-xs tracking-[0.25em] uppercase mb-4">
          Featured Work
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <motion.h2
            {...fadeUp(0.05)}
            className="text-4xl md:text-5xl font-black text-[#E2E8F0] tracking-tight"
          >
            EpiLens
            <span className="text-[#00C9B1] ml-0.5 animate-pulse">_</span>
          </motion.h2>

          <motion.div {...fadeUp(0.1)} className="flex gap-3 flex-wrap">
            <a
              href="https://epilens.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#00C9B1] text-[#080D1A] font-semibold text-sm rounded hover:bg-[#00B8A2] transition-colors duration-200"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Gribon723"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[#1A2540] text-[#94A3B8] font-semibold text-sm rounded hover:border-[#00C9B1] hover:text-[#E2E8F0] transition-all duration-200"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.1)}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1A2540] rounded-lg overflow-hidden mb-16"
        >
          {STATS.map(({ value, suffix, label }, i) => (
            <div key={label} className="bg-[#0D1426] px-6 py-8 text-center">
              <Counter target={value} suffix={suffix} duration={1800 + i * 120} />
              <p className="font-mono text-[10px] text-[#64748B] mt-2 tracking-[0.15em] uppercase">
                {label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: description + modules */}
          <motion.div {...fadeUp(0.12)}>
            <p className="text-[#94A3B8] leading-relaxed mb-5">
              The WHO Global Health Observatory makes data for 194 countries publicly available.
              The problem is that doing anything real with it — spotting trends, comparing countries,
              finding correlations — requires knowing your way around Python or paying for an analytics
              platform.
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-10">
              EpiLens removes that barrier. Anyone can run real statistical analyses on global health
              data, save their work, annotate specific findings, and export a full PDF report. No
              setup required.
            </p>

            <p className="font-mono text-[10px] text-[#64748B] tracking-[0.25em] uppercase mb-5">
              Analysis Modules
            </p>
            <div className="space-y-3">
              {MODULES.map(({ name, desc }) => (
                <div key={name} className="flex gap-3 items-start">
                  <span className="text-[#00C9B1] font-mono text-xs mt-0.5 shrink-0">▸</span>
                  <p className="text-sm text-[#94A3B8]">
                    <span className="text-[#E2E8F0] font-medium">{name}</span>
                    {': '}{desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: terminal window */}
          <motion.div {...fadeUp(0.18)}>
            <div className="rounded-lg border border-[#1A2540] overflow-hidden h-full">
              <div className="bg-[#111827] px-4 py-3 flex items-center gap-2 border-b border-[#1A2540]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
                <span className="font-mono text-xs text-[#64748B] ml-2">
                  epilens-api &nbsp;·&nbsp; POST /stats/trend
                </span>
              </div>
              <div className="bg-[#080D1A] p-5 font-mono text-[13px] leading-8">
                <p className="text-[#64748B]">$ fetching indicator data...</p>
                <p className="text-[#64748B]">&nbsp;&nbsp;✓ WHOSIS_000001 loaded</p>
                <p className="text-[#64748B]">&nbsp;&nbsp;✓ 3 countries · 22 years of data</p>
                <br />
                <p className="text-[#64748B]">$ running OLS regression...</p>
                <br />
                <p className="text-[#E2E8F0]">Kenya</p>
                <p>
                  <span className="text-[#64748B]">&nbsp;&nbsp;slope&nbsp;</span>
                  <span className="text-[#00C9B1]">0.23</span>
                  <span className="text-[#64748B]">&nbsp;&nbsp;r²&nbsp;</span>
                  <span className="text-[#00C9B1]">0.87</span>
                  <span className="text-[#64748B]">&nbsp;&nbsp;p&nbsp;</span>
                  <span className="text-[#00C9B1]">&lt;0.001</span>
                </p>
                <p>
                  <span className="text-[#64748B]">&nbsp;&nbsp;trend&nbsp;</span>
                  <span className="text-[#F5A623]">↗ significant increase</span>
                </p>
                <br />
                <p className="text-[#E2E8F0]">Nigeria</p>
                <p>
                  <span className="text-[#64748B]">&nbsp;&nbsp;slope&nbsp;</span>
                  <span className="text-[#00C9B1]">0.11</span>
                  <span className="text-[#64748B]">&nbsp;&nbsp;r²&nbsp;</span>
                  <span className="text-[#00C9B1]">0.72</span>
                  <span className="text-[#64748B]">&nbsp;&nbsp;p&nbsp;</span>
                  <span className="text-[#00C9B1]">0.003</span>
                </p>
                <p>
                  <span className="text-[#64748B]">&nbsp;&nbsp;trend&nbsp;</span>
                  <span className="text-[#F5A623]">↗ moderate increase</span>
                </p>
                <br />
                <p className="text-[#64748B]">✓ analysis complete &nbsp;·&nbsp; 21ms</p>
                <p className="text-[#64748B]">✓ saved to dashboard</p>
                <p className="text-[#00C9B1]">
                  $&nbsp;<span className="animate-pulse">▋</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech stack chips */}
        <motion.div {...fadeUp(0.22)}>
          <p className="font-mono text-[10px] text-[#64748B] tracking-[0.25em] uppercase mb-4">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {TECH.map(t => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono text-[#94A3B8] bg-[#080D1A] border border-[#2A3550] rounded hover:border-[#00C9B1] hover:text-[#00C9B1] transition-colors duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Git discipline callout */}
        <motion.div
          {...fadeUp(0.28)}
          className="mt-10 inline-flex items-center gap-3 px-4 py-3 border border-[#1A2540] rounded-lg"
        >
          <span className="text-[#F5A623] font-mono text-xs">git</span>
          <span className="text-[#64748B] font-mono text-xs">
            35+ atomic commits &nbsp;·&nbsp; 8 branches &nbsp;·&nbsp; 11 merged PRs &nbsp;·&nbsp; conventional commit messages throughout
          </span>
        </motion.div>
      </div>
    </section>
  )
}
