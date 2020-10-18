import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    let transformedIngredience = [];
    console.log(props.ingredients)

    Object.keys(props.ingredients).map(ing => {
         for(let i=0;i<props.ingredients[ing];i++){
            transformedIngredience.push(ing);
         }
    })
    let BurgerIngredients;
    console.log(transformedIngredience)
    if(transformedIngredience.length)
        BurgerIngredients = transformedIngredience.map((ing,ind) => <BurgerIngredient key={ind} type={ing} />)
    else
        BurgerIngredients = <div>Please select ingredients</div>
    return(
        <div className='burger'>
            <BurgerIngredient type='bread-top'/>
            {
                BurgerIngredients
            }
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default Burger;