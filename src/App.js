import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Helmet} from "react-helmet";
import ThemeProvider from './components/Context/Provider';

import Home from './pages/Home'
import About from './pages/About'
import Portfolio from "./pages/Portfolio"
import Proyect from "./pages/Proyect"
import Contact from './pages/Contact'
import gotta from './img/web-gotta.jpg'
import giargia from './img/web-giargia.jpg'
import portfolioImg from './img/portfolio.jpg'
import memojpg from './img/memo.jpg'
import favicon from '../src/img/favicon.ico';


function App() {

  const portfolio = [
    {
      id:1,
      img:`${memojpg}`,
      alt:'Nahuel Stratico',
      title:'Game Memotest',
      description:'Applying some logic, props, and hooks.',
      date:'Jan 2022',
      technology:'React, JSX, Hooks, Javascript, Css, Html. ',
      role:'Frontend',
      pathname:'https://github.com/NahuelStratico/memoapp',
      domain:'Github.com/NahuelStratico',
    },
    {
        id:2,
        img:`${portfolioImg}`,
        alt:'Nahuel Stratico',
        title:'My portfolio',
        description:'In this proyect I used libraries as Framer Motion and react spring in animation. My goal was a clean and functional website.',
        date:'Dec 2021',
        technology:'Html, Css, Javascript, React, JSX, React Router Dom, Hooks.',
        role:'Frontend',
        pathname:'https://github.com/NahuelStratico/myportfolio-app',
        domain:'Github.com/NahuelStratico',
    },
    {
      id:3,
      img:`${gotta}`,
      alt:'Luciana Gotta',
      title:'Arq. Luciana Gotta',
      description:'First website for a architect. I was looking for a minimalist design with a friendly interface and with big images.',
      date:'Ago 2021',
      technology:'Figma, Html, Css, Javascript, Bootstrap, PHP.',
      role:'Frontend',
      pathname:'http://lucianagotta.com.ar/',
      domain:'lucianagotta.com.ar',
    },
    {
      id:4,
      img:`${giargia}`,
      alt:'giargia construcciones',
      title:'giargia construcciones',
      description:'Updated website. The construction company was looking for a new design for its website and a new image for its company.',
      date:'Dec 2020',
      technology:'Figma, Html, Css, Javascript, Bootstrap, PHP.',
      role:'Frontend',
      pathname:'https://www.giargiaconstrucciones.com.ar/',
      domain:'giargiaconstrucciones.com.ar',
    },
  ]

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Stratico Dev</title>
        <link rel="canonical" href="http://straticonahuel.com.ar" />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        <meta name="description" content="By Nahuel Stratico portfolio" />
    </Helmet>

    
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/portfolio" element={ <Portfolio data={portfolio}/> } />
              <Route path="/proyect/:id" element={ <Proyect data={portfolio}/> } />
              <Route path="/contact" element={ <Contact /> } />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    
    </>
  );
}

export default App;
