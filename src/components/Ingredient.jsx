import React from "react";
import { useSandwich,INGREDIENTS } from "../hook/zustedhook";
import Sandwhich from "./Sandwhich";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
export default function Ingredient() {
  const addToCart = useSandwich((state)=> state.addedToCart);
  const ingredients = useSandwich((state) => state.ingredients);
  const modelgltf = useRef();
  var space = 0.1;
  useFrame((state,delta)=>{
    if(addToCart){
      modelgltf.current.rotation.y += 0.01 ;
    }
    else{
      modelgltf.current.rotation.y =-0.5;
    }
  })
  if(addToCart){
    space = 0.07
  }
  else{
    space = 0.1
  }

  return (
    <>
      <group  ref={modelgltf}  position={[0,-0.7,0]}>
        {
          ingredients.map((ingredient,index)=>(
            <Sandwhich 
            key={index}
            ingredient={ingredient}
            position-y={index * space}
            showPrice={index > 0 || index < ingredient.length -1}
            />
          )
          )
        }

      </group>
    
    </>
  );

}
