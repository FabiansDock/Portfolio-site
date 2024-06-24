/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 ./public/laptop.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/laptop.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.004']} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1.213, -0.03, -1]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.Material} position={[-0.078, 0.325, -1.027]} rotation={[-1.846, -0.611, Math.PI]} scale={[-0.037, -0.028, -0.117]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.008']} position={[0, 0.826, -1.181]} rotation={[1.3, 0, 0]} scale={[0.716, 0.012, 0.845]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.005']} position={[0, 0.026, -0.107]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1.125, -0.03, -0.439]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.003']} position={[0, 0.026, 0.665]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.33, -0.03, -0.237]} />
      <mesh geometry={nodes.Monitor.geometry} material={materials['Material.001']} position={[0, 0.319, -1.015]} rotation={[-1.846, 0, -Math.PI]} scale={[-1.208, -0.046, -0.153]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials.Material} position={[-0.078, 0.325, -1.027]} rotation={[-1.846, -0.611, Math.PI]} scale={[-0.037, -0.028, -0.117]} />
      <mesh geometry={nodes.V.geometry} material={materials.Material} position={[-0.044, 0.34, -0.976]} rotation={[-1.846, -0.611, Math.PI]} scale={[-0.03, -0.027, -0.094]} />
      <mesh geometry={nodes.Cube012.geometry} material={materials['Material.006']} position={[0.786, 0.034, -0.107]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.277, -0.03, -0.345]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials['Material.007']} position={[-0.303, 0.034, -0.107]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.73, -0.03, -0.345]} />
      <mesh geometry={nodes.V001.geometry} material={materials.Material} position={[-0.106, 1.057, -1.265]} rotation={[-1.846, -0.611, Math.PI]} scale={[-0.049, -0.044, -0.155]} />
    </group>
  )
}

useGLTF.preload('/laptop.glb')
