import React from 'react';
import nate from "../assets/images/nate.JPG";

function About() {
    return (
        <section className="aboutpage">
            <h1 id="about">Who am I?</h1>
            <div className="image">
            <img className ="natepic" src={nate} alt="nate" />
            </div>
            <div className="paragraph">
                <h2>Nate Hogan</h2>
                <p>
                Lorem ipsum dolor sit amet. I bet you thought this who thing was filler text. To start 
                off I like to have fun and enjoy myself in a professional environment.
                I think it is very important to enjoy your job and when you do so you will want to work hard.
                I am a very hard working and loyal person and that will show more once you get to know me. 
                </p>
            </div>
        </section>
    );
}



export default About;