import React from 'react'; // Don't forget to import React!

import { useSandwich,INGREDIENTS } from '../hook/zustedhook';

export default function ButtomUI() {
    const ingredients = useSandwich((state) => state.ingredients);
    const addToCart = useSandwich((state)=> state.addedToCart);
    const setAddedToCart = useSandwich((state)=> state.setAddedToCart);
    const addIngredient = useSandwich((state) => state.addIngredient);
    const total = useSandwich((state) => state.total);
   
    
    
    const handleButtonClick = (prop) => {
        addIngredient(prop);
    };

 
    return (
        <div className="main">
           <div className='inner'>
          {addToCart ?
           <>
          <p>Order sent successfully, it will be ready in 5 deliver it to your home 🛵</p>
          <div className='button'>
          <button className='addto' 
          onClick={() => setAddedToCart(false)}
          >Done</button>
          </div>
          </> :
           <>
           <div className='headingdiv'>
           <p className="heading">Big Bugger</p>
            <p className='start'>⭐🌟🌟⭐</p>
            <p>Fresh and delicuse made with love</p>
           </div>
             {/* <div className="center">
                <p className="heading">Your Creation ($5.00)</p>
                <p>Compose your sandwhich by assing ingredient</p>
            </div> */}
            <div className='scroll'>
            {Object.keys(INGREDIENTS).map((ingredients,index)=>
                <button key={index} className='btn btn-pulse' onClick={() => handleButtonClick(ingredients)}>{ingredients} {INGREDIENTS[ingredients].icon}</button>
            )}
            </div>
            <div className='button'>
            <button className='addto'
            onClick={() => setAddedToCart(true)}
            >Add to Card  {total}$</button>
            </div>
          </>  
          }
           </div>
        </div>
    );
}

{/* {ingredientButtons} */}