import { Box, Button, Collapse, Divider, Grid, Typography } from "@mui/material";
import { useQuery } from "../hooks/use-query";
import FormConfirmation from "./FormConfirmation";
import { useState } from "react";

const hashInvites = {
  42661: 1,
  42361: 2,
  42461: 3,
  42061: 4,
  42961: 5,
  12661: 6,
  62661: 7,
  72661: 8,
  92661: 9,
  32661: 10,
};

const Confirmation = () => {
  const query = useQuery();
  const invites = query.get("invites");
  const [showData, setShowData] = useState(false);
  const handleShowData = () => {
    setShowData(true);
  };
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pt={5}
    >
      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h5" textAlign="center" fontWeight="bold" pb={1}>
          REGALOS
        </Typography>
        <img
          src="./assets/icons/gift.png"
          alt="Notebook"
          style={{
            height: "70px",
            width: "70px",
          }}
        />
        <Typography
          variant="body1"
          fontFamily="JakartaSans"
          textAlign="center"
          pt={1}
          px={2}
          sx={{ maxWidth: "400px" }}
        >
          Ya tenemos pensado el Ferrari, la mansión y el velero. Ahora lo único
          que nos falta es ¡el dinero!
          <br />
          Contaremos con un buzón en la boda en el que podrán depositar un sobre
          con su regalo en efectivo
        </Typography>
        <Button onClick={handleShowData} variant="outlined" sx={{ mt: 4 }}>
          Ver datos bancarios
        </Button>
        <Collapse in={showData}>
          {" "}
          <Typography variant="body1" color="gray" mt={2} textAlign="center">
            Tarjeta <strong>Banamex</strong>
            <br />
            <strong>Dulce María Sánchez Fregoso</strong> <br />
            Clabe: <strong>002342701806449529</strong>
          </Typography>
        </Collapse>
      </Grid>
      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        pt={5}
      >
        <img
          src="./assets/icons/hotel-icon.png"
          alt="Notebook"
          style={{
            height: "70px",
            width: "70px",
          }}
        />
        <Typography variant="h5" textAlign="center" fontWeight="bold" pb={1}>
          OPCIONES <br /> DE HOSPEDAJE
        </Typography>
        <Typography
          variant="body1"
          fontFamily="JakartaSans"
          textAlign="center"
          pt={1}
          px={2}
          sx={{ maxWidth: "400px" }}
        >
          <a
            href="https://maps.app.goo.gl/FU5XPsMWWwcpfS7i6"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#5A6548", textDecoration: "underline" }}
          >
            Hotel Tlayolan
          </a>
        </Typography>
        <Typography
          variant="body1"
          fontFamily="JakartaSans"
          textAlign="center"
          pt={1}
          px={2}
          sx={{ maxWidth: "400px" }}
        >
          <a
            href="https://maps.app.goo.gl/wWnqDnCfwYQQMyES9"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#5A6548", textDecoration: "underline" }}
          >
            Hotel Zapotlán
          </a>
        </Typography>
        <Typography
          variant="body1"
          fontFamily="JakartaSans"
          textAlign="center"
          pt={1}
          px={2}
          sx={{ maxWidth: "400px" }}
        >
          <a
            href="https://maps.app.goo.gl/upqMcyGstgPdz4GK8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#5A6548", textDecoration: "underline" }}
          >
            Posada San José
          </a>
        </Typography>
        <Typography
          variant="body1"
          fontFamily="JakartaSans"
          textAlign="center"
          pt={1}
          px={2}
          sx={{ maxWidth: "400px" }}
        >
          <a
            href="https://maps.app.goo.gl/Yi9XiispjTeJFEEh7"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#5A6548", textDecoration: "underline" }}
          >
            Hotel Fuerte Real
          </a>
        </Typography>
      </Grid>
      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={8}
      >
        <Typography variant="h5" textAlign="center" fontWeight="bold">
          CONFIRMAR
          <br /> ASISTENCIA
        </Typography>
        <Typography
          variant="body2"
          fontFamily="JakartaSans"
          fontSize="1.2rem"
          textAlign="center"
          pt={1}
          px={2}
          pb={2}
        >
          Por favor, confirma tu asistencia. ¡Esperemos que estés ahí!
        </Typography>
        <FormConfirmation />
        {/* <Box m={1} minWidth={300}>
          <Button
            fullWidth
            href={"https://wa.me/+523327988685" + confirmationText}
            target="_blank"
            variant="outlined"
            color="formal"
          >
            Confirmar con la novia
          </Button>
        </Box>
        <Box m={1} minWidth={300}>
          <Button
            fullWidth
            href={"https://wa.me/+523411361316" + confirmationText}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            color="formal"
          >
            Confirmar con el novio
          </Button>
        </Box>
        <Box m={1} minWidth={300}>
          <Button
            fullWidth
            href={"https://wa.me/+523331727520" + confirmationText}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            color="formal"
          >
            Confirmar con Sara
          </Button>
        </Box> */}
      </Grid>

      <Grid item xs={12} sx={{ pt: 0, pb: 0, textAlign: "center" }}>
        <img
          style={{ maxWidth: "75%" }}
          src="/assets/icons/osiris/te-esperamos.png"
        />
      </Grid>
      <Grid item xs={12} sx={{ pt: 0, pb: 3, textAlign: "center" }}>
        <img
          style={{ maxWidth: "50%" }}
          src="/assets/icons/osiris/osiris-y-dulce-blanco.png"
        />
      </Grid>
      {/* <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        pt={4}
        sx={{
          backgroundColor: "#D5F5E6",
          width: "100%",
        }}
      >
        <Typography variant="h5" textAlign="center">
          TE ESPERAMOS
        </Typography>
        <img
          src="./assets/r-b-logo.png"
          alt="Notebook"
          style={{
            height: "350px",
            width: "350px",
          }}
        />
      </Grid> */}
    </Grid>
  );
};

export default Confirmation;
