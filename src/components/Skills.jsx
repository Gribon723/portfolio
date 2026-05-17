import { motion } from 'framer-motion'

const GROUPS = [
  {
    category: 'Data & Statistics',
    accent: 'teal',
    items: [
      'OLS Regression',
      'Pearson / Spearman Correlation',
      'K-Means Clustering',
      'Anomaly Detection',
      'Burden-of-Disease Scoring',
      'Min-Max Normalisation',
      'NumPy',
      'SciPy',
      'Pandas',
      'scikit-learn',
      'Epidemiological Data Literacy',
    ],
  },
  {
    category: 'Backend',
    accent: 'amber',
    items: [
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'Alembic',
      'PostgreSQL',
      'JWT Authentication',
      'bcrypt',
      'ReportLab',
      'pytest',
    ],
  },
  {
    category: 'Frontend',
    accent: 'teal',
    items: [
      'JavaScript (ES6+)',
      'React 19',
      'Vite',
      'Tailwind CSS',
      'D3.js',
      'Recharts',
      'Framer Motion',
      'Zustand',
      'Axios',
    ],
  },
  {
    category: 'Tools & Infrastructure',
    accent: 'amber',
    items: [
      'Git',
      'Linux CLI',
      'Vercel',
      'Render',
      'Supabase',
      'REST API Design',
      'Technical Writing',
    ],
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Skills() {
  return (
    <section id="skills" className="py-32 max-w-6xl mx-auto px-6">
      <motion.p {...fadeUp(0)} className="font-mono text-[#00C9B1] text-xs tracking-[0.25em] uppercase mb-4">
        Skills
      </motion.p>

      <motion.h2
        {...fadeUp(0.05)}
        className="text-4xl md:text-5xl font-black text-[#E2E8F0] tracking-tight mb-16"
      >
        What I work with
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {GROUPS.map(({ category, accent, items }, i) => (
          <motion.div
            key={category}
            {...fadeUp(0.08 + i * 0.05)}
            className="border border-[#1A2540] rounded-lg p-6 hover:border-[#94A3B8]/20 transition-colors duration-300"
          >
            <p
              className={`font-mono text-[10px] tracking-[0.25em] uppercase mb-5 ${
                accent === 'teal' ? 'text-[#00C9B1]' : 'text-[#F5A623]'
              }`}
            >
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map(item => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-xs font-mono text-[#64748B] bg-[#080D1A] border border-[#1A2540] rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
