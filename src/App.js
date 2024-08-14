import { Navbar } from './componentes/Navbar';
import { MainHome } from './pages/MainHome';
import { Noticias } from './pages/Noticias';
import { Cronograma } from './pages/Cronograma ';
import { Contacto } from './pages/Contacto';
import { Footbar } from './componentes/Footbar';
function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <MainHome />

      break;
    case "/noticias":
      component = <Noticias />
      break;
    case "/cronograma":
      component = <Cronograma />
      break;
    case "/contacto":
      component = <Contacto/>
      break;
    default:
      break;
  }
  return (
    <>
      <Navbar />
      <div>{component}</div>
      <Footbar></Footbar>
    </>

  );
}

export default App;
