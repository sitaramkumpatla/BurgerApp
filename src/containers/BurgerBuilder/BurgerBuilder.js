import React,{Component, Fragment} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildContorls/BuildControls'

const ING_PRICES = {
    'salad' : 1,
    'bacon' : 3,
    'cheese': 3,
    'meat' : 10
}

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        totalPrice : 4
    }
    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;

        const updatedIngredients = {
            ...this.state.ingredients,
            [type] : oldCount + 1
        }
        this.setState({
            ingredients : updatedIngredients,
            totalPrice : oldPrice + ING_PRICES[type] 
        })
    }
    removeIngredient = (type) =>{
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice
        const updatedIngredients = {
            ...this.state.ingredients,
            [type] : oldCount? oldCount - 1 : 0
        }
        this.setState({
            ingredients : updatedIngredients,
            totalPrice: oldCount ? oldPrice - ING_PRICES[type] : oldPrice
        })
    }
    render(){
        return(
            <Fragment>
                <div>Burger Price:{this.state.totalPrice}</div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls removeIng={this.removeIngredient} addIngredient={this.addIngredient}/>
            </Fragment>
        )
    }
}

export default BurgerBuilder;