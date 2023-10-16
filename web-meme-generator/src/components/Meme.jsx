import React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Memes from '../assets/memesData'

export default function Form() {
  const [url, setUrl] = React.useState(Memes.data.memes[57].url)
  const [toptext, setTopText] = React.useState("Shut Up")
  const [bottomText, setBottomText] = React.useState("And Take My Money")
  function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() *100)
    setUrl(Memes.data.memes[randomIndex].url)
  }
  

  return (
    <div className="form-container">
      <div className="box-container">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1.5, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField value={toptext} onChange={(e)=> setTopText(e.target.value)} className="form-input" id="outlined-basic" variant="outlined" placeholder="Top-text"/>
      </Box>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1.5, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField value={bottomText} onChange={(e)=> setBottomText(e.target.value)} className="form-input" id="outlined-basic" variant="outlined" placeholder="Bottom text"/>
      </Box>
      </div>

      <div className="submit-button">
        <Button onClick={getRandomMeme} variant="contained">Get a new Meme Image 🖼️</Button>
      </div>


      <div className="meme-container">
      <img src={url} alt="" />
      <div className="text1">
        <span>{toptext}</span>
      </div>
      <div className="text2">
        <span>{bottomText}</span>
      </div>
    </div>
    </div>
  );
}
