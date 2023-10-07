import Earth from '../assets/Earth.png';

const Header = () => {
  return (
    <div className='header'>
        <img src={Earth} alt="earth-img" />
        <span>my travel journal</span>
    </div>
  )
}

export default Header