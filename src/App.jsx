import './App.css'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from '@react-three/drei'

function Box({ position }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(({ clock }) => {
    if (!ref.current) return

    const t = clock.elapsedTime * 0.3
    const baseX = position[0]
    const baseY = position[1]
    const rotationSpeed = hovered ? 0.02 : 0.05

    ref.current.position.y =
      baseY + Math.sin(t) * 0.15

    ref.current.position.x = 
      baseX + Math.cos(t) * 0.1

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
      <meshStandardMaterial color={hovered ? 'orange' : 'hotpink'} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas 
    style={{ width: '100vw', height: '100vh' }}
    camera={{position: [0,0,5]}}>
     <color attach="background" args={['#050816']} />
     <Stars
  radius={300}
  depth={80}
  count={8000}
  factor={6}
  saturation={0}
  fade={true}
  speed={0.3}
/>
    <fog attach="fog" args={['#070b1a', 12, 30]} />
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />

      <Box position={[-2, 0, 0]} />
      <Box position={[0, 0.2, -0.5]} />
      <Box position={[2, -0.2, 0.5]} />

      <OrbitControls enableDamping />
    </Canvas>
  )
}

export default App