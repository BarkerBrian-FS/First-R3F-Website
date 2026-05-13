import { useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { Vector3 } from 'three'
import { useRef } from 'react'

function CameraRig() {
  const { camera } = useThree()
  const scroll = useScroll()
  const target = useRef(new Vector3())

  useFrame(() => {
    const offset = scroll.offset

    target.current.set(
      Math.sin(offset * Math.PI * 2) * 3,
      offset * 2,
      6 - offset * 4
    )

    camera.position.lerp(target.current, 0.05)
    camera.lookAt(0, 0, 0)
  })

  return null
}

export default CameraRig