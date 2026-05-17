import { useEffect, useRef } from 'react'

const POINTS = [
  // Africa
  [-1.3, 36.8],
  [6.5, 3.4],
  [-26.2, 28.0],
  [30.1, 31.2],
  [9.0, 38.7],
  [-4.3, 15.3],
  [14.7, -17.4],
  // Europe
  [51.5, -0.1],
  [48.9, 2.3],
  [52.5, 13.4],
  [41.9, 12.5],
  [55.7, 37.6],
  [59.9, 10.7],
  // Americas
  [40.7, -74.0],
  [34.1, -118.2],
  [19.4, -99.1],
  [-23.5, -46.6],
  [-34.6, -58.4],
  [43.7, -79.4],
  [4.7, -74.1],
  // Asia
  [39.9, 116.4],
  [28.6, 77.2],
  [35.7, 139.7],
  [1.3, 103.8],
  [25.2, 55.3],
  [23.7, 90.4],
  [-6.2, 106.8],
  // Oceania
  [-33.9, 151.2],
  [-36.9, 174.8],
]

export default function GlobeCanvas({ size = 420 }) {
  const canvasRef = useRef(null)
  const frameRef = useRef(null)
  const rotRef = useRef(20)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.scale(dpr, dpr)

    const cx = size / 2
    const cy = size / 2
    const r = size * 0.43

    function project(lat, lng) {
      const latR = (lat * Math.PI) / 180
      const lngR = ((lng + rotRef.current) * Math.PI) / 180
      return {
        x: cx + r * Math.cos(latR) * Math.cos(lngR),
        y: cy - r * Math.sin(latR),
        z: Math.cos(latR) * Math.sin(lngR),
      }
    }

    function draw() {
      ctx.clearRect(0, 0, size, size)

      // Globe outline
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0, 201, 177, 0.10)'
      ctx.lineWidth = 0.8
      ctx.stroke()

      // Latitude rings
      ;[-60, -30, 0, 30, 60].forEach(lat => {
        const latR = (lat * Math.PI) / 180
        const ringY = cy - r * Math.sin(latR)
        const ringRx = r * Math.cos(latR)
        const ringRy = ringRx * 0.1
        if (ringRx > 1) {
          ctx.beginPath()
          ctx.ellipse(cx, ringY, ringRx, ringRy, 0, 0, Math.PI * 2)
          ctx.strokeStyle = 'rgba(0, 201, 177, 0.04)'
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })

      const pts = POINTS.map(([lat, lng]) => project(lat, lng))

      // Connecting lines between nearby visible points
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i]
          const b = pts[j]
          if (a.z < 0 || b.z < 0) continue
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist > r * 0.6) continue
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(0, 201, 177, ${Math.min(a.z, b.z) * 0.12})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }

      // Dots with glow
      pts.forEach(({ x, y, z }) => {
        if (z < -0.15) return
        const alpha = Math.max(0.08, Math.min(1, (z + 0.15) / 1.15))
        const dotR = Math.max(1.2, alpha * 3.2)

        const grd = ctx.createRadialGradient(x, y, 0, x, y, dotR * 5)
        grd.addColorStop(0, `rgba(0, 201, 177, ${alpha * 0.3})`)
        grd.addColorStop(1, 'rgba(0, 201, 177, 0)')
        ctx.beginPath()
        ctx.arc(x, y, dotR * 5, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, dotR, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 201, 177, ${alpha * 0.9})`
        ctx.fill()
      })

      rotRef.current = (rotRef.current + 0.12) % 360
      frameRef.current = requestAnimationFrame(draw)
    }

    frameRef.current = requestAnimationFrame(draw)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [size])

  return <canvas ref={canvasRef} />
}
