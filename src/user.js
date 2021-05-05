import React from 'react';

const user = (props) => {
    return ( <
        div >
        <
        h1 > { props.user.name } < /h1> <
        h1 > { props.user.skills.pro } < /h1> <
        /div>
    );
};

export default user;