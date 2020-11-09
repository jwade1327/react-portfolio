import React from 'react';

const projects = [
    {
        name: "Note Taker",
        liveUrl: "https://afternoon-harbor-01376.herokuapp.com/",
        githubUrl: "https://https://github.com/jwade1327/Challenge-11-note-taker",
        tech: "Express.js",
        style: "note-taker"
    },
    {
        name: "Tech Blog",
        liveUrl: "https://sheltered-brushlands-29071.herokuapp.com/",
        githubUrl: "https://github.com/jwade1327/Challenge-11-note-taker",
        tech: "MVC/Handlebars/Sequelize/Express-Session",
        style: "tech-blog"
    },
    {
        name: "Prestige Worldwide",
        liveUrl: "https://jwade1327.github.io/project-1-prestige-worldwide/",
        githubUrl: "https://github.com/jwade1327/project-1-prestige-worldwide",
        tech: "HTML/CSS/JavaScript/jQuery/Materialize/APIs",
        style: "prestige-worldwide"
    },
    {
        name: "Campground Inc",
        liveUrl: "https://agile-journey-10175.herokuapp.com/",
        githubUrl: "https://github.com/jwade1327/project-two-campgrounds-inc",
        tech: "MySQL2/Express/Sequelize",
        style: "campground-inc"
    },
    {
        name: "The Maker's Corner",
        liveUrl: "https://tranquil-dusk-14791.herokuapp.com/",
        githubUrl: "https://github.com/jwade1327/project-3-the-makers-corner",
        tech: "React/GraphQL API/Node.js/Express.js/MongoDB/Mongoose ODM",
        style: "the-makers-corner"
    }
]

function Projects() {

    return (
        <section>
            <h2 className="section-header">Projects</h2>
            <div className="project-wrapper">
                {projects.map(project => (
                    <div className={`${project.style} project-item`} key={project.name}>
                        <div className="project-header">
                            < a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-title">
                                {project.name}
                            </a>
                            <br></br>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-github">
                                GitHub Repository
                            </a>
                        </div>
                        <p className="project-tech">{project.tech}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;