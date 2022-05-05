import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stock from './Stock';
import StockDetails from './StockDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Stock />} />
        <Route path='/stock/:id' element={<StockDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;
