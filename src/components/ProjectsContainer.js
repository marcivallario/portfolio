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
            demo: "https://www.youtube.com/watch?v=tnjVqnLqaeM&ab_channel=MarciVallario",
            github: "https://github.com/marcivallario/trekcheck-co", 
        }, 
        {
            img: require('../assets/images/projects/shapeup.png'),
            title: "Shape Up",
            description: "A workout generator where users can randomly generate and save exercises for a complete full body workout.",
            demo: "https://www.youtube.com/watch?v=srVEAH1MKKs&ab_channel=MarciVallario",
            github: "https://github.com/marcivallario/shapeup",
            liveSite: 'https://shape-up-2022.herokuapp.com/'
        }, 
        {
            img: require('../assets/images/projects/zest.png'),
            title: "Zest",
            description: "A recipe curator application where users can filter through and browse cuisine-specific dishes.",
            demo: "https://www.youtube.com/watch?v=I_gp56_r5LQ&ab_channel=MarciVallario",
            github: "https://github.com/marcivallario/zest",
            liveSite: ''
        }
    ]

    let slides = projects.map((project, index) => <ProjectCard 
        key={index}
        img={project.img} 
        title={project.title} 
        description={project.description} 
        demo={project.demo}
        github={project.github}
        liveSite={project.liveSite}/>)

    return (
        <section id="projects" className="container-fluid">
            <div className="row" id="card-carousel">
                <Carousel slides={slides} autoplay={true} interval={5000} />
            </div>
            <div className="row" id="card-grid">
                {projects.map((project, index) => <ProjectCard 
                key={index}
                img={project.img} 
                title={project.title} 
                description={project.description} 
                demo={project.demo}
                github={project.github}
                liveSite={project.liveSite}/>)}
            </div>
        </section>
    )
}

export default ProjectsContainer;