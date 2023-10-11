import Card from './Card'
import data from "../assets/data";

export default function CardsSection(){
    const cardElements= data.map((card)=> {
        return(
            <Card
                key = {card.id}
                card = {card}
            />)
    });
    return(
        <div className="cardssection">
            {cardElements}
        </div>
    )
}