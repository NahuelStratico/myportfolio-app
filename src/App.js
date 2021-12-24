import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from "./pages/Portfolio"
import Proyect from "./pages/Proyect"
import Contact from './pages/Contact'


function App() {
  const portfolio = [
    {
        id:1,
        img:'https://picsum.photos/1000/562',
        alt:'title image',
        title:'education course website',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ipsum quisquam voluptas tempora praesentium, culpa molestias consequatur veniam, autem architecto iusto quae delectus! Facilis maiores expedita temporibus deleniti eum sint.',
        date:'4 Dec 2020',
        technology:'Html, css',
        role:'Frontend',
        domain:'www.domain.com',
    },
    {
        id:2,
        img:'https://picsum.photos/1200',
        alt:'title image',
        title:'education 2',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ipsum quisquam voluptas tempora praesentium, culpa molestias consequatur veniam, autem architecto iusto quae delectus! Facilis maiores expedita temporibus deleniti eum sint.',
        date:'4 Dec 2020',
        technology:'Html, css',
        role:'Frontend',
        domain:'www.domain.com',
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
