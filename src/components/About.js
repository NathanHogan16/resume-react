import React from 'react';
import nate from "../assets/images/nate.jpg";

function About() {
    return (
        <section className="aboutpage">
            <h1 id="about">Who am I?</h1>
            <div className="image">
            <img className ="natepic" src={nate} alt="nate" />
            </div>
            <div>
                <h2>Nate Hogan</h2>
                <p>
                    hello
                </p>
            </div>
        </section>
    );
}



export default About;