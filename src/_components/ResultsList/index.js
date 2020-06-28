import React from 'react'

const ResultsList = ({ result }) => {
    return (
        <>
            {
                result.list && result.list.map(result => (
                    <div key={result.id}>
                        {result.name}
                    </div>
                ))
            }
        </>
    );
}

export default ResultsList;