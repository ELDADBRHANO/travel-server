import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/features/NavBar/NavBar';
import AddFlight from './components/pages/AddFlight/AddFlight';
import Router from './router';
 function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
