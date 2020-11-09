import React from 'react';
import resumePdf from '../../assets/resume.pdf';

function Resume() {
    return (
        <section>
            <h2 className="section-header">Resume</h2>
            <p className="res-link"> Feel free to download my <a href={resumePdf} download={resumePdf}>resume</a>.</p>

            <h3 className="res-pro">Front-End Proficiencies</h3>
                <ul className="pro-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Materialize.css</li>
                    <li>Responsive Design</li>
                </ul>

            <h3 className="res-pro">Back-End Proficiencies</h3>
                <ul className="pro-list">
                    <li>Express</li>
                    <li>Node</li>
                    <li>APIs</li>
                    <li>MySQL/Sequelize</li>
                    <li>MongoDB/Mongoose</li>
                </ul>
        </section>
    )
};

export default Resume;