import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export const FocalObject = () => {
    const ref = useRef()

    useFrame(({clock})=> {
        const t = clock.elapsedTime

        if(!ref.current)return

        ref.current.rotation.y = t*0.2
        ref.current.rotation.x = Math.sin(t*0.03)*0.2
    })
  return (
    <mesh ref={ref} position={[0,0,0]}>
        <sphereGeometry args={[1.2,32.32]}/>
        <meshStandardMaterial 
        color='#6a7cff'
        emissive='#2a2aff'
        emissiveIntensity={2}/>
    </mesh>
  )
}

export default FocalObject