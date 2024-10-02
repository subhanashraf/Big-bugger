import { Canvas } from "@react-three/fiber";
import React from "react";
import { createRoot } from "react-dom/client";
import './style.css'
import { OrbitControls } from "@react-three/drei";
import ButtomUI from "./components/ButtomUI";
import Ingredient from "./components/Ingredient";
createRoot(document.getElementById('root')).render(
<>
<Canvas camera={{position:[0,0,2]}}>
<color attach="background" args={["#512DA8"]} />
       <Ingredient/>
        <OrbitControls/>
        <ambientLight intensity={3} color={0x404040}/>
    </Canvas>
    <ButtomUI/>
    
</>

)
