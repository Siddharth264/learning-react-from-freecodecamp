import Marker from '../assets/marker.svg'
const Card = (props) => {
  return (
    <div className="card">
        <div className="card-container">
        <img src={`./images/${props.img}`} alt="Mount Fuji" />
            <div className="imgDetails-container">
                <div className="img-location">
                    <img src={Marker} alt="" />
                    <span>{props.country}</span>
                    <span><a href="google.com/mount-fuji">View on Google Maps</a></span>
                </div>

                <div className="img-header">
                    <span> {props.location} </span>
                </div>

                <div className="travel-dates">
                    <span> {props.fromDate} - {props.toDate} </span>
                </div>

                <div className="desc-container">
                    <span> {props.description} </span>
                </div>
                
            </div>
        </div>
        <div className="line-container"></div>
    </div>
    
  )
}

export default Card