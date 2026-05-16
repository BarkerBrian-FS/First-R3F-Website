import './App.css'
import { Canvas } from "@react-three/fiber"
import { ScrollControls } from '@react-three/drei'
import CameraRig from './Components/CameraRig'
import Scene from './Components/Scene'
import HtmlSection from './Components/HtmlSection'

function App() {
  
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ScrollControls pages={3} damping={0.15} >

      <CameraRig />

      <Scene  />

      <HtmlSection />
        
      </ScrollControls>
    </Canvas>
  )
}

export default App