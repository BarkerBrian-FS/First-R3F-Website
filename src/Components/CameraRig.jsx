import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'
import { useRef } from 'react'

function CameraRig() {
  const { camera } = useThree()
  const target = useRef(new Vector3())

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 0.2

    target.current.set(
      Math.sin(t) * 0.5,
      Math.cos(t * 0.3) * 0.3,
      5
    )

    camera.position.lerp(target.current, 0.05)
    camera.lookAt(0, 0, 0)
  })

  return null
}

export default CameraRig