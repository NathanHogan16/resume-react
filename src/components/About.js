import React from 'react';
import nate from "../assets/images/nate.jpg";

function About() {
    return (
        <section className="aboutpage">
            <h1 id="about">Who am I?</h1>
            <div className="image">
            <img className ="natepic" src={nate} alt="nate" />
            </div>
            <div className="paragraph">
                <h2>Nathan Hogan</h2>
                <p>
                I am a hard working person who also likes fun working environments. I graduated from a coding bootcamp from the University of Utah to be a
                full stack developer.  I am also continuing my education on my own time by studing by myself and studying to be a certified ServiceNow administrator.  I
                promise to always give my best in any job that I do. If you are interested in learning more please reach out to me.
                </p>
            </div>
        </section>
    );
}



export default About;