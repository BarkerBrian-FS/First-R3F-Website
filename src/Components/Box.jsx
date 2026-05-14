import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Box = ({position}) => {
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    useFrame(({ clock }) => {
    if (!ref.current) return

    const t = clock.elapsedTime * 0.3
    const baseX = position[0]
    const baseY = position[1]
    const rotationSpeed = hovered ? 0.015 : 0.002

    ref.current.position.y = baseY + Math.sin(t) * 0.15
    ref.current.position.x = baseX + Math.cos(t) * 0.1
    ref.current.rotation.y += rotationSpeed
  })
  return (
    <mesh
        ref={ref}
        position={position}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        >
        <boxGeometry args={[1, 1, 1]} />

        <meshStandardMaterial
        color={hovered ? '#ffb347' : '#ff4fd8'}
        emissive={hovered ? '#ff8800' : '#ff00ff'}
        emissiveIntensity={1.5}
        />
    </mesh>
  )
}

export default Box