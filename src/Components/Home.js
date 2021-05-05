import React from 'react';

function Home(props) {
    return ( <
        div >
        <
        h1 > Home Component < /h1> <
        div className = "add-to-cart" >

        <
        img src = "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" / >
        <
        /div> <
        div className = "cart-wrapper" >
        <
        div className = "img-wrapper item" >
        <
        img src = "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" / >
        <
        /div> <
        div className = "text-wrapper item" >
        <
        span > iPhone 12 < /span> <
        span > Price: $1000 .00 < /span> <
        /div> <
        div className = "btn-wrapper item" >
        <
        button onClick = {
            () => { props.addToCartHandler({ pice: 1000, name: 'iPhone 12' }) }
        } > Add to cart < /button> <
        /div> <
        /div> <
        /div>
    );
}

export default Home;