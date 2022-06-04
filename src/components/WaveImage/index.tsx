import { FC, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { Scroll, ScrollControls } from '@react-three/drei'

export const useTextures = (urls: string[]) => {
  const textures = useLoader(THREE.TextureLoader, urls)
  textures.forEach((t) => {
    // Necessary to get correct colors with sRGB outputEncoding!
    // t.encoding = THREE.LinearEncoding
  })
  return textures
}

interface WaveImageProps {
  imageUrls: string[]
}

export const WaveImage: FC<WaveImageProps> = ({ imageUrls }) => {
  //   const waveShaderMaterialRef = useRef<THREE.ShaderMaterial>()
  const [uTime, setUTime] = useState<number>()

  useFrame(({ clock }) => setUTime(clock.getElapsedTime()))
  //   const [image] = useLoader(THREE.TextureLoader, [
  //     'https://images.unsplash.com/photo-1604011092346-0b4346ed714e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'
  //   ])
  const images = useTextures(imageUrls)
  const { viewport } = useThree()

  return (
    <ScrollControls pages={3}>
      {images.map((image, index) => (
        <Scroll key={image.id}>
          <mesh position={[0, index * -viewport.height, 0]}>
            <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
            <waveShaderMaterial
              uColor={'white'}
              uTime={uTime}
              uTexture={image}
              //   ref={waveShaderMaterialRef}
              // wireframe
            />
          </mesh>
        </Scroll>
      ))}
    </ScrollControls>
  )
}
