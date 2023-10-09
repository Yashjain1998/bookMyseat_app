import { useSelector, useDispatch } from "react-redux";
import { selectseat, removeseat, submit } from "../redux/action";
import EventSeatIcon from "@mui/icons-material/EventSeat";
function Table({proceed,setproceed,setconfirm}) {
  const dispatch = useDispatch();
  const seatdata = useSelector((state) => state.seating_layout);
  const ticket = useSelector((state) => state.ticket);
  const Qty = useSelector((state) => state.Qty);
  const handerclick = (e) => {
    const seatarr = JSON.parse(localStorage.getItem("select")) || [];
    if (Qty <= seatarr.length) {
      dispatch(removeseat(seatarr, seatdata));
    }
    const id = e.substring(1).split("_");
    dispatch(selectseat(id, Qty, seatdata));
  };
  const handersubmit = () => {
    const seatarr = JSON.parse(localStorage.getItem("select"));
    if (seatarr) {
      dispatch(submit(seatarr, seatdata));
    }
  };
  if(proceed){
    handersubmit();
    setproceed(false);

  }
  return (
    <table>
      <tbody>
        {seatdata.map(({ seats, label, row }) => {
          return (
            <tr>
              <td>{label}</td>
              {seats.map(({ position, isSelected, type, status }) => {
                if (status === "empty")
                  return (
                    <td
                      id={label + row + "_" + position}
                      key={label + row + "_" + position}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                  );
                else if (status === "unavailable" || type !== ticket)
                  return (
                    <td
                      id={label + row + "_" + position}
                      key={label + row + "_" + position}
                    >
                      <EventSeatIcon fontSize="large" className="h e" />
                    </td>
                  );
                else if (isSelected)
                  return (
                    <td
                      id={label + row + "_" + position}
                      key={label + row + "_" + position}
                    >
                      <EventSeatIcon fontSize="large" className="h s" />
                    </td>
                  );
                return (
                  <td
                    id={label + row + "_" + position}
                    key={label + row + "_" + position}
                    onClick={() => handerclick(label + row + "_" + position)}
                  >
                    <EventSeatIcon fontSize="large" className="h a" />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>

      <button onClick={() => setconfirm(true)}>PROCEED</button>
    </table>
  );
}

export default Table;
