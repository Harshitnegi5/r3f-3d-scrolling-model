import React from 'react'
import {Canvas} from "@react-three/fiber"
import Experience from './components/Experience'

const App = () => {
  return (
     <Canvas camera={{
      fov:84,
      position:[2.3,1.5,2.3]
     }}>
      <Experience/>
     </Canvas>
  )
}

export default App

