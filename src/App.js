import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from "./pages/Portfolio"
import Proyect from "./pages/Proyect"
import Contact from './pages/Contact'
import gotta from './img/web-gotta.jpg'
import giargia from './img/web-giargia.jpg'


function App() {

  const portfolio = [
    {
        id:1,
        img:`${gotta}`,
        alt:'Luciana Gotta',
        title:'Arq. Luciana Gotta',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ipsum quisquam voluptas tempora praesentium, culpa molestias consequatur veniam, autem architecto iusto quae delectus! Facilis maiores expedita temporibus deleniti eum sint.',
        date:'4 Ago 2021',
        technology:'Figma, Html, Css, Javascript, Bootstrap, PHP',
        role:'Frontend',
        pathname:'http://lucianagotta.com.ar/',
        domain:'lucianagotta.com.ar',
    },
    {
        id:2,
        img:`${giargia}`,
        alt:'giargia construcciones',
        title:'giargia construcciones',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ipsum quisquam voluptas tempora praesentium, culpa molestias consequatur veniam, autem architecto iusto quae delectus! Facilis maiores expedita temporibus deleniti eum sint.',
        date:'4 Dec 2020',
        technology:'Figma, Html, Css, Javascript, Bootstrap, PHP',
        role:'Frontend',
        pathname:'https://www.giargiaconstrucciones.com.ar/',
        domain:'giargiaconstrucciones.com.ar',
    },
    {
        id:3,
        img:'https://picsum.photos/1200',
        alt:'title image',
        title:'education 3',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ipsum quisquam voluptas tempora praesentium, culpa molestias consequatur veniam, autem architecto iusto quae delectus! Facilis maiores expedita temporibus deleniti eum sint.',
        date:'4 Dec 2020',
        technology:'Html, css',
        role:'Frontend',
        domain:'www.domain.com',
    },
    {
        id:4,
        img:'https://picsum.photos/1200',
        alt:'title image',
        title:'education 4',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ipsum quisquam voluptas tempora praesentium, culpa molestias consequatur veniam, autem architecto iusto quae delectus! Facilis maiores expedita temporibus deleniti eum sint.',
        date:'4 Dec 2020',
        technology:'Html, css',
        role:'Frontend',
        domain:'www.domain.com',
    },
    {
        id:5,
        img:'https://picsum.photos/1200',
        alt:'title image',
        title:'education 5',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ipsum quisquam voluptas tempora praesentium, culpa molestias consequatur veniam, autem architecto iusto quae delectus! Facilis maiores expedita temporibus deleniti eum sint.',
        date:'4 Dec 2020',
        technology:'Html, css',
        role:'Frontend',
        domain:'www.domain.com',
    },
    {
        id:6,
        img:'https://picsum.photos/1200',
        alt:'title image',
        title:'education 6',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ipsum quisquam voluptas tempora praesentium, culpa molestias consequatur veniam, autem architecto iusto quae delectus! Facilis maiores expedita temporibus deleniti eum sint.',
        date:'4 Dec 2020',
        technology:'Html, css',
        role:'Frontend',
        domain:'www.domain.com',
    }
  ]

  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/portfolio" element={ <Portfolio data={portfolio}/> } />
            <Route path="/proyect/:id" element={ <Proyect data={portfolio}/> } />
            <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
