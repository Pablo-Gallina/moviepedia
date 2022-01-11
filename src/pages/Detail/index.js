import React, { useContext } from 'react';
import StaticContext from '../../context/StaticContext';

const Detail = ({ params }) => {
    const context = useContext(StaticContext);
    console.log(context);
    return (
        <h1>
            {params.keyword}
        </h1>
    )
}

export default Detail
