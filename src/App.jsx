
import './App.css'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'


  function Box(){
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
   

    useFrame(({clock}) => {
      ref.current.position.y += Math.sin(clock.elapsedTime) * (hovered ? 0.8 : 0.3)
      ref.current.rotation.y += hovered ? 0.03: 0.01
    })
    return (
      <mesh ref={(ref)}>
        <boxGeometry args={[2,2,2]} />
        <meshStandardMaterial color='hotpink' />
      </mesh>
    )
  }

function App() {
  return (
    <>
      <div>
        <Canvas>
          <ambientLight intensity={.05} />
          <directionalLight position={[3,3,3]} intensity={1} />
          <Box />
          <OrbitControls enableDamping />
        </Canvas>
      </div>
    </>
  )
}

export default App
