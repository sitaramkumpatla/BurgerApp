import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'
const controls = [
    {lable:'salad',type:'salad'},
    {lable:'meat',type:'meat'},
    {lable:'cheese',type:'cheese'},
    {lable:'bacon',type:'bacon'}
]
const BuildControls = (props) => {
    return(
        <div className="buildControls">
            {
                controls.map((control,index) => <BuildControl rem={()=> props.removeIng(control.type)} add={() => props.addIngredient(control.type)} key={index} lable={control.label} type={control.type}/>)
            }
        </div>
    )
}

export default BuildControls;