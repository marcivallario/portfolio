import "../styles/projectcard.css"

function ProjectCard({ img, title, description, github, demo}) {
    return (
        <div className="card">
            <img className="card-img-top" src={img} alt="Project Overview" title={title} />
            <div className="card-body">
                <h5 class="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div class="card-footer">
                <button class="project-links"><a href={github} class="card-link">Github</a></button>
                <button class="project-links"><a href={demo} class="card-link">Video Demo</a></button>
                <button class="project-links"><a href="" class="card-link">Live Site</a></button>
            </div>
        </div>
    )
}

export default ProjectCard;