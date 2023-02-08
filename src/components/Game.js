// components
import Keyboard from "./Keyboard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Game() {
  return (
    <Box
      sx={{
        width: 0.9,
        height: 0.9,
        padding: 2,
        borderRadius: 4,
        backgroundColor: "antiquewhite",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h2>Game Page</h2>
        </Grid>
        <Grid item xs={12} className="keyboardHolder">
          <Keyboard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Game;
