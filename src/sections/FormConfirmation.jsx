import { useState } from "react";
import {
  Container,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Stack,
  Box,
} from "@mui/material";
const phoneNumber = "3411361316";
const FormConfirmation = () => {
  const [formData, setFormData] = useState({
    yesNo: "",
    name: "",
    food: "",
    song: "",
    sayHello: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let message = "";
    if (formData.yesNo === "No") {
      message = `¡Hola!, Mi nombre es *${formData.name}*. Este mensaje es para informar que no podré asistr a la boda de Ducle y Osiris`;
    } else if (formData.yesNo === "Yes") {
      message = `¡Hola!, Mi nombre es *${
        formData.name
      }*. Este mensaje es para confirmar mi asistencia a la boda de Ducle y Osiris
      - Intolerancia o alergias alimentarias: ${
        formData.food ? `*${formData.food}*` : "*Ninguna*"
      }.
      ${
        formData.song ? `- Canción que no puede faltar: *${formData.song}*` : ""
      }
      ${
        formData.sayHello
          ? `- Este es el siguiente mesnaje que me gustaria dejar a los novios: *${formData.sayHello}*`
          : ""
      }
      `;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" style={{ marginBottom: "16px" }}>
          <RadioGroup
            name="yesNo"
            value={formData.yesNo}
            onChange={handleChange}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <FormControlLabel
              label="Si, allí estaré!"
              control={<Radio />}
              value="Yes"
            />
            <FormControlLabel
              label="No podré asistir"
              control={<Radio />}
              value="No"
            />
          </RadioGroup>
        </FormControl>

        <Stack spacing={1}>
          <TextField
            label="Nombre y Apellido"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Intolerancia o alergias alimentarias"
            name="food"
            value={formData.food}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Canción que no puede faltar"
            name="song"
            value={formData.song}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="¡Felicita a los novios aqui!"
            multiline
            name="sayHello"
            value={formData.sayHello}
            onChange={handleChange}
            minRows={4}
            fullWidth
          />
          <Box
            pt={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              disabled={!formData.yesNo || !formData.name}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Enviar Respuesta
            </Button>
          </Box>
        </Stack>
      </form>
    </Container>
  );
};

export default FormConfirmation;
