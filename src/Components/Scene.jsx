import { Stars, Environment } from '@react-three/drei'
import Box from './Box'
import Astronaut from './AstronautModel'
import { EffectComposer, Bloom} from '@react-three/postprocessing'


const Scene = () => {

  return (
    <>
        
      <color attach="background" args={['#0b1020']} />
        
      <Environment preset="night" /> 
      <Stars
        radius={200}
        depth={40}
        count={4000}
        factor={3}
        saturation={0}
      />
      
      <EffectComposer>
        <Bloom intensity={ 0.5 } luminanceThreshold={ 0.4 }/>
      </EffectComposer>
        
      <fog attach="fog" args={['#0b1020', 20, 60]} />
      <ambientLight intensity={.6} color={'#ffffff'} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color='#ffffff' />
      <directionalLight position={[-5, 2, -5]} intensity={0.5} color="#c7d2ff" />
      <Astronaut  />
        
      <Box position={[-3, 1, -1]} />
      <Box position={[3, -1, 1]} />
      <Box position={[0, 2, -2]} />
    </>
    
  )
}

export default Scene