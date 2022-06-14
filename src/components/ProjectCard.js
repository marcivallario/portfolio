import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';
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
                {github ? 
                    <Link href={github} target="_blank" title="GitHub Repo">
                        <IconButton>
                            <GitHubIcon />
                        </IconButton>
                    </Link> 
                    : null}
                {demo ? 
                    <Link href={demo} target="_blank" title="Video Demo">
                        <IconButton>
                            <YouTubeIcon />
                        </IconButton>
                    </Link> 
                    : null}

                {liveSite ? 
                    <Link href={liveSite} target="_blank" title="Live Demo">
                        <IconButton>
                            <LaunchIcon />
                        </IconButton>
                    </Link> 
                    : null}
            </div>
        </div>
    )
}

export default ProjectCard;