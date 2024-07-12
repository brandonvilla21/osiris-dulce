import { Typography } from "@mui/material";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="container">
      <div className="subtitle">
        <img
          src="/assets/icons/osiris/osiris-y-dulce.png"
          style={{ maxWidth: "100%" }}
        />
      <Typography
        variant="h6"
        sx={{
          letterSpacing: "2px",
          fontFamily: "JakartaSans",
          marginTop: '-20px',
          color: 'white',
          pt: 1,
        }}
      >
        NOS CASAMOS
      </Typography>
      </div>
    </div>
  );
};

export default Welcome;
