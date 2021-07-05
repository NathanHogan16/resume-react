import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    
    
    return (
        <section>
            <h1 data-testid="h1tag">Portfolio</h1>
            <div className="works">
                
                <a href="https://serene-kings-canyon-83018.herokuapp.com/" id="work" className="hero">
                    <p className="name">Jacks of all Trades</p>
                </a>
                <a href="https://nickrodriquez.github.io/Map-Method/" id="work" className="google">
                    <p className="name">Map-Method</p>
                </a>
                <a href="https://cryptic-waters-01344.herokuapp.com/" id="work" className="slim">
                    <p className="name">SlimPickins</p>
                </a>
            </div>
        </section>
    );
  
}

export default Portfolio;