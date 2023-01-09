import { AppWrapper } from './context/context';
import {Routes,Route} from "react-router-dom";
import HeaderNav from './components/HeaderNav';
import './assets/css/reset.css';

function App() {


  return (
    <AppWrapper>  
      <div className="App">
          <HeaderNav/>
          <Routes>
          <Route exact path="/" element={<h1>COSA GORDA</h1>}>
          </Route>
            <Route exact path="/marvel" element={<h1>COSA GORDA de marvel</h1>}>  
            </Route>
            <Route path="/dc" element={<h1>COSA Gruesa de DC</h1>}>
            </Route>
            <Route path="/create" element={<h1>COSA fina</h1>}>
            </Route>

        </Routes>
      </div>
    </AppWrapper>
  );
}

export default App;
