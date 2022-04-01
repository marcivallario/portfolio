import ProjectCard from './ProjectCard';
import { Carousel } from '3d-react-carousal';
import '../styles/projectscontainer.css';

function ProjectsContainer() {
    const projects = [
        {
            img: require('../assets/images/projects/trekcheck.png'),
            title: "TrekCheck",
            description: "TrekCheck is an app built by a former travel organizer, for travel organizers. Here, organizers can track arrangements made for employees and store traveler profiles for easy access.",
            technologies: ["React", "Ruby on Rails", "Redux"],
            demo: "https://www.youtube.com/",
            github: "https://github.com/marcivallario/trekcheck-co"
        }, 
        {
            img: require('../assets/images/projects/shapeup.png'),
            title: "Shape Up",
            description: "A workout generator where users can randomly generate and save exercises for a complete full body workout.",
            demo: "https://www.youtube.com/",
            github: "https://github.com/marcivallario/shapeup"
        }, 
        {
            img: require('../assets/images/projects/zest.png'),
            title: "Zest",
            description: "A recipe curator application where users can filter through and browse cuisine-specific dishes.",
            demo: "https://www.youtube.com/",
            github: "https://github.com/marcivallario/zest"
        }
    ]

    let slides = projects.map((project, index) => <ProjectCard 
        key={index}
        img={project.img} 
        title={project.title} 
        description={project.description} 
        demo={project.demo}
        github={project.github}/>)

    return (
        <section id="projects" class="container-fluid">
            <div class="row" id="card-carousel">
                <Carousel slides={slides} autoplay={true} interval={5000} />
            </div>
            <div class="row" id="card-grid">
                {projects.map((project, index) => <ProjectCard 
                key={index}
                img={project.img} 
                title={project.title} 
                description={project.description} 
                demo={project.demo}
                github={project.github}/>)}
            </div>
        </section>
    )
}

export default ProjectsContainer;