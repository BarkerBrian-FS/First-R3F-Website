import { useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { Vector3 } from 'three'
import { useRef } from 'react'

function CameraRig() {
  const { camera } = useThree()
  const scroll = useScroll()

  const target = useRef(new Vector3())
  const current = useRef(new Vector3())

  useFrame(() => {
    const t = scroll.offset

    if (t < 0.33) {
      target.current.set(0, 0, 6)
    } 
    else if (t < 0.66) {
      target.current.set(
        Math.sin(t * 10) * 2,
        Math.cos(t * 5) * 1,
        5
      )
    } 
    else {
      target.current.set(0, 0, 3)
    }

    current.current.lerp(target.current, 0.05)

    camera.position.copy(current.current)
    camera.lookAt(0, 0, 0)
  })

  return null
}

export default CameraRig