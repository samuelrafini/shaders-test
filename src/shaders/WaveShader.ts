import * as THREE from 'three'
import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import glsl from 'babel-plugin-glsl/macro'

export const WaveShaderMaterial = shaderMaterial(
  // Uniforms
  // also props
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture()
  },
  // Vertex Shaders
  glsl`
        precision mediump float;
        varying vec2 vUv;
        varying float vWave;

        uniform float uTime;

        #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

        void main() {
            vUv = uv;

            vec3 pos = position;

            float noiseFreq = 0.5;
            float noiseAmp = 0.05;
        
            vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z );
            pos.z += snoise3(noisePos) * noiseAmp;
            vWave = pos.z;
    
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,
  // Fragment Shaders
  glsl`
        precision mediump float;

        uniform vec3 uColor;
        uniform float uTime;
        uniform sampler2D uTexture;

        varying float vWave;
        varying vec2 vUv;

        void main() {
            float wave = vWave * 0.2;
            vec3 texture = texture2D(uTexture, vUv + wave).rgb;
            gl_FragColor = vec4(texture, 1.0);
        }
    `
)

extend({ WaveShaderMaterial })
