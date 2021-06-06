import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Resume({ currentCategory }) {
    const name  = currentCategory;
    
    return (
        <section>
            <h1 data-testid="h1tag">{(name)}</h1>
        </section>
    );
  
}

export default Resume;