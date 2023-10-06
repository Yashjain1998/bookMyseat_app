import { useDispatch } from 'react-redux';
import { setQty,setticket } from '../redux/action';

function Select() {
  const dispatch = useDispatch();
    const opt=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="select">
      <select className="custom-select" onChange={(e)=>dispatch(setticket(e.target.value))}>
        <option disabled selected>Ticket Type</option>
        <option>Standard</option>
        <option>Premium</option>
      </select>
      <select className="custom-select"  onChange={(e)=>dispatch(setQty(e.target.value))}>
        <option disabled selected>Qty</option>
        {opt.map((el) => {
          return <option key={el}>{el}</option>;
        })}
      </select>
    </div>
  );
}
export default Select;
