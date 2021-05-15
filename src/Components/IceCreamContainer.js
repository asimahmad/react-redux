import React from 'react';
import { connect } from 'react-redux'
import { BuyIceCream } from '../redux/index'


function IceCreamContainer(props) {
    return ( <
        div >
        <
        h2 > Number of IceCream - { props.numOfIceCreams } < /h2> <
        button onClick = { props.BuyIceCream } > Buy IceCream < /button> <
        /div>
    );
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        BuyIceCream: () => dispatch(BuyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
    //export default CakeContainer


// We can use hooks instead of connect in this cake shop container