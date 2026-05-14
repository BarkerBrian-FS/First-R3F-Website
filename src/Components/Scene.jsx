import { Stars } from '@react-three/drei'
import Box from './Box'
import CameraRig from './Components/CameraRig'
import FocalObject from './Components/FocalObject'


const Scene = () => {

  return (
    <div>
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
    </div>
    
  )
}

export default Scene