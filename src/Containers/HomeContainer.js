import { connet } from 'react-redux'
import Home from '../Components/Home'
import { addToCart } from '../Services/Actions/action'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})


export default connet(mapDispatchToProps, mapStateToProps)(Home)

// export default Home