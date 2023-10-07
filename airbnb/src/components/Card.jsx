import Star from '../assets/star.png'
import Ellipse from '../assets/Ellipse.png'

export default function Card(props){
    let badgeText
    if(props.card.openSpots === 0){
        badgeText = 'SOLD OUT'
    } else if(props.card.location === 'Online'){
        badgeText = 'ONLINE'
    }
    console.log(props)
    return (
        <div className="card-container">
           
                {badgeText &&
                 <div className="card-badge"> 
                <span>{badgeText}</span> 
                </div>}


            <img className = "cardImg" src={`./images/${props.card.coverImg}`} alt=""  />
            <div className="cardAllDetails">
                <div className="cardReviews">
                    <img className='cardStar' src={Star} alt="" />
                    <span>{props.card.stats.rating}</span>
                    <span>({props.card.stats.reviewCount})</span>
                    <img className = "cardEl" src={Ellipse} alt="" />
                    <span>{props.card.location}</span>
                </div>
                <div className="cardDetails">
                    <div className="desc">
                    {props.card.title}
                    </div>
                    <div className="rate">
                        <span className='boldtext'>From $ {props.card.price}</span>
                        <span className='simpletext'>/ Person</span>
                    </div>
                </div>
            </div>
        </div>
    )
}