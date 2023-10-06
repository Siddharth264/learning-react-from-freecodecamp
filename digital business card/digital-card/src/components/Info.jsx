import mainImg from '..//assets//Rectangle90.png'


export default function Info(){
    return(
        <div className="info-container">
            <div className="info-img">
                <img src={mainImg} alt="mainimage"/>
            </div>
            <div className="info-details">
                <span>Laura Smith</span>
                <span>FrontEnd Developer</span>
                <span>laurasmith.website</span>
            </div>
        </div>
    );
}