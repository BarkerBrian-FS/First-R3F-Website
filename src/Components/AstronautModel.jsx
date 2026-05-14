import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Astronaut({ scene }) {
  const ref = useRef()

  const { scene: model } = useGLTF('/models/astronaut.glb')

  useFrame(({ clock }) => {
    const t = clock.elapsedTime

    if (!ref.current) return

    // always visible (NO hiding logic)
    ref.current.position.y = Math.sin(t) * 0.2
    ref.current.rotation.y += 0.002
  })

  // only scene-based scaling (safe)
  const scale = scene === 1 ? 1.2 : 0.8

  return (
    <primitive
      ref={ref}
      object={model}
      scale={scale}
      position={[0, -0.5, 0]}
    />
  )
}