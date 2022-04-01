import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Header from "./components/Header";
import ProjectsContainer from "./components/ProjectsContainer";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./styles/global.css"

function App() {
  return (
    <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition 
          key={location.key}
          timeout={450}
          classNames="fade"
        >
          <Switch>
            <Route path="/about">
              <Header />
              <About />
              <Skills />
            </Route>
            <Route path="/projects">
              <Header />
              <ProjectsContainer />
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}/>
  );
}

export default App;
