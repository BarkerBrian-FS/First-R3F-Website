import './App.css'
import { Canvas  } from "@react-three/fiber"
import { ScrollControls, Html } from '@react-three/drei'

function App() {
  
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      camera={{ position: [0, 0, 6], fov: 60 }}
    >
      <ScrollControls pages={3} damping={0.2}>

        
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