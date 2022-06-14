import "../styles/projectcard.css"

function ProjectCard({ img, title, description, github, demo, liveSite}) {
    return (
        <div className="card">
            <img className="card-img-top" src={img} alt="Project Overview" title={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <button className="project-links"><a href={github} target="_blank" className="card-link">Github</a></button>
                <button className="project-links"><a href={demo} target="_blank" className="card-link">Video Demo</a></button>
                {liveSite ? <button className="project-links"><a href={liveSite} target="_blank" className="card-link">Live Site</a></button> : null}
            </div>
        </div>
    )
}

export default ProjectCard;