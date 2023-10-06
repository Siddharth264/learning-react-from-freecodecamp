import twitter from '..//assets//TwitterIcon.svg'
import fb from '..//assets//FacebookIcon.svg'
import insta from '..//assets//InstagramIcon.png'
import Github from '..//assets//GitHubIcon.svg'

export default function Footer(){
    return(
        <div className="footer">
            <div className="icon"><img src={twitter} alt="" /></div>
            <div className="icon"><img src={fb} alt="" /></div>
            <div className="icon"><img src={insta} alt="" /></div>
            <div className="icon"><img src={Github} alt="" /></div>
        </div>
    );
}