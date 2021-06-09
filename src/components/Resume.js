import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Resume({ currentCategory }) {
    
    
    return (
        <section>
            <h1 data-testid="h1tag">Resume</h1>
            <div className="resume">
                <h2 className="skills">Skills</h2>
                <a className="download" href="https://www.linkedin.com/in/nathan-hogan-164511201/">Download Resume</a>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        React.js  
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        Sequelize
                    </li>
                    <li>
                        MongoDB
                    </li>
                    <li>
                        More to Come!
                    </li>
                </ul>
            </div>
        </section>
    );
  
}

export default Resume;