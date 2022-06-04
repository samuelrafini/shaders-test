declare module 'babel-plugin-glsl/macro'

declare {
    namespace JSX {
      interface IntrinsicElements {
        waveShaderMaterial: ReactThreeFiber.Object3DNode<WaveShaderMaterial, typeof WaveShaderMaterial>
      }
    }
  }