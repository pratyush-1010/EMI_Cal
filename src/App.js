import logo from './logo.svg';
import './App.css';
import './desing.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MainPage from './Comp/MainPage';
import HomeLoan from './Comp/HomeLoan';
import PerLoan from './Comp/PerLoan';
import CarLoan from './Comp/CarLoan'
function App() {
  return (
    <div className="App">
      <Router>
      <MainPage/>
    <Routes>
      <Route path='/' element={<HomeLoan/>}></Route>
      <Route path='/personal' element={<PerLoan/>}></Route>
      <Route path='/car' element={<CarLoan/>}></Route>
    </Routes>
      </Router>
    </div>
  );
}

export default App;
