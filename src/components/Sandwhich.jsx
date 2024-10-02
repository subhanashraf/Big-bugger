import { Float, Gltf, Text, Text3D } from "@react-three/drei";
import { INGREDIENTS, useSandwich } from '../hook/zustedhook'
import fontpath from '../assets/font/Poppins_Bold.json'
import { DoubleSide } from "three";

export default function Sandwhich({ ingredient, showPrice, ...props }) {
  const removeIngredient = useSandwich((state) => state.removeIngredient);
  const addToCart = useSandwich((state) => state.addedToCart);


  const INGREDIENT_SCALE = 4;
  const INGREDIENT_SCALE_Y = 6;
  console.log(showPrice);


  return (
    <>
      {showPrice && (

        <group
          {...props}
          onClick={(e) => {
            e.stopPropagation();
            removeIngredient(ingredient);
          }}
          visible={!addToCart}
        >
          <mesh position-x={0.6} >
            <planeGeometry args={[0.9, 0.1]} />
            <meshStandardMaterial color="white" opacity={0.42} transparent side={DoubleSide} />
          </mesh>
          <Text3D
            font={fontpath}
            scale={0.05}
            bevelSegments={3}
            bevelEnabled
            bevelThickness={0.001}
            position-x={0.42}

          >
            {ingredient.name}
            <meshBasicMaterial color="white" />
          </Text3D>
          <Text3D
            font={fontpath}
            scale={0.05}
            bevelSegments={3}
            bevelEnabled
            bevelThickness={0.001}
            position-x={0.82}

          >
            ${INGREDIENTS[ingredient.name].price}
            <meshBasicMaterial color="white" />
          </Text3D>
          <Text3D
            font={fontpath}
            scale={0.05}
            bevelSegments={3}
            bevelEnabled
            bevelThickness={0.001}
            position-x={1}
          >
            X
            <meshBasicMaterial color="red" />
          </Text3D>
        </group>

      )}

      <group {...props} >
        <Float
          floatingRange={addToCart ? [0, 0] : [-0.01, 0.01]}
          speed={addToCart ? 0 : 4}
          rotationIntensity={0.5}
        >
          <Gltf

            src={INGREDIENTS[ingredient.name].src}
            scale={INGREDIENT_SCALE}
            scale-y={INGREDIENT_SCALE_Y + (ingredient.name === "bread" ? 5 : 0)}
          />
        </Float>
      </group>
    </>
  )
}