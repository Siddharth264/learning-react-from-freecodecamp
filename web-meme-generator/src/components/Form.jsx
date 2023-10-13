import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Form() {
  

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
        <TextField className="form-input" id="outlined-basic" variant="outlined" placeholder="Top-text"/>
      </Box>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1.5, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField className="form-input" id="outlined-basic" variant="outlined" placeholder="Bottom text"/>
      </Box>
      </div>

      <div className="submit-button">
        <Button variant="contained">Get a new Meme Image 🖼️</Button>
      </div>
    </div>
  );
}
