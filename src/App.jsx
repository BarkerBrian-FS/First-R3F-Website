import './App.css'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars, ScrollControls, Html } from '@react-three/drei'
import CameraRig from './Components/CameraRig'
import FocalObject from './Components/FocalObject'

function Box({ position }) {
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

function App() {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      camera={{ position: [0, 0, 6], fov: 60 }}
    >
      <ScrollControls pages={3} damping={0.2}>

        <CameraRig />

        <color attach="background" args={['#050816']} />

        <Stars
          radius={300}
          depth={80}
          count={8000}
          factor={6}
          saturation={0}
          fade
        />

        <fog attach="fog" args={['#070b1a', 10, 30]} />

        <ambientLight intensity={0.25} color='#6a7cff' />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color='#ff4fd8' />

        <FocalObject />

        <Box position={[-3, 1, -1]} />
        <Box position={[3, -1, 1]} />
        <Box position={[0, 2, -2]} />

        <Html fullscreen>
          <div className='hero'>
            <h1>Welcome to Space</h1>
            <p>Scroll to explore the universe</p>
          </div>
        </Html>
        
      </ScrollControls>
    </Canvas>
  )
}

export default App