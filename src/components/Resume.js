import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
//import {download} from 'react-mdl';

function Resume({ currentCategory }) {
    
    
    return (
        <section>
            <h1 data-testid="h1tag">Resume</h1>
            <div className="resume">
                <h2 className="skills">Skills</h2>
                <a className="download" href="/resume/resume.pdf" download>Download Resume</a>
                <div className="list">
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
                            JSON
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
  
}

export default Resume;