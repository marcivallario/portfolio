import headshot from '../assets/images/headshot-bw.png'
import '../styles/about.css'

function About() {
    return (
        <section className="page container" id="about">
            <div className="row" id="about-content">
                <div id="headshot" className="col col-lg-3 col-xl-4 img-container">
                    <img src={headshot} alt="headshot" title="Marci Vallario"/>
                </div>
                <div className="col-12 col-lg-9 col-xl-8" id="info-about">
                    <h2>A <span className="text-accent">Little</span> About Me</h2>
                    <p>I've been in the problem-solving business: I spent the last 7 years working as a coordinator in the film industry, executing filmmakers' wildest dreams—arranging everything from casting actors to sourcing animatronic remote-controlled crow puppets (again, their <span style={{fontStyle: "italic"}}>wildest</span> dreams). Queen of the Google search, ruler of all collaborative spreadsheets. Film sets are full of problems, often urgent and time sensitive, and so efficient, effective problem solving became my bread and butter. When I was hired onto a project with an overload of travel data, my world opened up to the possibilities of full-stack web development.</p>

                    <p>Since then, I've been hooked. Creating new web applications and applying new libraries &#38; technologies has scratched an itch in my brain that I've been dying to satisfy. I have a permanent, life-long attachment to my to-do list and a color-coordinated calendar. I'm always adding new tools to my tool chest!</p>

                    <p>When I'm offline, you can find me practicing guitar (much to the dismay of my neighbors), trading my computer keys for piano keys, or gushing over fabrics at the sewing store.</p>
                </div>
            </div>
        </section>
    )
}

export default About;