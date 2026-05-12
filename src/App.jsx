import './App.css'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'

function Box({ position }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(({ clock }) => {
    if (!ref.current) return

    const t = clock.elapsedTime * 0.3

    ref.current.position.y =
      position[1] + Math.sin(t) * (hovered ? 0.3 : 0.15)

    ref.current.position.x = 
      position[0] + Math.cos(t) * 0.1

    ref.current.rotation.y += hovered ? 0.02 : 0.005
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
    camera={{position: [0,0,5]}}
    fog={{near:1, far: 8, color:'#000000'}}>
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />

      <Box position={[-2, 0, 0]} />
      <Box position={[0, 0, 0]} />
      <Box position={[2, 0, 0]} />

      <OrbitControls enableDamping />
    </Canvas>
  )
}

export default App