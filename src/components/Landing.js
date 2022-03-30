import { useHistory } from "react-router-dom";
import '../styles/landing.css'

function Landing() {
    let history = useHistory();

    function handleClick() {
        history.push("/about");
    }

    return (
        <div className="page" id="landing">
                <h1 className="typing">Hi, I'm <span class="text-accent">Marci</span> and I'm a <span className="text-accent">Full-Stack Web Developer.</span></h1>
                <button className="welcome" onClick={handleClick}>Welcome</button>

        </div>
    )
}

export default Landing;