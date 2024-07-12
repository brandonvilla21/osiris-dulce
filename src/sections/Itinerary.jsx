/* eslint-disable react/prop-types */
import { Button, Grid, Typography } from "@mui/material";

const Item = (props) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        textAlign: "center",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "2rem",
        fontWeight: "bold",
        backgroundColor: `${props.backgroundColor || "inherit"}`,
      }}
    >
      <img
        src={props.imageSrc}
        alt={props.imageAlt}
        style={{
          height: "100px",
          width: "100px",
        }}
      />
      <Typography variant="h5">{props.title}</Typography>
      <Typography
        variant="body1"
        fontFamily="JakartaSans"
        sx={{ maxWidth: "15rem", py: 2 }}
      >
        {props.subtitle}
      </Typography>
      <Grid item xs={12} style={{ width: "100%" }}>
        <Grid alignItems="center" container style={{ padding: "1rem 0" }}>
          <Grid item xs={5} display="flex" justifyContent="flex-end">
            <Typography variant="h5" fontFamily="JakartaSans">
              {props.date}
            </Typography>
          </Grid>
          <Grid item xs={2} display="flex" justifyContent="center">
            <div
              style={{
                border: "1px solid #7b7d7b",
                width: "0px",
                height: "4rem",
              }}
            />
          </Grid>
          <Grid item xs={5} display="flex" justifyContent="flex-start">
            <Typography variant="h5" fontFamily="JakartaSans">
              {props.hour}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Itinerary = () => {
  return (
    <Grid
      container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          textAlign: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        <img
          src={"./assets/icons/osiris/rings.gif"}
          alt={"Anillos de compromiso"}
          style={{
            height: "100px",
            width: "100px",
          }}
        />
        <Typography variant="h5">
          CEREMONIA <br />& CELEBRACIÓN
        </Typography>
        <Typography
          variant="body1"
          fontFamily="JakartaSans"
          sx={{ maxWidth: "15rem", py: 2 }}
        >
          Rancho "Los Adobes"
        </Typography>
        <Grid item xs={12} style={{ width: "100%" }}>
          <Grid alignItems="center" container style={{ padding: "1rem 0" }}>
            <Grid item xs={5} display="flex" justifyContent="flex-end">
              <Typography variant="h5" fontFamily="JakartaSans">
                23 NOV
              </Typography>
            </Grid>
            <Grid item xs={2} display="flex" justifyContent="center">
              <div
                style={{
                  border: "1px solid #7b7d7b",
                  width: "0px",
                  height: "4rem",
                }}
              />
            </Grid>
            <Grid item xs={5} display="flex" justifyContent="flex-start">
              <Typography variant="h5" fontFamily="JakartaSans">
                09:00 pm
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">Ver Ubicación</Button>
        </Grid>
      </Grid>
      <Grid
        item
        display="flex"
        flexDirection="column"
        alignItems="center"
        py={5}
        sx={{
          width: "100%",
          padding: "0 15px",
        }}
        xs={12}
      >
        <img
          src="./assets/icons/wedding-location.png"
          alt="Wedding location"
          style={{
            height: "100px",
            width: "100px",
            paddingBottom: "2rem",
          }}
        />
        <Typography fontFamily="JakartaSans" variant="button" pb={1}>
          Ubicación del evento
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.9836053577646!2d-103.4636302249465!3d19.713322131656277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f86afb948b273%3A0xe744328934ac4689!2sLa%20Quinta%20SM%20Hotel!5e0!3m2!1sen!2smx!4v1703613703183!5m2!1sen!2smx"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default Itinerary;
