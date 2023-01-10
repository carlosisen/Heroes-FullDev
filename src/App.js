import { AppWrapper } from './context/context';
import {Routes,Route} from "react-router-dom";
import HeaderNav from './components/HeaderNav';
import MainHeroes from './components/MainHeroes';
import CreateHero from './components/CreateHero';
import './assets/css/reset.css';

function App() {


  return (
    <AppWrapper>  
      <div className="App">
          <HeaderNav/>
          <Routes>
          <Route exact path="/" element={<h1>COSA GORDA</h1>}>
          </Route>
          <Route exact path="/marvel" element={<MainHeroes group="Marvel Comics"/>}>  
            </Route>
          <Route path="/dc" element={<MainHeroes group="DC Comics" />}>
            </Route>
          <Route path="/create" element={<CreateHero/>}>
            </Route>

        </Routes>
      </div>
    </AppWrapper>
  );
}

export default App;
