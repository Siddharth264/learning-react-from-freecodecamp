// import Katie from '../assets/Katie.png'
import Star from '../assets/star.png'
import Ellipse from '../assets/Ellipse.png'

export default function Card(props){
    console.log(props)
    return (
        <div className="card-container">
            <div className="cardImg">
                <img src={props.img} alt=""  />
            </div>
            <div className="cardReviews">
                <img className='cardStar' src={Star} alt="" />
                <span>{props.rating}</span>
                <span>({props.numOfReviews})</span>
                <img className = "cardEl" src={Ellipse} alt="" />
                <span>{props.country}</span>
            </div>

            <div className="cardDetails">
                <div className="desc">
                {props.title}
                </div>
                <div className="rate">
                    <span className='boldtext'>From $ {props.price}</span>
                    <span className='simpletext'>/ Person</span>
                </div>
            </div>
        </div>
    )
}