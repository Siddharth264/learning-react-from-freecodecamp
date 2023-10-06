import reactLogo from '..//assets//logo.svg'

export default function Navbar(){
    return(
        <div className='container'>
            <nav className='nav-bar'>
                <div className='nav-logo-title'>
                    <img src={reactLogo} alt='react logo' width="100px"/>
                    <h2>React Facts</h2>
                </div>
                <div className='nav-desc'>
                    <h2>React Course - Project 1</h2>
                </div>
            </nav>
      </div>
    );
}