import { motion } from 'framer-motion'
import GlobeCanvas from './GlobeCanvas'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Radial glow behind globe */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle at 60% 40%, #00C9B1 0%, transparent 65%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-[1fr_auto] gap-12 items-center">
        {/* Left: text */}
        <div>
          <motion.p
            {...fadeUp(0)}
            className="font-mono text-[#00C9B1] text-xs tracking-[0.25em] uppercase mb-6"
          >
            Full-Stack Developer &amp; Epidemiologist
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-7xl md:text-8xl font-black tracking-tight text-[#E2E8F0] leading-none"
          >
            GRIBON
          </motion.h1>
          <motion.h1
            {...fadeUp(0.15)}
            className="text-7xl md:text-8xl font-black tracking-tight text-[#00C9B1] leading-none mb-10"
          >
            OSORO
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="text-lg md:text-xl text-[#94A3B8] max-w-lg leading-relaxed mb-3"
          >
            I built{' '}
            <span className="text-[#E2E8F0] font-medium">EpiLens</span> in{' '}
            <span className="text-[#F5A623] font-medium">two weeks</span>, learning
            React and FastAPI from scratch while shipping it.
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            className="font-mono text-xs text-[#64748B] max-w-lg mb-10 tracking-wide"
          >
            2,000+ WHO indicators &nbsp;·&nbsp; 194 countries &nbsp;·&nbsp; 5 statistical modules &nbsp;·&nbsp; fully deployed
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex gap-3 flex-wrap">
            <a
              href="#work"
              className="px-6 py-3 bg-[#00C9B1] text-[#080D1A] font-semibold text-sm rounded hover:bg-[#00B8A2] transition-colors duration-200"
            >
              See the Work
            </a>
            <a
              href="https://epilens.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#1A2540] text-[#94A3B8] text-sm font-semibold rounded hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-200"
            >
              EpiLens Live
            </a>
            <a
              href="https://github.com/Gribon723"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#1A2540] text-[#94A3B8] text-sm font-semibold rounded hover:border-[#E2E8F0] hover:text-[#E2E8F0] transition-all duration-200"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Right: globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.3 }}
          className="hidden md:flex items-center justify-center"
        >
          <GlobeCanvas size={420} />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="font-mono text-[10px] text-[#64748B] tracking-[0.3em] uppercase">Scroll</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#64748B] to-transparent"
        />
      </motion.div>
    </section>
  )
}
