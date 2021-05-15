import React from 'react';
import { connect } from 'react-redux'
import { buyPizza } from '../redux/index'


function PizzaContainer(props) {
    return ( <
        div >
        <
        h2 > Number of Pizzas - { props.numOfPizza } < /h2> <
        button onClick = { props.buyPizza } > Buy Pizza < /button> <
        /div>
    );
}

const mapStateToProps = state => {
    return {
        numOfPizza: state.pizza.numOfPizza // add iceCream key from root reducer only in here that's all.
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyPizza: () => dispatch(buyPizza())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer)
    //export default CakeContainer


// We can use hooks instead of connect in this cake shop container