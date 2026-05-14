import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function HeroModel({scene}){
    const ref = useRef()

    const gltf = useGLTF('/models/scene.glb')

    useFrame(({clock}) => {
        if(!ref.current) return

        const t = clock.elapsedTime

        ref.current.position.y = Math.sin(t) * 0.2

        ref.current.rotation.y += 0.002
    })

    const visible = scene ===1

  return (
    <primitive
    ref = {ref}
    object = {gltf.scene}
    scale={1}
    position={[0,0,0]}
    visible={visible}
    />
  )
}

useGLTF.preload('/models/scene.glb')