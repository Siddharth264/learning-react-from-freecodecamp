import TrollFace from '../assets/trollface.png'

export default function Header(){
    return(
        <div className="header-container">
            <div className="imgHeader">
                <img src={TrollFace} alt="" />
                <div className="title">
                    <span>Meme Generator</span>
                </div>
            </div>
            <div className="headingTag">
                <span>React Course : Project 3</span>
            </div>
        </div>
    )
    }

