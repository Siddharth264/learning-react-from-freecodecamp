import Memes from "../assets/memesData"

const Meme = () => {
  function getRandomMeme() {
    // write code here
    const randomIndex = Math.floor(Math.random() *100)
    console.log(Memes.data.memes[randomIndex].name)
    return Memes.data.memes[randomIndex].url
  }
  const url = getRandomMeme();
  return (
    <div className="meme-container">
      <img src={url} alt="" />
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
