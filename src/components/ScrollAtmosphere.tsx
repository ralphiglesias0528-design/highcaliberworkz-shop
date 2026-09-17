import { useEffect, useState } from 'react'
import { asset } from '#/lib/asset'

const PANELS = [
  {
    src: asset('/images/bg-el-gordo-ninja.png'),
    alt: 'El Gordo Ninja tee atmosphere',
  },
  {
    src: asset('/images/snacks-plans-front.png'),
    alt: 'Snacks Plans front tee atmosphere',
  },
  {
    src: asset('/images/snacks-plans-back.png'),
    alt: 'Snacks Plans back tee atmosphere',
  },
] as const

function panelOpacity(progress: number, index: number, count: number): number {
  // Soft crossfade across scroll: each panel peaks in its third of the page
  const center = (index + 0.5) / count
  const spread = 0.42
  const d = Math.abs(progress - center)
  const raw = 1 - d / spread
  return Math.max(0, Math.min(1, raw))
}

/**
 * Fixed ambient mockup layer — three tee crops fade through as you scroll.
 * Pointer-events none; low opacity + vignette so UI stays readable.
 */
export function ScrollAtmosphere() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const doc = document.documentElement
      const max = Math.max(1, doc.scrollHeight - window.innerHeight)
      setProgress(Math.min(1, Math.max(0, window.scrollY / max)))
    }
    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      className="scroll-atmosphere pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {PANELS.map((panel, i) => {
        const o = panelOpacity(progress, i, PANELS.length)
        return (
          <div
            key={panel.src}
            className="absolute inset-0 transition-opacity duration-300 ease-out"
            style={{ opacity: o * 0.28 }}
          >
            <img
              src={panel.src}
              alt=""
              className="h-full w-full object-cover object-center"
              style={{
                filter: 'grayscale(15%) contrast(1.05) brightness(0.65)',
                transform: `scale(${1.05 + i * 0.02}) translateY(${(progress - 0.5) * -4}%)`,
              }}
            />
          </div>
        )
      })}
      {/* Industrial vignette + charcoal wash so text stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.55)_55%,rgba(8,8,8,0.92)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/70" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(201,162,39,0.03),transparent_30%,transparent_70%,rgba(225,29,46,0.04))]" />
    </div>
  )
}
