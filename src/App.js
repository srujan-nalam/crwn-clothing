import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>  
);


function App() {
  return (
    <div >
      <switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </switch>
    </div>
  );
}

export default App;
