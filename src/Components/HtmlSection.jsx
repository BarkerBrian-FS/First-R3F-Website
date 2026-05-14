import { Html, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v))
}

function range(v, a, b) {
  return clamp((v - a) / (b - a), 0, 1)
}

function HtmlSections() {
  const scroll = useScroll()

  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()

  useFrame(() => {
    const t = scroll.offset

    const o1 = 1 - range(t, 0.2, 0.4)
    const o2 = range(t, 0.2, 0.4) - range(t, 0.6, 0.8)
    const o3 = range(t, 0.6, 0.8)

    if (ref1.current) {
      ref1.current.style.opacity = o1
      ref1.current.style.transform = `translateY(${(1 - o1) * 40}px)`
    }

    if (ref2.current) {
      ref2.current.style.opacity = o2
      ref2.current.style.transform = `translateY(${(1 - o2) * 40}px)`
    }

    if (ref3.current) {
      ref3.current.style.opacity = o3
      ref3.current.style.transform = `translateY(${(1 - o3) * 40}px)`
    }
  })

  return (
    <Html fullscreen>
      <div className="sections">

        <section ref={ref1} className="panel">
          <h1>Welcome to Space</h1>
          <p>Cinematic intro</p>
        </section>

        <section ref={ref2} className="panel">
          <h1>Floating Objects</h1>
          <p>Movement phase</p>
        </section>

        <section ref={ref3} className="panel">
          <h1>Core Focus</h1>
          <p>Final reveal</p>
        </section>

      </div>
    </Html>
  )
}

export default HtmlSections