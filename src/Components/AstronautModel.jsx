import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Astronaut() {
  const ref = useRef()

  const { scene }  = useGLTF('/Models/astronaut.glb')

  useFrame(({ clock }) => {
    const t = clock.elapsedTime

    if (!ref.current) return

    // always visible (NO hiding logic)
    ref.current.position.y = Math.sin(t * 0.8) * 0.15
    ref.current.rotation.y += 0.003
    ref.current.rotation.z = Math.sin(t * 0.5) * 0.05
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.2}
      position={[0, -0.5, 0]}
    />
  )
}