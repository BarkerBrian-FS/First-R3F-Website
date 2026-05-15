import { Stars } from '@react-three/drei'
import Box from './Box'
import Astronaut from './AstronautModel'


const Scene = () => {

  return (
    <>
        
      <color attach="background" args={['#050816']} />
        
      <Stars
        radius={400}
        depth={80}
        count={8000}
        factor={6}
        saturation={0}
      />
        
      <fog attach="fog" args={['#070b1a', 25, 80]} />
        
      <directionalLight position={[8, 10, 5]} intensity={2} castShadow />
      <directionalLight position={[-8, 2, -6]} intensity={1.5} color="#ff4fd8" />
      <pointLight position={[0, -5, 5]} intensity={0.8} color="#ffffff" />
      <Astronaut  />
        
      <Box position={[-3, 1, -1]} />
      <Box position={[3, -1, 1]} />
      <Box position={[0, 2, -2]} />
    </>
    
  )
}

export default Scene