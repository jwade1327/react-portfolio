import React from 'react';
import image from '../../assets/cover/image.jpg';

function About() {
    return (
        <section>
                <h2 id="about" className="section-header"> About Me </h2>
                <div className="about-wrapper">
                <img src={image} style={{ width: "25%" }} alt="cover" className="picture"/>
                <p className="about-text">
                    My name is Jessica and I'm fairly new to Web Developing. I have been a Sign Language Interpreter since 2012.
                    I have worked in various school settings working with students ranging from age 4 to age 21. I am a hard working, recently engaged, mother of 3.
                    I decided to enroll at the University of Wisconsin Extended Campus-Coding Bootcamp to begin a new adventure in mine and my families' lives!
                </p>
            </div>
        </section>
    )
}

export default About;