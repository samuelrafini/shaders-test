import { Canvas } from '@react-three/fiber'
import { WaveImage } from 'components/WaveImage'
import { Suspense } from 'react'
import 'shaders/WaveShader'
import { Vector2 } from 'three'

export const Scene = () => (
  <Canvas camera={{ fov: 12, position: [0, 0, 5] }} flat linear>
    <WaveImage
      imageUrls={[
        '/img/_SMD3464.jpg',
        '/img/_SMD3569.jpg',
        '/img/_SMD3657.jpg'
      ]}
    />
    {/* <WaveImage imageUrl="/img/_SMD3569.jpg" />
    <WaveImage imageUrl="/img/_SMD3557.jpg" /> */}
    {/* <pointLight position={[10, 10, 10]} /> */}
    {/* <ambientLight position={[0, 0, 5]} isAmbientLight intensity={0.9} color="#fff"/> */}
    {/* <Suspense fallback={null}> */}
    {/* <WaveImage imageUrl='/img/_SMD3569.jpg'/>
      <WaveImage imageUrl='/img/_SMD3557.jpg'/> */}
    {/* </Suspense> */}
    {/* <Suspense fallback={null}> */}
    {/* <WaveImage imageUrl='/img/_SMD3464.jpg'/> */}
    {/* <WaveImage imageUrl='/img/_SMD3557.jpg'/> */}
    {/* </Suspense> */}
    {/* <Suspense fallback={null}> */}
    {/* <WaveImage imageUrl='/img/_SMD3464.jpg'/> */}
    {/* <WaveImage imageUrl='/img/_SMD3569.jpg'/>*/}
    {/* </Suspense> */}
  </Canvas>
)
