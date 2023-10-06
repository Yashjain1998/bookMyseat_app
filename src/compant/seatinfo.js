import EventSeatIcon from '@mui/icons-material/EventSeat';

function Seatinfo(){
    return(
        <div className="info">
        <h4>Key to Seat Layout:</h4>
        <ul>
          <li><EventSeatIcon className='h a'/> Available</li>
          <li><EventSeatIcon className='h e'/> Unavailable</li>
          <li><EventSeatIcon className='h s'/> Youe Selection</li>
        </ul>
      </div>
    )
}
export default Seatinfo;