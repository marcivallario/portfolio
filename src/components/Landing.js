import '../styles/landing.css'

function Landing() {
    return (
        <div id="landing">
                <h1 class="typing">Hi, I'm <span class="text-accent">Marci</span> and I'm a <span class="text-accent">Full-Stack Web Developer.</span></h1>
                <button class="welcome">
                    <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Welcome</span>
                </button>

        </div>
    )
}

export default Landing;