import './App.css';
import Table from './compant/table';
import Select from './compant/select';
import Seatinfo from './compant/seatinfo';
import { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { setData } from './redux/action';
import jsonData from"./data.json";
import ConfirmationModal from "./compant/confirm"

function App() {
  const[confirm,setconfirm]=useState(false)
  const[proceed,setproceed]=useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData(jsonData.seating_layout));
  }, [dispatch]);
 if(confirm){
    return(
      <ConfirmationModal isopen={setconfirm} onConfirm={setproceed}/>
    )
  }
  return (
      <div className="App">
        <Select/>
        <Table proceed={proceed} setproceed={setproceed} setconfirm={setconfirm}/>
        <Seatinfo/>
      </div>
  );
}

export default App;
