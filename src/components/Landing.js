import { useHistory } from "react-router-dom";
import '../styles/landing.css'

function Landing() {
    let history = useHistory();

    function handleClick() {
        history.push("/about");
    }

    return (
        <div className="page" id="landing">
                <h1 className="typing">Hi, I'm <span className="text-accent">Marci</span> and <span className="avoidwrap">I'm a <span className="text-accent">Full-Stack Developer.</span></span></h1>
                <button className="welcome" onClick={handleClick}>Welcome</button>

        </div>
    )
}

export default Landing;