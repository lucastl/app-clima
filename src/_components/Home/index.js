import React from 'react'
import ResultsList from '../../_components/ResultsList';

const Home = ({ title, result }) => {

    return (
        <>
            <h1>{title}</h1>
            <ResultsList
                result={result}
            />
        </>
    );
}

export default Home;