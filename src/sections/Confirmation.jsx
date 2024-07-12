import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useQuery } from "../hooks/use-query";

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

  const confirmationText = `?text=Hola%21%20Confirmo%20mi%20asistencia%20a%20la%20boda%20de%20Russell%20y%20Brandon%20el%2024%20de%20Febrero.%20Mi%20nombre%20es%3A`;
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
        <Typography variant="h5" textAlign="center">
          PASES
        </Typography>
        <img
          src="./assets/icons/ticket.png"
          alt="Wedding tickets"
          style={{
            height: "70px",
            width: "70px",
          }}
        />
        <Typography variant="body1" fontFamily="JakartaSans">
          Para ti, {hashInvites[invites] || 0} pase{hashInvites[invites] > 1 ? 's' : ''}.
        </Typography>
      </Grid>
      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={5}
      >
        <Typography variant="h5" textAlign="center">
          DRESSCODE
        </Typography>
        <img
          src="./assets/icons/clothes.png"
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
        >
          Formal • No niños
        </Typography>
      </Grid>
      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h5" textAlign="center">
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
          Tu presencia es nuestro mayor regalo. Pero si deseas tener algún
          detalle con nosotros, nos encantaría tu apoyo para nuestra luna de
          miel.
        </Typography>

        <Box
          sx={{
            margin: "1.2rem 0",
            border: "1px solid black",
            padding: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "250px",
          }}
        >
          <img
            src="./assets/icons/envelope.png"
            alt="Notebook"
            style={{
              height: "50px",
              width: "50px",
            }}
          />
          <Typography variant="body1" textAlign="center">
            Opcionalmente puedes tomar un sobre el día del evento
          </Typography>
        </Box>
      </Grid>

      <Grid item width="90%" pb={3}>
        <Divider />
      </Grid>

      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={8}
      >
        <Typography variant="h4" textAlign="center" fontWeight="bold">
          CONFIRMAR
          <br /> ASITENCIA
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
          Por favor, confirma tu asistencia a más tardar el 1 de Febrero del
          2024
        </Typography>
        <Box m={1} minWidth={300}>
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
        </Box>
      </Grid>

      <Grid
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
      </Grid>
    </Grid>
  );
};

export default Confirmation;
