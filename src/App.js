import { AppWrapper } from './context/context';
import {Routes,Route} from "react-router-dom";
import HeaderNav from './components/HeaderNav';
import MainHeroes from './components/MainHeroes';
import CreateHero from './components/CreateHero';
import MainSearched from './components/MainSearched';
import { Foot } from './components/Foot';
import './assets/css/reset.css';
import './assets/css/App.css';

function App() {


  return (
    <AppWrapper>  
      <div className="App">
        <div className='App-div--background'></div>
          <HeaderNav/>
          <Routes>
          <Route exact path="/" element={<MainSearched/>}>
          </Route>
          <Route exact path="/marvel" element={<MainHeroes group="Marvel Comics"/>}>  
            </Route>
          <Route path="/dc" element={<MainHeroes group="DC Comics" />}>
            </Route>
          <Route path="/others" element={<MainHeroes group="Others" />}>
          </Route>
          <Route path="/create" element={<CreateHero/>}>
            </Route>
        </Routes>
        <Foot/>
      </div>
    </AppWrapper>
  );
}

export default App;
