import './App.css';
import Table from './compant/table';
import Select from './compant/select';
import Seatinfo from './compant/seatinfo';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from './redux/action';
import jsonData from"./data.json";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData(jsonData.seating_layout));
  }, [dispatch]);
  return (
    <div className="App">
      <Select/>
      <Table/>
      <Seatinfo/>
    </div>
  );
}

export default App;
