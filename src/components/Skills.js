import "../styles/skills.css"

function Skills() {
    return (
        <section id="skills" className="container-fluid">
            <div className="container">
                 <div className="row">
                    <h2 className="section-heading">Skills</h2>
                </div>
                <div className="row" id="skills-content">
                    <div className="col">
                        <h4 className="skill-title">front-end:</h4>
                        <div className="logo-grid">
                            <div><h6>HTML</h6><img src={require('../assets/images/skills/language-framework-logos/html.png')} alt="HTML" /></div>
                            <div><h6>CSS</h6><img src={require('../assets/images/skills/language-framework-logos/css.png')} alt="CSS" /></div>
                            <div><h6>JavaScript</h6><img src={require('../assets/images/skills/language-framework-logos/javascript.png')} alt="JavaScript" /></div>
                            <div><h6>Bootstrap</h6><img src={require('../assets/images/skills/language-framework-logos/bootstrap.png')} alt="Bootstrap" /></div>
                            <div><h6>React</h6><img src={require('../assets/images/skills/language-framework-logos/react.jpeg')} alt="React" /></div>
                            <div><h6>Redux</h6><img src={require('../assets/images/skills/language-framework-logos/redux.png')} alt="Redux" /></div>
                        </div>
                    </div>
                    <div className="col">
                        <h4 className="skill-title">back-end:</h4>
                        <div className="logo-grid">
                            <div><h6>Ruby</h6><img src={require('../assets/images/skills/language-framework-logos/ruby.png')} alt="Ruby" /></div>
                            <div><h6>Sinatra</h6><img src={require('../assets/images/skills/language-framework-logos/sinatra.png')} alt="Sinatra" /></div>
                            <div><h6>Rails</h6><img src={require('../assets/images/skills/language-framework-logos/rails.png')} alt="Rails" /></div>
                            <div><h6>PostgreSQL</h6><img src={require('../assets/images/skills/language-framework-logos/postgresql.png')} alt="PostgreSQL" /></div>
                        </div>
                    </div>
                </div>
                <div className="row" id="other-skills">
                    <h4 className="skill-title">other skills:</h4>
                        <ul>
                            <li>Adobe Illustrator</li>
                            <li>Adobe InDesign</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Premiere Pro</li>
                        </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills;