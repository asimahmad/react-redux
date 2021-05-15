import React from 'react';
import { connect } from 'react-redux'
import { buyCake, BuyIceCream } from '../redux';

function ItemContainer(props) {
    return ( <
        div >
        <
        h2 > Item - { props.item } < /h2> <
        button onClick = { props.buyItem } > Buy Items < /button> <
        /div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams

    return {
        item: itemState
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFuntion = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(BuyIceCream())

    return {
        buyItem: dispatchFuntion
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)