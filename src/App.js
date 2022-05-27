import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stock from './Stock';
import StockDetails from './StockDetails';
import AdminStock from './AdminStock';
import AddStock from './AddStock';
import EditStock from './EditStock';

function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const getStocks = async () => {
      const afterFetchStocks = await fetchDatabase();
      setStocks(afterFetchStocks);
    }
    getStocks();
  }, [stocks]);

  async function handleAddStock(stock) {
    const res = await fetch('http://localhost:5000/stockArr', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(stock),
    });
    const data = await res.json()
    setStocks([...stocks, data]);
  }

  async function handleDeleteStock(id) {
    const res = await fetch(`http://localhost:5000/stockArr/${id}`, {
      method: 'DELETE',
    });
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setStocks(stocks.filter((stock) => stock.id !== id))
      : alert('Error Deleting This Stock')
  }

  async function handleEditStock(id, stock) {
    handleAddStock(stock);
    handleDeleteStock(id);
  }

  async function fetchDatabase() {
    const res = await fetch(`http://localhost:5000/stockArr`);
    const data = await res.json();
    return data;
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Stock stocks={stocks}/>} />
        <Route path='/stock/:id' element={<StockDetails stocks={stocks} />}/>
        <Route path='/admin' element={<AdminStock stocks={stocks} />} />
        <Route path='/admin/createstock' element={<AddStock handleAddStock={handleAddStock} />}/>
        <Route path='/admin/editstock/:sid' element={<EditStock handleEditStock={handleEditStock} handleDeleteStock={handleDeleteStock}/>} />
      </Routes>
    </Router>
  );
}

export default App;
