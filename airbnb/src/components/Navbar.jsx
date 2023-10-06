import Vector from '../assets/Vector.png';

export default function Navbar(){
    return(
        <div className="navbar-container">
            <div className="navbar-logo">
                <img src={Vector} alt="" />
            </div>
        </div>
    );
}