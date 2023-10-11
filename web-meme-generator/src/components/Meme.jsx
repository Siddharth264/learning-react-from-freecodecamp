import Memeimg from "../assets/memeimg.png";
const Meme = () => {
  return (
    <div className="meme-container">
      <img src={Memeimg} alt="" />
      <div className="text1">
        <span>Shut Up</span>
      </div>
      <div className="text2">
        <span>And Take My Money</span>
      </div>
    </div>
  );
};

export default Meme;
