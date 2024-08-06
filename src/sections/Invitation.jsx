import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

const CalendarItem = (props) => {
  const theme = useTheme();
  const lgSize = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Grid
      item
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      xs={3}
    >
      <div
        style={{
          width: lgSize ? "75px" : "45px",
          height: lgSize ? "75px" : "45px",
          borderRadius: "50%",
          backgroundColor: "#5A6548",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5px",
          fontWeight: 'bold',
          fontSize: lgSize ? "26px" : "18px",
        }}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {props.number}
      </div>
      {/* eslint-disable-next-line react/prop-types */}
      {props.text}
    </Grid>
  );
};
const Invitation = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      const targetDate = new Date("November 24, 2024 18:00:00").toLocaleString(
        "en-US",
        { timeZone: "America/Mexico_City" }
      );
      const now = new Date().toLocaleString("en-US", {
        timeZone: "America/Mexico_City",
      });
      const difference = new Date(targetDate) - new Date(now);

      // Calculate time left
      const timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };

      // Update state
      setTimeLeft(timeLeft);
    }, 1000);

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <Grid
      container
      style={{
        textAlign: "center",
      }}
    >
      <Grid item xs={12} sx={{ pt: 2, px: 2 }}>
        <Typography
          variant="h4"
          sx={{
            letterSpacing: "1.5px",
            fontFamily: "JakartaSans",
            pt: 0.7,
            pb: 3,
          }}
        >
          Estás Invitado
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ pb: 2, px: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "JakartaSans",
            marginTop: "-16px",
          }}
        >
          Tu presencia en nuestra boda haría este día aún más memorable.
          ¡Nos gustaría contar contigo!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container sx={{ py: 2, px: 3 }}>
          <CalendarItem number={timeLeft.days} text="Días" />
          <CalendarItem number={timeLeft.hours} text="Horas" />
          <CalendarItem number={timeLeft.minutes} text="Minutos" />
          <CalendarItem number={timeLeft.seconds} text="Segundos" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Invitation;
